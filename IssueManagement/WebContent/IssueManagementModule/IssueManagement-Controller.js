(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('homeController', function($scope, $state, $stateParams){
			var vm = this;
			vm.goToSearchIssue = goToSearchIssue;
			vm.goToCreateIssue = goToCreateIssue;
			
			function goToSearchIssue() {
				$state.go('base.searchIssue');
			}
			function goToCreateIssue(){
				$state.go('base.createIssue');
			}

			console.log("This is home controller.");
		})
})();