'use strict';

angular.module('ahkApp')
  .service('urlExtractorService', function urlExtractorService($location) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var locationListener, 
    	location;
    function count (from, to) {
        from = angular.isDefined(from) ? from : 0;

        to = angular.isDefined(to) ? to : $location.path().length;

        location = parseInt($location.path().slice(from, to), 10);

        location = angular.isNumber(location) ? location : 1;

        locationListener = location;
        return location;
    }

    function get () {

    	return locationListener;
    }

    // Return the public API.
    return ({
        count: count, 
        get: get
    });
  });
