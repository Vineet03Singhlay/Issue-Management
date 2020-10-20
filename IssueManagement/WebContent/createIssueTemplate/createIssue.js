app.controller("createIssueController", function($scope, $http, $location){
	
	$scope.test={conditionOption:'',durationValue:'',durationUnitOption:'',storageTemperature:'',humidityValue:'',notesValue:'',
			tasteValue:'',flavorValue:'',actualColor:'',expectedColor:'',
			textureValue:'',sizeValue:'',aromaValue:''}
	
	
	$http.get('http://localhost:8088/IssueManagement/getProduct').then(function(response){
		$scope.productValue=response.data;
		});
	
	$http.get('http://localhost:8088/IssueManagement/getSupplier').then(function(response){
		$scope.supplierValue=response.data;
		});
	
	$http.get('http://localhost:8088/IssueManagement/getLocation').then(function(response){
		$scope.locationNameValue=response.data;
		});
	
	$http.get('http://localhost:8088/IssueManagement/getLocationType').then(function(response){
		$scope.locationTypeValue=response.data;
		});
	
	$http.get('http://localhost:8088/IssueManagement/getIssueType').then(function(response){
		$scope.issueTypeValue=response.data;
		});
	$http.get('http://localhost:8088/IssueManagement/getIssueSubtype').then(function(response){
		$scope.issueSubtypeValue=response.data;
		});
	$http.get('http://localhost:8088/IssueManagement/getHowReceived').then(function(response){
		$scope.howReceivedValue=response.data;
		});
	$http.get('http://localhost:8088/IssueManagement/getCondition').then(function(response){
		$scope.conditionValue=response.data;
		});
	$http.get('http://localhost:8088/IssueManagement/getDurationUnit').then(function(response){
		$scope.durationUnitValue=response.data;
		});
	
	$scope.self=this;
	self.submit_form = function()
    {
		url= 'http://localhost:8088/IssueManagement/createIssue';
	     
	     var fd = new FormData();
	     var dataArray = new FormData();
	     for(var i=0;i<files_array.length;i++)
	     {
	    	 dataArray.append('uploadedFile', files_array[i]);
	     }
	     dataArray.append('issueType',$scope.issueTypeOption);
	     dataArray.append('issueSubtype',$scope.issueSubtypeOption);
	     dataArray.append('product',$scope.productOption);
	     dataArray.append('supplier',$scope.supplierOption);
	     dataArray.append('locationType',$scope.locationTypeOption);
	     dataArray.append('location',$scope.locationNameOption);
	     dataArray.append('reportedBy',$scope.reportedBy);
	     dataArray.append('issueDate',new Date($scope.issueDate).toLocaleDateString());
	     dataArray.append('howReceived',$scope.howReceivedOption);
	     dataArray.append('issueDescription',$scope.issueDescription);
	     dataArray.append('condition',$scope.test.conditionOption);
	     dataArray.append('duration',$scope.test.durationValue);
	     dataArray.append('durationUnit',$scope.test.durationUnitOption);
	     dataArray.append('storageTemperature',$scope.test.storageTemperature);
	     dataArray.append('humidity',$scope.test.humidityValue);
	     dataArray.append('notes',$scope.test.notesValue);
	     dataArray.append('taste',$scope.test.tasteValue);
	     dataArray.append('flavor',$scope.test.flavorValue);
	     dataArray.append('actualColor',$scope.test.actualColor);
	     dataArray.append('expectedColor',$scope.test.expectedColor);
	     dataArray.append('texture',$scope.test.textureValue);
	     dataArray.append('prodcutSize',$scope.test.sizeValue);
	     dataArray.append('aroma',$scope.test.aromaValue);
	     var config = { headers: {'Content-Type': undefined},
	                    transformRequest: angular.identity
	                  }
	     $http.post(url, dataArray, config);
	 
	     alert("Issue has created!");
	     $location.path('/home');
		
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
		document.getElementById("issueFile").innerHTML = text;
		
		
		i=i+1;
		document.getElementById("documentCount").innerHTML = i;
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
        document.getElementById("issueFile").innerHTML = text;
        document.getElementById("documentCount").innerHTML = files_array.length;
		
        console.log(files_array);
    }
});
