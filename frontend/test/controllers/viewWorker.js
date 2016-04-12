'use strict'

describe('ViewWorker Controller', function () {
  it('should retrieve worker information', function () {
    var fakeWorker = {}
    var workerDataResponse = {
      data: fakeWorker
    }
    var sut
    module('app')
    inject(function ($controller) {
      sut = $controller('ViewWorkerController', {workerDataResponse: workerDataResponse})
    })
    expect(sut.worker).toBe(fakeWorker)
  })
})
