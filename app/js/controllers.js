'use strict';

/* Controllers */

var mikeControllers = angular.module('mikeControllers', []);

mikeControllers.controller('MikeCtrl', ['$scope', '$http', function($scope, $http){
	console.log('MikeCtrl');

	var speakCount = 0;
	$scope.speech = null;
	$scope.speak = function(){
		if (++speakCount%2) {
			$scope.speech = 'n0.';
		} else {
			$http.get('http://localhost:8001/api/smile').success(function(data, status, headers, config){
				$scope.speech = data.text;
			}).error(function(data, status, headers, config){
				$scope.speech = ':(';
			});
		}
	}
	$scope.shh = function(){
		$scope.speech = null;
	}
}]);

