(function () {
  'use strict'

  window.angular
        .module('app')
        .factory('workers', factory)

  function factory ($http) {
    return {
      list: function (page) {
        return $http.get('http://localhost:3000/workers?page=' + page)
      },
      add: function (worker) {
        return $http.post('http://localhost:3000/workers/add', worker)
      },
      get: function (workerId) {
        return $http.get('http://localhost:3000/workers/' + workerId)
      }
    }
  }

  factory.$inject = ['$http']
}())
