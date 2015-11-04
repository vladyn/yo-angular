'use strict';

describe('Service: urlExtractorService', function () {

  // load the service's module
  beforeEach(module('ahkApp'));

  // instantiate service
  var urlExtractorService;
  beforeEach(inject(function (_urlExtractorService_) {
    urlExtractorService = _urlExtractorService_;
  }));

  it('should do something', function () {
    expect(!!urlExtractorService).toBe(true);
  });

});
