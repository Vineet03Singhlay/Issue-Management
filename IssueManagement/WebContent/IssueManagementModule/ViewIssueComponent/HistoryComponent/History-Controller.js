(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('historyController', function($scope, $state, $stateParams){
			var vm = this;

			console.log('This is history controller.');

			vm.issueAuditTable = [
				{ field:"Justified",	before_situation:"-", after_situation:"Yes", changed_by:"TS010516_Admin", changed_time:"31 Aug 2018 07:19:31 AM"},
				{ field:"Status",	before_situation:"-", after_situation:"Open", changed_by:"TS010516_Admin", changed_time:"31 Aug 2018 07:19:31 AM"},
				{ field:"Document",	before_situation:"-", after_situation:"Created", changed_by:"TS010516_Admin", changed_time:"31 Aug 2018 07:19:31 AM"},
			];
			vm.issueStatusTable = [
				{ fromStatus: "Open", toStatus: "Closed", comments: "", changedBy: "Suraj Kumar", changedDate: "31 Aug 2018 07:19:31 AM"},
				{ fromStatus: "-", toStatus: "Closed", comments: "", changedBy: "TS010516_Admin", changedDate: "15 Aug 2018 07:19:31 AM"},
			];
			
		})

})();