'use strict';

/**
 * @ngdoc function
 * @name ahkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ahkApp
 */
    angular.module('ahkApp')
        .controller('MainCtrl', function ($rootScope, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var location = parseInt($location.path().slice(-1), 10);
        location = angular.isNumber(location) ? location : 1;

        $rootScope.$broadcast('page-scanner-started', location);

    });
