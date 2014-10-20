'use strict';

/* Controllers */

var mikeControllers = angular.module('mikeControllers', []);

mikeControllers.controller('MikeCtrl', ['$scope', '$http', function($scope){
	console.log('MikeCtrl');
	
	$scope.speech = null;
	$scope.speak = function(){
		$scope.speech = 'No.';
		$http.get('http://localhost:8001/face').success(function(data, status, headers, config){
			console.log('SUCCESS', arguments);
		}).error(function(data, status, headers, config){
			console.log('ERROR', arguments);
		});
	}
	$scope.shh = function(){
		$scope.speech = null;
	}
}]);

