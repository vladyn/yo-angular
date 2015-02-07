'use strict';

/**
 * @ngdoc function
 * @name ngExercisesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngExercisesApp
 */
angular.module('ngExercisesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.layout = {
    	columns: 2, 
    	topBar: true, 
    	footer: true,
    	sidebar: true
    };
    $scope.changeLayout = function(mode) {
    	$scope.layout.columns = mode;
    };
  });
