var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {$routeProvider
	
    .when("/home", {
        templateUrl : "searchIssue.htm",
        controller : "searchIssueController"
    			})
    			
    .when("/createIssue", {
        templateUrl : "createIssue.htm",
        controller : "createIssueController"
    			})
    			
    .when("/viewIssue/:issueId", {
        templateUrl : "viewIssue.htm",
        controller : "viewIssueController"
    }) 
    			
      .otherwise({
    	  			redirectTo: '/home'
      			});   
});

app.controller("mainController", function($scope){
	
	console.log('main controller');
	
});

app.controller("searchIssueController", function($scope, $http, $location){
	
	$scope.viewIssue=function(id)
	{
		$location.path('/viewIssue/'+id);
	}
	
	$scope.issueTypeValue = ["Product Quality", "Foreign Body", "Food Poisoning", "Distribution", "Incident", "Legal/Technical Advice", "Non-Conformance"];
	$scope.issueSubtypeValue = [];
	$scope.locationTypeValue = [];
	$scope.locationNameValue = [];
	$scope.productValue = [];
	$scope.supplierValue = [];
	$scope.justifiedValue = ["Yes", "No"];
	$scope.issueStatusValue = ["Open", "Closed"];
	$scope.responsiblePartyValue = [];
	$scope.countValue = [5,10,15,20,25,30];
	$scope.orderByMe = 'issueNumber';
	
	$http.get('http://localhost:8088/IssueManagement/getIssueTransact').then(function(response){
		$scope.searchIssueTable=response.data;
		});
	
	$scope.createXlSheet=function(JsonArray){

		var createXLSLFormatObj = [];
		 var xlsHeader = ["ISSUE ID", "ISSUE TYPE-ISSUE SUBTYPE", "LOCATION TYPE","LOCATION", "SUPPLIER", "PRODUCT", "RESPONSIBLE PARTY","ISSUE DATE", "ISSUE STATUS","JUSTIFIED?"];
		 createXLSLFormatObj.push(xlsHeader);
		 
		  
		 for(var i=0;i<JsonArray.length;i++)
			 {
			 var innerRowData = [];
			 
			 
				 innerRowData.push(JsonArray[i].issueNumber);
				 
				 innerRowData.push(JsonArray[i].issueTypeValue+"-"+JsonArray[i].issueSubtypeValue);

				 innerRowData.push(JsonArray[i].locationTypeValue);

				 innerRowData.push(JsonArray[i].locationValue);

				 innerRowData.push(JsonArray[i].supplier+"-"+JsonArray[i].supplierValue);

				 innerRowData.push(JsonArray[i].product+"-"+JsonArray[i].productValue);

				 innerRowData.push(JsonArray[i].responsibleParty);

				 innerRowData.push(new Date(JsonArray[i].issueDate).toLocaleDateString());

				 innerRowData.push(JsonArray[i].status);

				 innerRowData.push(JsonArray[i].justified);

				 createXLSLFormatObj.push(innerRowData);
			 
			 }
		 
		 var filename = "IssueList.xlsx";
		 /* Sheet Name */
		 var ws_name = "IssueListSheet";
	        var wb = XLSX.utils.book_new(),
	            ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);
	        /* Add worksheet to workbook */
	        XLSX.utils.book_append_sheet(wb, ws, ws_name);

	        /* Write workbook and Download */
	        XLSX.writeFile(wb, filename);
	}

	$scope.xlDownload=function()
	{
		alert('xl download');
		$scope.createXlSheet($scope.searchIssueTable);
	}

	$scope.countOption = 10;
	
	$scope.concatDash = function(firstValue, secondValue){
		return firstValue + " - " + secondValue;
	};

	$scope.issueTypeSubtypeFilter= function(issue)
	{
		console.log($scope.issueTypeSubtype);
		if( $scope.issueTypeSubtype==null  || issue.issueTypeValue.toLowerCase().indexOf($scope.issueTypeSubtype.toLowerCase()) !=-1
			|| issue.issueSubtypeValue.toLowerCase().indexOf($scope.issueTypeSubtype.toLowerCase()) !=-1
		)
			{
				return true;
			}
		return false;
	}
	
	$scope.locationFilter= function(issue)
	{
		console.log($scope.location);
		if( $scope.location==null  || issue.location.toLowerCase().indexOf($scope.location.toLowerCase()) !=-1
			|| issue.locationValue.toLowerCase().indexOf($scope.location.toLowerCase()) !=-1
		)
			{
				return true;
			}
		return false;
	}
	
	$scope.supplierFilter= function(issue)
	{
		console.log($scope.product);
		if( $scope.product==null  || issue.product.toLowerCase().indexOf($scope.product.toLowerCase()) !=-1
			|| issue.productValue.toLowerCase().indexOf($scope.product.toLowerCase()) !=-1
		)
			{
				return true;
			}
		return false;
	}
	
	$scope.productFilter= function(issue)
	{
		console.log($scope.supplier);
		if( $scope.supplier==null  || issue.supplier.toLowerCase().indexOf($scope.supplier.toLowerCase()) !=-1
			|| issue.supplierValue.toLowerCase().indexOf($scope.supplier.toLowerCase()) !=-1
		)
			{
				return true;
			}
		return false;
	}
	
	$scope.issueDateFilter= function(issue)
	{
		console.log(new Date(issue.issueDate).toGMTString());
		if( $scope.issueDate==null  || new Date(issue.issueDate).toGMTString().toLowerCase().indexOf($scope.issueDate.toLowerCase()) !=-1 )
			{
				return true;
			}
		return false;
	}
	
	
});

app.controller("createIssueController", function($scope, $http, $location){
	
	$scope.documentCount = 0;
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
		
	     $http({
	          method: 'POST',
	          url: 'http://localhost:8088/IssueManagement/createIssue',
	          params: {issueType:$scope.issueTypeOption, issueSubtype:$scope.issueSubtypeOption, product:$scope.productOption, supplier:$scope.supplierOption,
	        	  locationType:$scope.locationTypeOption, location:$scope.locationNameOption, reportedBy:$scope.reportedBy, issueDate: new Date($scope.issueDate).toLocaleDateString(),
	        	  howReceived:$scope.howReceivedOption, issueDescription:$scope.issueDescription, 
	        	  condition:$scope.test.conditionOption, duration:$scope.test.durationValue, durationUnit:$scope.test.durationUnitOption, storageTemperature:$scope.test.storageTemperature,
	        	  humidity:$scope.test.humidityValue, notes:$scope.test.notesValue,
	        	  taste:$scope.test.tasteValue, flavor:$scope.test.flavorValue, actualColor:$scope.test.actualColor, expectedColor:$scope.test.expectedColor,
	        	  texture:$scope.test.textureValue, prodcutSize:$scope.test.sizeValue, aroma:$scope.test.aromaValue
	        	  },    
	          
	          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	       });
	     
	 
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

	var i=0;

	uploadFile=function()
	{
		let dataArray = new FormData();
		files_array[i]=file_input.files[0]; 
		i=i+1;
	}

});


app.controller("viewIssueController", function($scope, $routeParams, $http){
	
	
	$scope.documentCount = 0;
	$scope.escalationID = 'ESC0000201';
	$scope.issueNum = null;
	
	$http.get("http://localhost:8088/IssueManagement/getIssueListWithValues?issueNumber="+$routeParams.issueId).then(function(response){
        $scope.viewIssueData = response.data;
        $scope.issueNum = response.data

    });	
	
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
	
	$scope.self=this;
	self.submit_justify_form = function()
    {
		
	     $http({
	          method: 'POST',
	          url: 'http://localhost:8088/IssueManagement/addResponse',
	          params: {
				  responseInfo:$scope.responseDescription, justified:"Yes", status:"Open", issueNumber:$scope.issueNum[0].issueNumber, document:"document", responsibleParty:$scope.issueNum[0].locationTypeValue
	        	  },    
	          
	          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	       });
		
    }
	
	self.submit_unjustify_form = function()
    {
		
	     $http({
	          method: 'POST',
	          url: 'http://localhost:8088/IssueManagement/addResponse',
	          params: {
				  responseInfo:$scope.responseDescription, justified:"No", status:"Close", issueNumber:$scope.issueNum[0].issueNumber, document:"document", responsibleParty:$scope.issueNum[0].locationTypeValue
	        	  },    
	          
	          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	       });
		
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


app.factory("myFactory", function(){
	var service = {};
	service.GetPager = GetPager;
	return service;
	function GetPager(totalItems, currentPage, pageSize) {
	currentPage = currentPage || 1;
	pageSize = pageSize || 10;
	var totalPages = Math.ceil(totalItems / pageSize);
	var startPage, endPage;

	if (totalPages <= 10) {
		startPage = 1;
		endPage = totalPages;
	} else {
		if (currentPage <= 6) {
			startPage = 1;
			endPage = 10;
		} else if (currentPage + 4 >= totalPages) {
			startPage = totalPages - 9;
			endPage = totalPages;
		} else {
			startPage = currentPage - 5;
			endPage = currentPage + 4;
		}
	}

	var startIndex = (currentPage - 1) * pageSize;
	var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
	var pages = _.range(startPage, endPage + 1);

	return {
		totalItems: totalItems,
		currentPage: currentPage,
		pageSize: pageSize,
		totalPages: totalPages,
		startPage: startPage,
		endPage: endPage,
		startIndex: startIndex,
		endIndex: endIndex,
		pages: pages
	};
	}

});


function w3_open() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


