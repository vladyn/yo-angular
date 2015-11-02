'use strict';

describe('Controller: PagerCtrl', function () {

  // load the controller's module
  beforeEach(module('ahkApp'));

  var PagerCtrl,
  scope,
  $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();
    $location = _$location_;
    PagerCtrl = $controller('PagerCtrl', {
      $scope: scope
      // place here mocked dependencies
  });
    PagerCtrl.movePage = jasmine.createSpy('movePage').and.callFake(function(direction) {
        var counter = 0;
        switch(direction) {
            case 'next':
            return counter + 1;
            case 'back':
            return counter - 1;
        }
    });
    spyOn($location, 'search').and.callThrough();
}));

  it('should attach a list of prev / next labels to the scope', function () {
    expect(Object.keys(PagerCtrl.page).length).toBe(2);
});
  it('should check the pagination back direction', function() {
    $location.search.and.returnValue({
        views: -1
    });
    PagerCtrl.movePage('back');
    expect(PagerCtrl.movePage('back')).toBe(-1);
    expect($location.search().views).toBe(-1);
}); 
  it('should check the pagination next direction', function() {
    $location.search.and.returnValue({
        views: 1
    });
    PagerCtrl.movePage('back');
    expect(PagerCtrl.movePage('next')).toBe(1);
    expect($location.search().views).toBe(1);
});
});
