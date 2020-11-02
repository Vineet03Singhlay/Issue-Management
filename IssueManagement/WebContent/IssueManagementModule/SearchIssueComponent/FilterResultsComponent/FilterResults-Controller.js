(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('filterResultsController', function($scope, $state, $stateParams, $http){
			var vm = this;
			document.getElementById('id01').style.display='block';
			
			vm.sendDataToSearchIssueController=sendDataToSearchIssueController;
			vm.reset=reset;
			vm.populateSavedSearch=populateSavedSearch;
			vm.saveSearch=saveSearch;

			console.log('Filter Results url reached.');

			vm.issueStatusList=[{"status":"Open"},{"status":"Closed"}];
	
			vm.justifiedList=[{"justified":"Yes"},{"justified":"No"}];
				
			$http.get('http://localhost:8088/IssueManagement/getProduct').then(function(response){
				vm.productList=response.data;
				});
			
			$http.get('http://localhost:8088/IssueManagement/getSupplier').then(function(response){
				vm.supplierList=response.data;
				});
			
			$http.get('http://localhost:8088/IssueManagement/getLocation').then(function(response){
				vm.locationList=response.data;
				});
			
			$http.get('http://localhost:8088/IssueManagement/getLocationType').then(function(response){
				vm.locationTypeList=response.data;
				vm.responsiblePartyList
				});
			
			$http.get('http://localhost:8088/IssueManagement/getIssueType').then(function(response){
				vm.issueTypeList=response.data;
				});
			$http.get('http://localhost:8088/IssueManagement/getIssueSubtype').then(function(response){
				vm.issueSubtypeList=response.data;
				});
			$http.get("http://localhost:8088/IssueManagement/getSearchDetailByUserId?userId="+3).then(function(response){
		        vm.savedSearchesListById = response.data;
		        
		    });
			function sendDataToSearchIssueController()
			{
				$scope.$emit("searchFilterData",vm.filterResultObj);
				$state.go('base.searchIssue');
			}
			function reset()
			{	
				vm.filterResultObj={"issueId":null,"issueDate":null,"issueTypeOption":null,"issueSubtypeOption":null,"locationTypeOption":null,"locationNameOption":null,"justifiedOption":null,"productOption":null,"supplierOption":null,"issueStatusOption":null,"responsiblePartyOption":null};
				$scope.$emit("searchFilterData",{"issueId":null,"issueDate":null,"issueTypeOption":null,"issueSubtypeOption":null,"locationTypeOption":null,"locationNameOption":null,"justifiedOption":null,"productOption":null,"supplierOption":null,"issueStatusOption":null,"responsiblePartyOption":null});
			}
			function populateSavedSearch(savedSearchObj)
			{
				//console.log(JSON.stringify(savedSearchObj));
				//vm.filterResultObj=savedSearchObj;
				vm.filterResultObj.issueId=savedSearchObj.issueNumber;
				if(savedSearchObj.issueCreated==null)
				{
					vm.filterResultObj.issueDate=null;
				}
				else
				{
					vm.filterResultObj.issueDate=new Date(savedSearchObj.issueCreated);    //savedSearchObj.issueCreated;
				}
				vm.filterResultObj.issueTypeOption=savedSearchObj.issueType;
				vm.filterResultObj.issueSubtypeOption=savedSearchObj.issueSubtype;
				vm.filterResultObj.locationTypeOption=savedSearchObj.locationType;
				vm.filterResultObj.locationNameOption=savedSearchObj.location;
				vm.filterResultObj.justifiedOption=savedSearchObj.justified;
				vm.filterResultObj.productOption=savedSearchObj.product;
				vm.filterResultObj.supplierOption=savedSearchObj.supplier;
				vm.filterResultObj.issueStatusOption=savedSearchObj.issueStatus;
				vm.filterResultObj.responsiblePartyOption=savedSearchObj.responsibleParty;
			}
			function saveSearch()
			{
				console.log("sved search caed");
			}

		})
})();