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
	
	$scope.countValue = [5,10,15,20,25,30];
	
	$http.get('http://localhost:8088/IssueManagement/getIssueTransact').then(function(response){
		$scope.searchIssueTable=response.data;
		});
	
	$scope.productList=[{"id":1,"productId":"P0000001","productName":"Bread"},{"id":2,"productId":"P0000002","productName":"Coffee Nut"},{"id":3,"productId":"P0000003","productName":"Pain au cho"},{"id":4,"productId":"P0000004","productName":"Beef Burger"},{"id":5,"productId":"P0000005","productName":"Burger Relish"},{"id":6,"productId":"P0000006","productName":"Chocolate Ice"},{"id":7,"productId":"P0000007","productName":"Raspbery Ice"},{"id":8,"productId":"P0000008","productName":"Ice Cream"},{"id":9,"productId":"P0000009","productName":"Nut Bar"}];
	
	$scope.locationTypeList=[{"id":1,"locationTypeValue":"Distribution Center","locationTypeId":"LNT001"},{"id":2,"locationTypeValue":"Restaurant","locationTypeId":"LNT002"},{"id":3,"locationTypeValue":"Supplier","locationTypeId":"LNT003"}];
		
	$scope.issueTypeList=[{"id":1,"dropdownChildValue":"Product Quality","dropdownParent":1,"dropdownChildKey":"IST001"},{"id":2,"dropdownChildValue":"Foreign Body","dropdownParent":1,"dropdownChildKey":"IST002"},{"id":3,"dropdownChildValue":"Food Poisoning","dropdownParent":1,"dropdownChildKey":"IST003"},{"id":4,"dropdownChildValue":"Distribution","dropdownParent":1,"dropdownChildKey":"IST004"},{"id":5,"dropdownChildValue":"Incident","dropdownParent":1,"dropdownChildKey":"IST005"},{"id":6,"dropdownChildValue":"Legal/Technical Advice","dropdownParent":1,"dropdownChildKey":"IST006"},{"id":7,"dropdownChildValue":"Non-conformance","dropdownParent":1,"dropdownChildKey":"IST007"},{"id":8,"dropdownChildValue":"Enforcement Liason","dropdownParent":1,"dropdownChildKey":"IST008"}];
		
	$scope.locationList=[{"id":1,"locationValue":"Ann Arbor","locationId":"LCN001","locationType":"LNT001"},{"id":2,"locationValue":"Boston","locationId":"LCN002","locationType":"LNT003"},{"id":3,"locationValue":"Canada","locationId":"LCN003","locationType":"LNT002"},{"id":4,"locationValue":"Florida","locationId":"LCN004","locationType":"LNT001"},{"id":5,"locationValue":"Fort Campbell","locationId":"LCN005","locationType":"LNT003"},{"id":6,"locationValue":"Massachusetts","locationId":"LCN006","locationType":"LNT002"},{"id":7,"locationValue":"Michigan","locationId":"LCN007","locationType":"LNT003"},{"id":8,"locationValue":"New York","locationId":"LCN008","locationType":"LNT001"},{"id":9,"locationValue":"North Carolina","locationId":"LCN009","locationType":"LNT003"},{"id":10,"locationValue":"Texas","locationId":"LCN010","locationType":"LNT002"},{"id":11,"locationValue":"Washington","locationId":"LCN011","locationType":"LNT001"}];
		
	$scope.supplierList=[{"id":1,"supplierId":"S0000001","supplierName":"Natsu Lagrone"},{"id":2,"supplierId":"S0000002","supplierName":"Fort Campbell"},{"id":3,"supplierId":"S0000003","supplierName":"Bakery Wala Ltd."},{"id":4,"supplierId":"S0000004","supplierName":"Fancy Food Ltd."},{"id":5,"supplierId":"S0000005","supplierName":"Eat Away Co."},{"id":6,"supplierId":"S0000006","supplierName":"Blissful Desserts"},{"id":7,"supplierId":"S0000007","supplierName":"You See Them Inc."},{"id":8,"supplierId":"S0000008","supplierName":"Cris Makers Ltd."},{"id":9,"supplierId":"S0000009","supplierName":"Valley Goods Inc."},{"id":10,"supplierId":"S0000010","supplierName":"Ultra Natural Co."},{"id":11,"supplierId":"S0000011","supplierName":"Healthy Pros Ltd."},{"id":12,"supplierId":"S0000012","supplierName":"Royal Bakery Inc."}];
		
	$scope.issueSubtypeList=[{"id":9,"dropdownChildValue":"Expired or Short Shelf Life","dropdownParent":2,"dropdownChildKey":"ISS001"},{"id":10,"dropdownChildValue":"Color","dropdownParent":2,"dropdownChildKey":"ISS002"},{"id":11,"dropdownChildValue":"Consistency","dropdownParent":2,"dropdownChildKey":"ISS003"},{"id":12,"dropdownChildValue":"Counts","dropdownParent":2,"dropdownChildKey":"ISS004"},{"id":13,"dropdownChildValue":"Distributor Mispick","dropdownParent":2,"dropdownChildKey":"ISS005"},{"id":14,"dropdownChildValue":"Broken/Cracked","dropdownParent":2,"dropdownChildKey":"ISS006"},{"id":15,"dropdownChildValue":"Fat and/or Gristle(Excessive)","dropdownParent":2,"dropdownChildKey":"ISS007"},{"id":16,"dropdownChildValue":"Other","dropdownParent":2,"dropdownChildKey":"ISS008"}];
		
	$scope.issueStatusList=[{"status":"Open"},{"status":"Closed"}];
	
	$scope.justifiedList=[{"justified":"Yes"},{"justified":"No"}];
		
	$scope.responsiblePartyList=[{"id":1,"locationTypeValue":"Distribution Center","locationTypeId":"LNT001"},{"id":2,"locationTypeValue":"Restaurant","locationTypeId":"LNT002"},{"id":3,"locationTypeValue":"Supplier","locationTypeId":"LNT003"}];
	
	/*
	
	$scope.filterResultCall=function(){
		if($scope.issueId!=null)
		console.log('it is'+$scope.issueId);
		if($scope.issueTypeOption!=null)
		console.log('it is'+$scope.issueTypeOption);
		if($scope.issueSubtypeOption!=null)
		console.log('it is'+$scope.issueSubtypeOption);
		if($scope.locationTypeOption!=null)
		console.log('it is'+$scope.locationTypeOption);
		if($scope.locationNameOption!=null)
		console.log('it is'+$scope.locationNameOption);
		if($scope.justifiedOption!=null)
		console.log('it is'+$scope.justifiedOption);
		if($scope.productOption!=null)
		console.log('it is'+$scope.productOption);
		if($scope.supplierOption!=null)
		console.log('it is'+$scope.supplierOption);
		if($scope.issueStatusOption!=null)
		console.log('it is'+$scope.issueStatusOption);
		if($scope.responsiblePartyOption!=null)
		console.log('it is'+$scope.responsiblePartyOption);
		if($scope.issueDate!=null)
		console.log('issue date  is'+new Date($scope.issueDate));
		if($scope.issueClosedDate!=null)
		console.log('it is'+$scope.issueClosedDate);	
		
	};	
	
	*/
	
	$scope.resultsFilter= function(issue)
	{
			
		if(    ( $scope.searchObj.issueId==null  || issue.issueNumber.toLowerCase().indexOf($scope.searchObj.issueId.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.issueTypeOption==null  || issue.issueType.toLowerCase().indexOf($scope.searchObj.issueTypeOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.issueSubtypeOption==null  || issue.issueSubtype.toLowerCase().indexOf($scope.searchObj.issueSubtypeOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.locationTypeOption==null  || issue.locationType.toLowerCase().indexOf($scope.searchObj.locationTypeOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.productOption==null  || issue.product.toLowerCase().indexOf($scope.searchObj.productOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.supplierOption==null  || issue.supplier.toLowerCase().indexOf($scope.searchObj.supplierOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.issueStatusOption==null  || issue.status.toLowerCase().indexOf($scope.searchObj.issueStatusOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.justifiedOption==null  || issue.justified.toLowerCase().indexOf($scope.searchObj.justifiedOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.responsiblePartyOption==null  || issue.responsibleParty.toLowerCase().indexOf($scope.searchObj.responsiblePartyOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.locationNameOption==null  || issue.location.toLowerCase().indexOf($scope.searchObj.locationNameOption.toLowerCase()) !=-1 )
			&& ( $scope.searchObj.issueDate==null  ||new Date(issue.issueDate).toLocaleDateString().indexOf(new Date($scope.searchObj.issueDate).toLocaleDateString()) !=-1 )
						
		  )
			
			{
				return true;
			}
		
		return false;
	}
	
	$scope.searchObj=[];
	
	$scope.resetResultsFilter=function()
	{	
			$scope.issueId=null
			$scope.issueTypeOption=null
			$scope.issueSubtypeOption=null
			$scope.locationTypeOption=null
			$scope.locationNameOption=null
			$scope.justifiedOption=null
			$scope.productOption=null
			$scope.supplierOption=null
			$scope.issueStatusOption=null
			$scope.responsiblePartyOption=null
			$scope.issueDate=null
			$scope.issueClosedDate=null	
			
			$scope.resetResultsFilterSearch();	
	}
	
	$scope.resetResultsFilterSearch=function()
	{	
			
		$scope.searchObj.issueId=$scope.issueId;
		$scope.searchObj.issueTypeOption=$scope.issueTypeOption;
		$scope.searchObj.issueSubtypeOption=$scope.issueSubtypeOption;
		$scope.searchObj.locationTypeOption=$scope.locationTypeOption;
		$scope.searchObj.locationNameOption=$scope.locationNameOption;
		$scope.searchObj.justifiedOption=$scope.justifiedOption;
		$scope.searchObj.productOption=$scope.productOption;
		$scope.searchObj.supplierOption=$scope.supplierOption;
		$scope.searchObj.issueStatusOption=$scope.issueStatusOption;
		$scope.searchObj.responsiblePartyOption=$scope.responsiblePartyOption;
		$scope.searchObj.issueDate=$scope.issueDate;
		$scope.searchObj.issueClosedDate=$scope.issueClosedDate;	
	}
	
	
	
	
		
		
	
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
		if( $scope.filterIssueDate==null  || new Date(issue.issueDate).toGMTString().toLowerCase().indexOf($scope.filterIssueDate.toLowerCase()) !=-1 )
			
			{
				return true;
			}
		
		return false;
	}
	
	
	
	
});


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
		
		text += "<li>" + files_array[i].name +"<span style=\"cursor:pointer;\" class=\"w3-right w3-margin-right\">x</span>" + "</li>";
		document.getElementById("issueFile").innerHTML = text;
		
		
		i=i+1;
		document.getElementById("documentCount").innerHTML = i;
		
	}
	
	console.log(files_array.length);
	console.log(text);
    
	$scope.removeFiles = function (x) {
        $scope.errortext = "";    
        $scope.fileList.splice(x, 1);
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
	
	$http.get("http://localhost:8088/IssueManagement/getIssueFile?issueNumber="+$routeParams.issueId).then(function(response){
        $scope.viewFileList = response.data;
        $scope.fileListLength = $scope.viewFileList.length;
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


