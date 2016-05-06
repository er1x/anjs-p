(function () {
  'use strict'

  window.angular
        .module('app')
        .factory('workers', factory)

  function factory ($http, cfg) {
    return {
      list: function (page) {
        return $http.get(cfg.backendUrl + '/workers?page=' + page)
      },
      add: function (worker) {
        return $http.post(cfg.backendUrl + '/workers/add', worker)
      },
      get: function (workerId) {
        return $http.get(cfg.backendUrl + '/workers/' + workerId)
      }
    }
  }

  factory.$inject = ['$http', 'cfg']
}())
