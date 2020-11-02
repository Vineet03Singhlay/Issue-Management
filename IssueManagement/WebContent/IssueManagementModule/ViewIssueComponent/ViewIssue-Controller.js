(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('viewIssueController', function($scope, $state, $stateParams, $http){
			var vm = this;
			console.log('This is view issue controller.');
		
			vm.concatDash = concatDash;
			vm.viewResponseFileList = viewResponseFileList
			vm.goToHistory = goToHistory;
			vm.goToInformation = goToInformation;
			vm.goToResponse = goToResponse;
			vm.documentCount = 0;
			vm.escalationID = 'ESC0000201';
			vm.issueNum = null;
			

			function goToHistory(){
				$state.go('base.viewIssue.history');
			}
			function goToInformation(infId){
				console.log(infId);
				$state.go('base.viewIssue.information', { id : infId });
			}
			function goToResponse(infId){
				$state.go('base.viewIssue.response', { id : infId });
			}
			
			$http.get("http://localhost:8088/IssueManagement/getIssueListWithValues?issueNumber="+$stateParams.id).then(function(response){
		        vm.viewIssueData = response.data;
		        vm.issueNum = response.data
		        $scope.$broadcast('ViewIssueData', response.data);

		    });	
			
			function concatDash(firstValue, secondValue){
				return firstValue + " - " + secondValue;
			};
			
			function viewResponseFileList(responseId){
		    	console.log(responseId+"response");
		    	var res = []
		    	return [1];
		    }
			
			vm.reponseData = [];
			$scope.$on('passResponse', function(evt, data){
				vm.responseData = data;
			});
			
			vm.self=this;
			self.submit_justify_form = function()
		    {
				var flagValue = 'justify';
				$scope.$broadcast('bringResponse', flagValue);
				
				var url= 'http://localhost:8088/IssueManagement/addResponse';
			    var config = { headers: {'Content-Type': undefined},
		                 transformRequest: angular.identity
		               }
				 $http.post(url, vm.responseData, config);
			     
			     alert("Response has been added!");
			     $state.go('base.viewIssue.response', { id : vm.issueNum[0].issueNumber });
				
		    }
			
			self.submit_unjustify_form = function()
		    {
				var flagValue = 'unjustify'
				$scope.$broadcast('bringResponse', flagValue);
				
				var url= 'http://localhost:8088/IssueManagement/addResponse';
				
			    var config = { headers: {'Content-Type': undefined},
		                 transformRequest: angular.identity
		               }
				 $http.post(url, vm.responseData, config);
			     
			     alert("Response has been added!");
			     $state.go('base.viewIssue.response', { id : vm.issueNum[0].issueNumber });
				
		    }
			

		})
})();