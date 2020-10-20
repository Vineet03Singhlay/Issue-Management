app.controller("viewIssueController", function($scope, $routeParams, $http, $location){
	
	
	$scope.documentCount = 0;
	$scope.escalationID = 'ESC0000201';
	$scope.issueNum = null;
	
	$http.get("http://localhost:8088/IssueManagement/getIssueListWithValues?issueNumber="+$routeParams.issueId).then(function(response){
        $scope.viewIssueData = response.data;
        $scope.issueNum = response.data

    });	
	
	$http.get("http://localhost:8088/IssueManagement/getIssueFile?issueNumber="+$routeParams.issueId).then(function(response){
        $scope.viewFileList = response.data;
        $scope.fileListLength = $scope.viewFileList.length;
    });	
	
	/*$http.get("http://localhost:8088/IssueManagement/getResponseFile?issueNumber="+$routeParams.issueId).then(function(response){
        $scope.viewResponseFileList = response.data;
        
    });*/
	
	$scope.issueStatusTable = [
		{ fromStatus: "Open", toStatus: "Closed", comments: "", changedBy: "Suraj Kumar", changedDate: "31 Aug 2018 07:19:31 AM"},
		{ fromStatus: "-", toStatus: "Closed", comments: "", changedBy: "TS010516_Admin", changedDate: "15 Aug 2018 07:19:31 AM"},
	];
	
	$scope.issueAuditTable = [
		{ field:"Justified",	before_situation:"-", after_situation:"Yes", changed_by:"TS010516_Admin", changed_time:"31 Aug 2018 07:19:31 AM"},
		{ field:"Status",	before_situation:"-", after_situation:"Open", changed_by:"TS010516_Admin", changed_time:"31 Aug 2018 07:19:31 AM"},
		{ field:"Document",	before_situation:"-", after_situation:"Created", changed_by:"TS010516_Admin", changed_time:"31 Aug 2018 07:19:31 AM"},
	];
	
	$scope.concatDash = function(firstValue, secondValue){
		return firstValue + " - " + secondValue;
	};
	
	$scope.downloadIssueFile = function(fileId){
		$http.get("http://localhost:8088/IssueManagement/downloadIssueFile?fileId="+fileId).then(function(response){
	        alert(fileId);
	        
	    });
	}
	
	$scope.self=this;
	self.submit_justify_form = function()
    {
		
		url= 'http://localhost:8088/IssueManagement/addResponse';
		
		var fd = new FormData();
	     var dataArray = new FormData();	
	     for(var i=0;i<files_array.length;i++)
	     {
	    	 dataArray.append('uploadedFile', files_array[i]);
	     }
	     dataArray.append('responseInfo',$scope.responseDescription);
	     dataArray.append('justified',"Yes");
	     dataArray.append('status',"Open");
	     dataArray.append('issueNumber',$scope.issueNum[0].issueNumber);
	     dataArray.append('document',"created");
	     dataArray.append('responsibleParty',$scope.issueNum[0].locationTypeValue);
	     
	     var config = { headers: {'Content-Type': undefined},
                 transformRequest: angular.identity
               }
		 $http.post(url, dataArray, config);
	     
	     alert("Response has been added!");
	     $location.path('/viewIssue/'+$scope.issueNum[0].issueNumber);
		
    }
	
	self.submit_unjustify_form = function()
    {
		
		url= 'http://localhost:8088/IssueManagement/addResponse';
		
		var fd = new FormData();
	     var dataArray = new FormData();	
	     for(var i=0;i<files_array.length;i++)
	     {
	    	 dataArray.append('uploadedFile', files_array[i]);
	     }
	     dataArray.append('responseInfo',$scope.responseDescription);
	     dataArray.append('justified',"No");
	     dataArray.append('status',"Close");
	     dataArray.append('issueNumber',$scope.issueNum[0].issueNumber);
	     dataArray.append('document',"created");
	     dataArray.append('responsibleParty',$scope.issueNum[0].locationTypeValue);
	     
	     var config = { headers: {'Content-Type': undefined},
                 transformRequest: angular.identity
               }
		 $http.post(url, dataArray, config);
	     
	     alert("Response has been added!");
	     $location.path('/viewIssue/'+$scope.issueNum[0].issueNumber);
		
    }
	
	selectFile=function(event) {
		
	    event.preventDefault();

	    file_input = document.createElement('input');
	    file_input.addEventListener("change", uploadFile, false);
	    file_input.type = 'file';
	    file_input.click();
	    
	    
	}

	var files_array=[];

	var i=0,text="";
	
	$scope.fileList = [];
	uploadFile=function()
	{
		let dataArray = new FormData();
		files_array[i]=file_input.files[0];
		
		text += "<li>" + files_array[i].name +"<span onclick=\"removeFiles('"+files_array[i].name+"')\" style=\"cursor:pointer;\" class=\"w3-right w3-margin-right\">x</span>" + "</li>";
		document.getElementById("responseFile").innerHTML = text;
		i=i+1;
		
		console.log(files_array);
	}
	
	removeFiles = function (x) {
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
        document.getElementById("responseFile").innerHTML = text;
    
        console.log(files_array);
    }

	
	document.getElementById("defaultOpen").click();
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}
});
