'use strict';

/**
 * @ngdoc function
 * @name ahkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ahkApp
 */
    angular.module('ahkApp')
        .controller('MainCtrl', function ($rootScope, $location, urlExtractorService) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var location = urlExtractorService.count(7);

        $rootScope.$broadcast('page-scanner-started', location);

    });
