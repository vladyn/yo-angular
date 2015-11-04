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
        isItShowing,
        pageMax = 18, 
        vm = this;

    vm.page = {
        labelPrev: "Предишна",
        labelNext: "Следваща"
    };

    /* It monitors for direct re-load  */
    $scope.$on('page-scanner-started', function(event, args) {
        counter = args;
    });
    
    // It controls when to show the prev / next arrows accross the screens
    vm.isItShowing = $location.path().lastIndexOf('view') === 1 ? true : false;

    vm.movePage = function movePage (direction) {
        position = direction === 'next' ? counter++ : counter--;
        vm.back = (counter < 2) ? true : false;
        vm.next = (counter === pageMax) ? true : false;
        position = Math.round(counter) > 0 ? $location.url("/views/" + counter) : counter = 1;
    };
  });
