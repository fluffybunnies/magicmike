'use strict';

/* App Module */

var mikeApp = angular.module('mikeApp', [
	'ngRoute'
	,'mikeAnimations'
	,'mikeControllers'
]);

mikeApp.config(['$routeProvider', function($routeProvider){
	console.log('mikeApp config');
	$routeProvider.when('/',{
		templateUrl: 'partials/mike.html'
		,controller: 'MikeCtrl'
	});
}]);

