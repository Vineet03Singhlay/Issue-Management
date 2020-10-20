var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {$routeProvider
	
    .when("/home", {
        templateUrl : "searchIssueTemplate/searchIssue.htm",
        controller : "searchIssueController"
    			})
    			
    .when("/createIssue", {
        templateUrl : "createIssueTemplate/createIssue.htm",
        controller : "createIssueController"
    			})
    			
    .when("/viewIssue/:issueId", {
        templateUrl : "viewIssueTemplate/viewIssue.htm",
        controller : "viewIssueController"
    }) 
    			
      .otherwise({
    	  			redirectTo: '/home'
      			});   
});

app.controller("mainController", function($scope){
	
	console.log('main controller');
	
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


