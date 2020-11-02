(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('searchIssueController', function($scope, $state, $stateParams, $http){
			var vm = this;
			
			vm.applySearchFilterBySearchName = applySearchFilterBySearchName;
			vm.concatDash = concatDash;
			vm.createXlSheet = createXlSheet;
			//vm.getSearchBySearchnameAndUserId = getSearchBySearchnameAndUserId;
			vm.goToViewInformation = goToViewInformation;
			vm.issueDateFilter = issueDateFilter;
			vm.issueTypeSubtypeFilter = issueTypeSubtypeFilter; 
			vm.locationFilter = locationFilter;
			vm.productFilter = productFilter;
			vm.resultsFilter = resultsFilter;
			vm.supplierFilter = supplierFilter;
			vm.xlDownload = xlDownload;
			
			vm.searchObj = [];

			console.log('This is search issue controller.');

			function goToViewInformation(viewId)
			{
				vm.viewId = viewId;
				console.log('information view');
				console.log('viewId'+viewId);
				$state.go('base.viewIssue.information',{ id:viewId });
			}
			
			vm.countValue = [5,10,15,20,25,30,35,40,45,50];
			
			$http.get('http://localhost:8088/IssueManagement/getIssueTransact').then(function(response){
				vm.searchIssueTable=response.data;
				vm.numberOfData = vm.searchIssueTable.length;
				});
				
			$http.get("http://localhost:8088/IssueManagement/getSearchDetailByUserId?userId="+3).then(function(response){
		        vm.savedSearchesListById = response.data;
		        
		    });
			function concatDash(firstValue, secondValue){
				return firstValue + " - " + secondValue;
			};
			function issueTypeSubtypeFilter(issue){
			//	console.log($scope.issueTypeSubtype);
				if( vm.issueTypeSubtype==null  || issue.issueTypeValue.toLowerCase().indexOf(vm.issueTypeSubtype.toLowerCase()) !=-1
					|| issue.issueSubtypeValue.toLowerCase().indexOf($scope.issueTypeSubtype.toLowerCase()) !=-1
				)
				{
				return true;
				}
				return false;
			}
			function locationFilter(issue){
				//	console.log($scope.location);
				if(vm.location==null  || issue.location.toLowerCase().indexOf (vm.location.toLowerCase()  ) !=-1
				|| issue.locationValue.toLowerCase().indexOf(vm.location.toLowerCase()) !=-1
				)
				{
					return true;
				}
			return false;
			}

			function supplierFilter(issue){
				//	console.log($scope.supplier);
				if( vm.supplier==null  || issue.supplier.toLowerCase().indexOf(vm.supplier.toLowerCase()) !=-1
					|| issue.supplierValue.toLowerCase().indexOf(vm.supplier.toLowerCase()) !=-1
				)
				{
					return true;
				}
				return false;


			}	
	        function productFilter(issue){
				//	console.log($scope.product);
				if( vm.product==null  || issue.product.toLowerCase().indexOf(vm.product.toLowerCase()) !=-1
				|| issue.productValue.toLowerCase().indexOf(vm.product.toLowerCase()) !=-1
				)
				{
					return true;
				}
				return false;
			}
			function xlDownload(){
				console.log('xl download');
				vm.createXlSheet(vm.searchIssueTable);
			}
			function createXlSheet(JsonArray){
				var createXLSLFormatObj = [];
				 var xlsHeader = ["ISSUE ID", "ISSUE TYPE-ISSUE SUBTYPE", "LOCATION TYPE","LOCATION", "SUPPLIER", "PRODUCT", "RESPONSIBLE PARTY","ISSUE DATE", "ISSUE STATUS","JUSTIFIED?"];
				 createXLSLFormatObj.push(xlsHeader);		  
				 for(var i=0;i<JsonArray.length;i++)
					 {
					 var innerRowData = [];					 
						 innerRowData.push(JsonArray[i].issueNumber);					 
						 innerRowData.push(JsonArray[i].issueTypeValue+"-"+JsonArray[i].issueSubtypeValue)
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
				
				function issueDateFilter(issue)
				{	
					if(vm.filterIssueDate!=null)
					{
						console.log("raw input is "+vm.filterIssueDate);
						console.log("string input is "+new String(vm.filterIssueDate));
						console.log("to string input is "+new String(vm.filterIssueDate).toString());
						console.log("to date is input is "+new Date(issue.issueDate).toLocaleDateString());
					}


					
					if( vm.filterIssueDate==null  || new Date(issue.issueDate).toLocaleDateString().indexOf(new String(vm.filterIssueDate.toString())) !=-1 )
						
						{
							return true;
						}
					
					return false;
				}
				function resultsFilter(issue){
					if(( vm.searchObj.issueId==null  || issue.issueNumber.toLowerCase().indexOf(vm.searchObj.issueId.toLowerCase()) !=-1 )
					&& ( vm.searchObj.issueTypeOption==null  || issue.issueType.toLowerCase().indexOf(vm.searchObj.issueTypeOption.toLowerCase()) !=-1 )
					&& ( vm.searchObj.issueSubtypeOption==null  || issue.issueSubtype.toLowerCase().indexOf(vm.searchObj.issueSubtypeOption.toLowerCase()) !=-1 )
					&& ( vm.searchObj.locationTypeOption==null  || issue.locationType.toLowerCase().indexOf(vm.searchObj.locationTypeOption.toLowerCase()) !=-1 )
					&& ( vm.searchObj.productOption==null  || issue.product.toLowerCase().indexOf(vm.searchObj.productOption.toLowerCase()) !=-1 )
					&& ( vm.searchObj.supplierOption==null  || issue.supplier.toLowerCase().indexOf(vm.searchObj.supplierOption.toLowerCase()) !=-1 )
				//	&& ( vm.searchObj.issueStatusOption==null  || issue.status.toLowerCase().indexOf(vm.searchObj.issueStatusOption.toLowerCase()) !=-1 )
				//	&& ( vm.searchObj.justifiedOption==null  || issue.justified.toLowerCase().indexOf(vm.searchObj.justifiedOption.toLowerCase()) !=-1 )
				//	&& ( vm.searchObj.responsiblePartyOption==null  || issue.responsibleParty.toLowerCase().indexOf(vm.searchObj.responsiblePartyOption.toLowerCase()) !=-1 )
					&& ( vm.searchObj.locationNameOption==null  || issue.location.toLowerCase().indexOf(vm.searchObj.locationNameOption.toLowerCase()) !=-1 )
					&& ( vm.searchObj.issueDate==null  ||new Date(issue.issueDate).toLocaleDateString().indexOf(new Date(vm.searchObj.issueDate).toLocaleDateString()) !=-1 )						
		  			)
			
					{
						return true;
					}
		
					return false;
				}

				function applySearchFilterBySearchName(savedSearchObj){
					console.log("apply filter called "+JSON.stringify(savedSearchObj));
					//if(savedSearchObj.issueNumber!==null)
					//	{
							vm.searchObj.issueId=savedSearchObj.issueNumber;
					//	}
						if(savedSearchObj.issueCreated==null)
						{
							vm.searchObj.issueDate=null;
						}
						else
						{
							vm.searchObj.issueDate=new Date(savedSearchObj.issueCreated);    //savedSearchObj.issueCreated;
						}
						//if(savedSearchObj.issueType!==null)
						//{
							vm.searchObj.issueTypeOption=savedSearchObj.issueType;
						//}
						//if(savedSearchObj.issueSubtype!==null)
						//{
							vm.searchObj.issueSubtypeOption=savedSearchObj.issueSubtype;
						//}
						//if(savedSearchObj.locationType!==null)
						//{
							vm.searchObj.locationTypeOption=savedSearchObj.locationType;
						//}
						//if(savedSearchObj.location!==null)
						//{
							vm.searchObj.locationNameOption=savedSearchObj.location;
						//}
						//if(savedSearchObj.justified!==null)
						//{
							vm.searchObj.justifiedOption=savedSearchObj.justified;
						//}
						//if(savedSearchObj.product!==null)
						//{
							vm.searchObj.productOption=savedSearchObj.product;
						//}
						//if(savedSearchObj.supplier!==null)
						//{
							vm.searchObj.supplierOption=savedSearchObj.supplier;
						//}
					//	if(savedSearchObj.issueStatus!==null)
					//	{
							vm.searchObj.issueStatusOption=savedSearchObj.issueStatus;
					//	}
						//if(savedSearchObj.responsibleParty!==null)
						//{
							vm.searchObj.responsiblePartyOption=savedSearchObj.responsibleParty;
						//}
				}


			$scope.$on("searchFilterData", function(evt,data){ 
				console.log("event occur"+JSON.stringify(data));
				vm.searchObj=data;
			});
	


		})
})();