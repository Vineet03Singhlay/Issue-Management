(function(){
	'use strict';
	angular
		.module('myCompany', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('base/home');

			$stateProvider
			.state('base',{
				url: '/base',
				templateUrl: 'base/base-view.html',
				controller: 'baseController as vm'
			})
			.state('base.home',{
				url: '/home',
				templateUrl: 'IssueManagementModule/IssueManagement-View.html',
				controller: 'homeController as vm'
			})
			.state('base.createIssue',{
				url: '/createIssue',
				templateUrl: 'IssueManagementModule/CreateIssueComponent/CreateIssue-View.html',
				controller: 'createIssueController as vm'
			})
			.state('base.viewIssue',{
				url: '/viewIssue/:id',
				templateUrl: 'IssueManagementModule/ViewIssueComponent/ViewIssue-View.html',
				controller: 'viewIssueController as vm',
				params : {
					id : null
				}
			})
			.state('base.searchIssue',{
				url: '/searchIssue',
				templateUrl: 'IssueManagementModule/SearchIssueComponent/SearchIssue-View.html',
				controller: 'searchIssueController as vm'
			})
			.state('base.searchIssue.filterResults',{
				url: '/filterResults',
				templateUrl: 'IssueManagementModule/SearchIssueComponent/FilterResultsComponent/FilterResults-View.html',
				controller: 'filterResultsController as vm'
			})
			.state('base.viewIssue.information',{
				url: '/information',
				templateUrl: 'IssueManagementModule/ViewIssueComponent/InformationComponent/Information-View.html',
				controller: 'informationController as vm',
				params : {
					id : null
				}
			})
			.state('base.viewIssue.response',{
				url: '/response',
				templateUrl: 'IssueManagementModule/ViewIssueComponent/ResponseComponent/Response-View.html',
				controller: 'responseController as vm',
				params : {
					id : null
				}
			})
			.state('base.viewIssue.history',{
				url: '/history',
				templateUrl: 'IssueManagementModule/ViewIssueComponent/HistoryComponent/History-View.html',
				controller: 'historyController as vm'
			});
		})
})();