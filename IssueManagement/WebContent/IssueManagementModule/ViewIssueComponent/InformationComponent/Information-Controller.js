(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('informationController', function($scope, $state, $stateParams, $http){
			var vm = this;
			vm.downloadIssueFile = downloadIssueFile;
			vm.concatDash = concatDash;

			console.log('this is information controller');

			function concatDash(firstValue, secondValue){
				return firstValue + " - " + secondValue;
			};
			
			$http.get("http://localhost:8088/IssueManagement/getIssueFile?issueNumber="+$stateParams.id).then(function(response){
		        vm.viewFileList = response.data;
		        vm.fileListLength = vm.viewFileList.length;
		    });	

			$scope.$on('ViewIssueData', function(evt, data){
				vm.viewIssueData = data;
				
			});
			/*$http.get("http://localhost:8088/IssueManagement/getIssueListWithValues?issueNumber="+$stateParams.id).then(function(response){
		        vm.viewIssueData = response.data;
		        vm.issueNum = response.data

		    });*/
			
			function downloadIssueFile(fileId){
				$http.get("http://localhost:8088/IssueManagement/downloadIssueFile?fileId="+fileId).then(function(response){
			    });
			}
			
		})

})();