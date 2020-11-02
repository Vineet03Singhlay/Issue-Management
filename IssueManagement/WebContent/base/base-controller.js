(function(){
	'use strict';
	angular
		.module('myCompany')
		.controller('baseController', function($scope, $state, $stateParams){
			var vm = this;
			console.log('This is base contoller');
		})

})();