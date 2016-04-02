(function () {
  'use strict'

  window.angular
        .module('app', [
          'ui.bootstrap',
          'ngResource',
          'ngMessages',
          'ui.router',
          'angular-loading-bar'
        ])
        .config(configure)

  function configure ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: 'templates/list.html',
        controller: 'ListController as vm',
        resolve: {
          initialListResponse: function (workers) {
            return workers.list(1)
          }
        }
      })
      .state('addWorker', {
        url: '/addworker',
        templateUrl: 'templates/add-worker.html',
        controller: 'NewWorkerController as vm'
      })
      .state('viewWorker', {
        url: '/viewworker/:id',
        templateUrl: 'templates/view-worker.html',
        controller: 'ViewWorkerController as vm',
        resolve: {
          workerDataResponse: function (workers, $stateParams) {
            return workers.get($stateParams.id)
          }
        }
      })
    $urlRouterProvider.otherwise('/list')
  }

  configure.$inject = ['$stateProvider', '$urlRouterProvider']
}())
