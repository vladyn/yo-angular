'use strict';

describe('Controller: AppmanCtrl', function () {

  // load the controller's module
  beforeEach(module('ahkApp'));

  var AppmanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppmanCtrl = $controller('AppmanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppmanCtrl.awesomeThings.length).toBe(3);
  });
});
