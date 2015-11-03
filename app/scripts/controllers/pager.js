'use strict';

/**
 * @ngdoc function
 * @name ahkApp.controller:PagerCtrl
 * @description
 * # PagerCtrl
 * Controller of the ahkApp
 */
angular.module('ahkApp')
  .controller('PagerCtrl', function ($scope, $location, $log) {
    var counter = 0,
        pageMax = 12, 
        pager = this;

    this.count = 3;

    this.page = {
        labelPrev: this.count,
        labelPnext: this.count
    };

    pager.movePage = function movePage (direction) {
        if (counter !== pageMax && counter >= 0) {
            direction === 'next' ? counter++ : counter--;
            Math.round(counter) > 0 ? $location.path("/views/" + counter) : counter = 1;
        } else {
            $log.log("counter exeeds");
            direction === "back" ? pager.next = true : pager.back = true;
        }
    };


    /*
     It monitors for direct re-load 
    */

    $scope.$on('page-scanner-started', function(event, args) {
        pager.count = args;
        // console.log(counter);
    });
    console.log(pager.count);
  });
