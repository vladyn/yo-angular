'use strict';

/**
 * @ngdoc function
 * @name ahkApp.controller:PagerCtrl
 * @description
 * # PagerCtrl
 * Controller of the ahkApp
 */
angular.module('ahkApp')
  .controller('PagerCtrl', function ($scope, $location) {
    var counter,
        position,
        pageMax = 12, 
        vm = this;

    vm.page = {
        labelPrev: vm.count,
        labelPnext: vm.count
    };

    vm.movePage = function movePage (direction) {
        position = direction === 'next' ? counter++ : counter--;
        position = Math.round(counter) > 0 ? $location.path("/views/" + counter) : counter = 1;
        console.log("inside loop " + counter);

        vm.back = (counter < 2) ? true : false;
        vm.next = (counter === pageMax) ? true : false;
        return position;
    };


    /*
     It monitors for direct re-load 
    */

    $scope.$on('page-scanner-started', function(event, args) {
        counter = args;
    });
  });
