/* global: $scope */
'use strict';
angular.module('ng-ngExercisesApp')
	.directive('styleChanger', function($scope) {

		function linker(scope, elem, attrs) {
			console.log($scope, elem, attrs);
		}

		return {
			restrict: 'AE',
			link: linker, 
			template: '<div class="some"></div>'
		};
	});