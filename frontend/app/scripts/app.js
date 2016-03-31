(function () {
  'use strict'

  window.angular
        .module('app', [
          'ui.bootstrap',
          'ngResource',
          'ngMessages',
          'ui.router'
        ])
        .config(configure)

  function configure ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: 'templates/list.html'
      })
      .state('addWorker', {
        url: '/addworker',
        templateUrl: 'templates/add-worker.html'
      })
      .state('viewWorker', {
        url: '/viewworker/:id',
        templateUrl: 'templates/view-worker.html'
      })
    $urlRouterProvider.otherwise('/list')
  }

  configure.$inject = ['$stateProvider', '$urlRouterProvider']
}())
