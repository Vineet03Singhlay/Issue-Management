(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('createIssueController', function($scope, $state, $stateParams, $http){
			var vm = this;
			console.log('This is create issue controller.');
			
			vm.selectFile = selectFile;
			vm.removeFiles = removeFiles;
			
			vm.test={conditionOption:'',durationValue:'',durationUnitOption:'',storageTemperature:'',humidityValue:'',notesValue:'',
					tasteValue:'',flavorValue:'',actualColor:'',expectedColor:'',
					textureValue:'',sizeValue:'',aromaValue:''}
			
			
			$http.get('http://localhost:8088/IssueManagement/getProduct').then(function(response){
				vm.productValue=response.data;
				});
			
			$http.get('http://localhost:8088/IssueManagement/getSupplier').then(function(response){
				vm.supplierValue=response.data;
				});
			
			$http.get('http://localhost:8088/IssueManagement/getLocation').then(function(response){
				vm.locationNameValue=response.data;
				});
			
			$http.get('http://localhost:8088/IssueManagement/getLocationType').then(function(response){
				vm.locationTypeValue=response.data;
				});
			
			$http.get('http://localhost:8088/IssueManagement/getIssueType').then(function(response){
				vm.issueTypeValue=response.data;
				});
			$http.get('http://localhost:8088/IssueManagement/getIssueSubtype').then(function(response){
				vm.issueSubtypeValue=response.data;
				});
			$http.get('http://localhost:8088/IssueManagement/getHowReceived').then(function(response){
				vm.howReceivedValue=response.data;
				});
			$http.get('http://localhost:8088/IssueManagement/getCondition').then(function(response){
				vm.conditionValue=response.data;
				});
			$http.get('http://localhost:8088/IssueManagement/getDurationUnit').then(function(response){
				vm.durationUnitValue=response.data;
				});
			
			vm.self=this;
			self.submit_form = function()
		    {
				 var url = 'http://localhost:8088/IssueManagement/createIssue';
			     
			     var fd = new FormData();
			     var dataArray = new FormData();
			     for(var i=0;i<files_array.length;i++)
			     {
			    	 dataArray.append('uploadedFile', files_array[i]);
			     }
			     dataArray.append('issueType',vm.issueTypeOption);
			     dataArray.append('issueSubtype',vm.issueSubtypeOption);
			     dataArray.append('product',vm.productOption);
			     dataArray.append('supplier',vm.supplierOption);
			     dataArray.append('locationType',vm.locationTypeOption);
			     dataArray.append('location',vm.locationNameOption);
			     dataArray.append('reportedBy',vm.reportedBy);
			     dataArray.append('issueDate',new Date(vm.issueDate).toLocaleDateString());
			     dataArray.append('howReceived',vm.howReceivedOption);
			     dataArray.append('issueDescription',vm.issueDescription);
			     dataArray.append('condition',vm.test.conditionOption);
			     dataArray.append('duration',vm.test.durationValue);
			     dataArray.append('durationUnit',vm.test.durationUnitOption);
			     dataArray.append('storageTemperature',vm.test.storageTemperature);
			     dataArray.append('humidity',vm.test.humidityValue);
			     dataArray.append('notes',vm.test.notesValue);
			     dataArray.append('taste',vm.test.tasteValue);
			     dataArray.append('flavor',vm.test.flavorValue);
			     dataArray.append('actualColor',vm.test.actualColor);
			     dataArray.append('expectedColor',vm.test.expectedColor);
			     dataArray.append('texture',vm.test.textureValue);
			     dataArray.append('prodcutSize',vm.test.sizeValue);
			     dataArray.append('aroma',vm.test.aromaValue);
			     var config = { headers: {'Content-Type': undefined},
			                    transformRequest: angular.identity
			                  }
			     $http.post(url, dataArray, config);
			 
			     alert("Issue has created!");
			     $state.go('base.searchIssue');
				
		    }
			var file_input;
			function selectFile(event) {
				console.log('file select');
			    //event.preventDefault();

			    file_input = document.createElement('input');
			    file_input.addEventListener("change", uploadFile, false);
			    file_input.type = 'file';
			    file_input.click();
			    
			    
			}

			var files_array=[];

			var i=0,text="";
			
			vm.fileList = [];
			function uploadFile()
			{
				let dataArray = new FormData();
				files_array[i]=file_input.files[0];
				
				text += "<li>" + files_array[i].name +"<span ng-click=\"vm.removeFiles('"+files_array[i].name+"')\" style=\"cursor:pointer;\" class=\"w3-right w3-margin-right\">x</span>" + "</li>";
				document.getElementById("issueFile").innerHTML = text;
				
				
				i=i+1;
				document.getElementById("documentCount").innerHTML = i;
				console.log(files_array);
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
		        	text += "<li>" + files_array[i].name +"<span onclick=\"removeFiles('"+files_array[i].name+"')\" style=\"cursor:pointer;\" class=\"w3-right w3-margin-right\">x</span>" + "</li>";
		    	}
		        document.getElementById("issueFile").innerHTML = text;
		        document.getElementById("documentCount").innerHTML = files_array.length;
				
		        console.log(files_array);
		    }

		})
})();