(function () {
  'use strict'

  window.angular
        .module('app')
        .factory('workers', factory)

  function factory ($http) {
    return {
      list: function (page, callback) {
        $http.get('http://localhost:3000/workers?page=' + page)
             .then(function (response) {
               callback(null, response.data)
             }, function (response) {
               callback(response.statusText, null)
             })
      },
      add: function (worker, callback) {
        $http.post('http://localhost:3000/workers/add', worker)
             .then(function (response) {
               callback(null, response.data)
             }, function (response) {
               callback(response.statusText, null)
             })
      },
      get: function (workerId, callback) {
        $http.get('http://localhost:3000/workers/' + workerId)
             .then(function (response) {
               callback(null, response.data)
             }, function (response) {
               callback(response.statusText, null)
             })
      }
    }
  }

  factory.$inject = ['$http']
}())
