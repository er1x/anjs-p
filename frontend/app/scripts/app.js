(function () {
  'use strict'

  window.angular
        .module('app', [
          'ui.bootstrap',
          'ngResource',
          'ngMessages',
          'ui.router',
          'angular-loading-bar',
          'satellizer'
        ])
        .config(configure)

  function configure ($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: 'templates/list.html',
        controller: 'ListController as vm',
        resolve: {
          loginRequired: loginRequired,
          initialListResponse: function (workers) {
            return workers.list(1)
          }
        }
      })
      .state('addWorker', {
        url: '/addworker',
        templateUrl: 'templates/add-worker.html',
        controller: 'NewWorkerController as vm',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('viewWorker', {
        url: '/viewworker/:id',
        templateUrl: 'templates/view-worker.html',
        controller: 'ViewWorkerController as vm',
        resolve: {
          loginRequired: loginRequired,
          workerDataResponse: function (workers, $stateParams) {
            return workers.get($stateParams.id)
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController as vm'
      })
    $urlRouterProvider.otherwise('/list')

    // Auth configuration
    $authProvider.baseUrl = 'http://localhost:3000'
    $authProvider.loginUrl = '/login'
    $authProvider.tokenName = 'token'
  }

  function loginRequired ($q, $auth, $location) {
    var deferred = $q.defer()
    if ($auth.isAuthenticated()) {
      deferred.resolve()
    } else {
      $location.path('/login')
    }
    return deferred.promise
  }

  configure.$inject = ['$stateProvider', '$urlRouterProvider', '$authProvider']
  loginRequired.$inject = ['$q', '$auth', '$location']
}())
