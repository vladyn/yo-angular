'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngExercisesApp'));

  var MainCtrl,
    scope, 
    log;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $log) {
    scope = $rootScope.$new();
    log = $log;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    
    spyOn(scope, 'changeLayout');
    scope.changeLayout('mode');
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.layout).toBeDefined();
    expect(scope.changeLayout).toBeDefined();

    var changeLayout = jasmine.createSpy('changeLayout');
    changeLayout('mode');

    expect(changeLayout).toHaveBeenCalled();
    expect(scope.changeLayout).toHaveBeenCalledWith('mode');
  });
  it('should check for scope.awesomeThings', function() {
    expect(scope.awesomeThings.length).toBeGreaterThan(0);
  });
});
