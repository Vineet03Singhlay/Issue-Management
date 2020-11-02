(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('responseController', function($scope, $state, $stateParams, $http){
			var vm = this;
			
			vm.removeFiles = removeFiles;
			vm.selectFile = selectFile;
			vm.passValues = passValues;
			
			$scope.$on('ViewIssueData', function(evt, data){
				vm.issueData = data;
				console.log('view data '+vm.issueData[0].issueNumber);
			});
			
			console.log('This is response controller');

			$http.get("http://localhost:8088/IssueManagement/getResponseById?issueNumber="+$stateParams.id).then(function(response){
		        vm.ResponseDetails = response.data;
		        
		    });

		    $http.get("http://localhost:8088/IssueManagement/getResponseFile?issueNumber="+$stateParams.id).then(function(response){
		        vm.viewResponseFileList = response.data;
		        
		    });
		    var file_input;
		    function selectFile(event) {
		    	
		    	file_input = document.createElement('input');
			    file_input.addEventListener("change", uploadFile, false);
			    file_input.type = 'file';
			    file_input.click();
			    
			    
			}
		    
		   function passValues(data){
			   var dataArray = new FormData();
			   if (data == 'justify'){
				     for(var i=0;i<files_array.length;i++)
				     {
				    	 dataArray.append('uploadedFile', files_array[i]);
				     }
				     dataArray.append('responseInfo',vm.responseDescription);
				     dataArray.append('justified',"Yes");
				     dataArray.append('status',"Open");
				     dataArray.append('issueNumber',vm.issueData[0].issueNumber);
				     dataArray.append('document',"created");
				     dataArray.append('responsibleParty',vm.issueData[0].locationTypeValue);
			   }
			   else if(data == 'unjustify'){
				     for(var i=0;i<files_array.length;i++)
				     {
				    	 dataArray.append('uploadedFile', files_array[i]);
				     }
				     dataArray.append('responseInfo',vm.responseDescription);
				     dataArray.append('justified',"No");
				     dataArray.append('status',"Closed");
				     dataArray.append('issueNumber',vm.issueData[0].issueNumber);
				     dataArray.append('document',"created");
				     dataArray.append('responsibleParty','_');
			   }
			   
			   $scope.$emit('passResponse', dataArray);
		    }
		    
		    $scope.$on('bringResponse', function(evt, data){
		    	vm.passValues(data);
		    });

			var files_array=[];

			var i=0,text="";
			
			vm.fileList = [];
			function uploadFile()
			{
				let dataArray = new FormData();
				files_array[i]=file_input.files[0];
				
				text += "<li>" + files_array[i].name +"<span ng-click=\"vm.removeFiles('"+files_array[i].name+"')\" style=\"cursor:pointer;\" class=\"w3-right w3-margin-right\">x</span>" + "</li>";
				document.getElementById("responseFile").innerHTML = text;
				i=i+1;
				
				console.log(files_array);
				$scope.$emit('uploadedFileData', files_array);
			}
			
			function removeFiles(x) {
				var fileIndex, text="";
		        console.log(x);
		        console.log(files_array);
		        for(var i=0; i<files_array.length;i++)
		        	{
		        	if (files_array[i].name==x)
		        		{
		        			fileIndex=i;
		        		}
		        	}
		        files_array.splice(fileIndex,1);
		        for(var i=0; i<files_array.length;i++)
		    	{
		        	text += "<li>" + files_array[i].name +"<span ng-click=\"vm.removeFiles('"+files_array[i].name+"')\" style=\"cursor:pointer;\" class=\"w3-right w3-margin-right\">x</span>" + "</li>";
		    	}
		        document.getElementById("responseFile").innerHTML = text;
		    
		        console.log(files_array);
		    }

		})
})();