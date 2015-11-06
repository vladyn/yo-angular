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
        pageMax = 18, 
        vm = this;

    // it is better isItShowing to have 
    // value equal to false immediately
    vm.isItShowing = false; 
    
    vm.page = {
        labelPrev: "Предишна",
        labelNext: "Следваща"
    };

    /* It monitors for direct re-load  */
    $scope.$on('pager.location', function(event, args) {
        counter = args;
    });

    $scope.$on('pager.pagination.visible', function(event, args) {
        vm.isItShowing = args.visibility;
        console.log(vm.isItShowing);
    });

    vm.movePage = function movePage (direction) {
        position = direction === 'next' ? counter++ : counter--;
        vm.back = (counter < 2) ? true : false;
        vm.next = (counter === pageMax) ? true : false;
        position = Math.round(counter) > 0 ? $location.url("/views/" + counter) : counter = 1;
    };
  });
