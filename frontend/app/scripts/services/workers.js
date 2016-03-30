(function () {
  'use strict'

  window.angular
        .module('app')
        .factory('workers', factory)

  function factory ($resource) {
    return $resource('http://localhost:3000/workers', {}, {
      list: {method: 'GET'}
    })
  }

  factory.$inject = ['$resource']
}())
