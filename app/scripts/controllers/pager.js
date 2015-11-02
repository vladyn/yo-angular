'use strict';

/**
 * @ngdoc function
 * @name ahkApp.controller:PagerCtrl
 * @description
 * # PagerCtrl
 * Controller of the ahkApp
 */
angular.module('ahkApp')
  .controller('PagerCtrl', function ($location, $log, $routeParams) {
    var counter = 0,
        pageMax = 12, 
        location;

    this.page = {
        label_prev: "Предишна",
        label_next: "Следва"
    };

    this.movePage = function movePage (direction) {
        if (counter !== pageMax && counter >= 0) {
            direction === 'next' ? counter++ : counter--;
            Math.round(counter) > 0 ? $location.path("/views/" + counter) : counter = 1;
        } else {
            $log.log("counter exeeds");
            direction === "back" ? this.next = true : this.back = true;
        }
    }
  });
