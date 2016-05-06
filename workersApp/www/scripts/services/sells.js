(function () {
  'use strict'

  window.angular
        .module('app')
        .factory('sells', factory)

  function factory ($http, $interval, cfg) {
    var sells = {
    }
    refreshSells()
    $interval(refreshSells, 5000)

    function refreshSells () {
      $http.get(cfg.backendUrl + '/sells')
           .then(function (response) {
             sells.current = response.data.current
             sells.target = response.data.target
             sells.percent = (response.data.current / response.data.target) * 100
           })
    }

    return {
      data: sells
    }
  }

  factory.$inject = ['$http', '$interval', 'cfg']
}())
