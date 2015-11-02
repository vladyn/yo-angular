'use strict';

describe('Controller: PagerCtrl', function () {

  // load the controller's module
  beforeEach(module('ahkApp'));

  var PagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagerCtrl = $controller('PagerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PagerCtrl.awesomeThings.length).toBe(3);
  });
});
