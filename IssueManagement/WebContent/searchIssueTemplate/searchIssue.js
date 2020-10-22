app.controller("searchIssueController", function($scope, $http, $location){
	
	$scope.viewIssue=function(id)
	{
		$location.path('/viewIssue/'+id);
	}
	
	$scope.countValue = [5,10,15,20,25,30,35,40,45,50];
	
	$http.get('http://localhost:8088/IssueManagement/getIssueTransact').then(function(response){
		$scope.searchIssueTable=response.data;
		});
		
	$scope.issueStatusList=[{"status":"Open"},{"status":"Closed"}];
	
	$scope.justifiedList=[{"justified":"Yes"},{"justified":"No"}];
		
	$scope.responsiblePartyList=[{"id":1,"locationTypeValue":"Distribution Center","locationTypeId":"LNT001"},{"id":2,"locationTypeValue":"Restaurant","locationTypeId":"LNT002"},{"id":3,"locationTypeValue":"Supplier","locationTypeId":"LNT003"}];
	
	$http.get('http://localhost:8088/IssueManagement/getProduct').then(function(response){
		$scope.productList=response.data;
		});
	
	$http.get('http://localhost:8088/IssueManagement/getSupplier').then(function(response){
		$scope.supplierList=response.data;
		});
	
	$http.get('http://localhost:8088/IssueManagement/getLocation').then(function(response){
		$scope.locationList=response.data;
		});
	
	$http.get('http://localhost:8088/IssueManagement/getLocationType').then(function(response){
		$scope.locationTypeList=response.data;
		});
	
	$http.get('http://localhost:8088/IssueManagement/getIssueType').then(function(response){
		$scope.issueTypeList=response.data;
		});
	$http.get('http://localhost:8088/IssueManagement/getIssueSubtype').then(function(response){
		$scope.issueSubtypeList=response.data;
		});
	
	$scope.getSearchBySearchnameAndUserId=function(searchName,userId)
	{	
		
		$http.get("http://localhost:8088/IssueManagement/getSearchDetailBySearchName?userId="+userId+"&searchName="+searchName).then(function(response){
	        $scope.savedSearchesListByNameByuserId = response.data;
	        
	        $scope.issueId=$scope.savedSearchesListByNameByuserId.issueNumber;
			$scope.issueTypeOption=$scope.savedSearchesListByNameByuserId.issueType;
			$scope.issueSubtypeOption=$scope.savedSearchesListByNameByuserId.issueSubtype;
			$scope.locationTypeOption=$scope.savedSearchesListByNameByuserId.locationType;
			$scope.locationNameOption=$scope.savedSearchesListByNameByuserId.location;
			$scope.justifiedOption=$scope.savedSearchesListByNameByuserId.justified
			$scope.productOption=$scope.savedSearchesListByNameByuserId.product;
			$scope.supplierOption=$scope.savedSearchesListByNameByuserId.supplier;
			$scope.issueStatusOption=$scope.savedSearchesListByNameByuserId.issueStatus;
			$scope.responsiblePartyOption=$scope.savedSearchesListByNameByuserId.responsibleParty;
			if($scope.savedSearchesListByNameByuserId.issueCreated != null){
				$scope.issueDate=new Date($scope.savedSearchesListByNameByuserId.issueCreated);	
			}
	    });
		
		
		
	};
	
	
	$scope.applySearchFilterBySearchName=function(searchName,userId)
	{
		$scope.getSearchBySearchnameAndUserId(searchName,userId);
		$scope.resetResultsFilterSearch();
	}

	
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

	
	$scope.saveSearches = function(){
		
		var searchIssueName;
		  var txt = prompt("Please enter search name:", "Search1");
		  if (txt == null || txt == "") {
		    printAlert = "You cancelled the prompt.";
		  } else {
			  searchIssueName = txt ;
		  }
		  
		 $http({
	          method: 'POST',
	          url: 'http://localhost:8088/IssueManagement/addSearchDetail',
	          params: {
	        	issueNumber:$scope.issueId,
	      		issueType:$scope.issueTypeOption,
	      		issueSubtype:$scope.issueSubtypeOption,
	      		locationType:$scope.locationTypeOption,
	      		location:$scope.locationNameOption,
	      		justified:$scope.justifiedOption,
	      		product:$scope.productOption,
	      		supplier:$scope.supplierOption,
	      		issueStatus:$scope.issueStatusOption,
	      		responsibleParty:$scope.responsiblePartyOption,
	      		issueCreated:$scope.issueDate,
	      		issueClosed:$scope.issueClosedDate,
	      		userId:3,
	      		searchName : searchIssueName
	        	  },    
	          
	          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	       });
		 
		alert("search name saved successfully!");
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
	
	
	
	$http.get("http://localhost:8088/IssueManagement/getSearchDetailByUserId?userId="+3).then(function(response){
        $scope.savedSearchesListById = response.data;
        
    });
		
	/*$http.get("http://localhost:8088/IssueManagement/getSearchDetailBySearchName?userId="+1+"?searchName="+"issue finder").then(function(response){
        $scope.savedSearchesListByName = response.data;
        
    });*/
		
	
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
