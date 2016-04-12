'use strict';

describe('workers service', function() {

  beforeEach(function () {
    module('app')
  })

  it('should have 3 methods', function() {
    inject(function(workers) {
      expect(workers.list).toBeDefined()
      expect(workers.add).toBeDefined()
      expect(workers.get).toBeDefined()
    })
  })

  it('should have a list function that returns a promise', function () {
    inject(function(workers) {
      expect(workers.list().then).toBeDefined()
    })
  })

  it('should call a custom mocked $http', function () {
    var mockHttp = sinon.stub({get: function () {}})
    module(function($provide) {
      $provide.value('$http', mockHttp)
    })
    inject(function(workers) {
      workers.list(3)
      expect(mockHttp.get.args[0][0]).toEqual('http://localhost:3000/workers?page=3')
    })
  })

  it('should call $httpBackend', function () {
    inject(function(workers, $httpBackend) {
      $httpBackend.expectGET('http://localhost:3000/workers?page=3')
      $httpBackend.when('GET', 'http://localhost:3000/workers?page=3').respond([])
      workers.list(3)
      $httpBackend.flush()
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
    })
  })
})
