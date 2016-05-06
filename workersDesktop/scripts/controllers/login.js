(function () {
  'use strict'

  window.angular
    .module('app')
    .controller('LoginController', controller)

  function controller ($state, $auth) {
    var vm = this

    vm.user = {
      username: null,
      password: null
    }

    vm.login = function () {
      $auth.login(vm.user)
        .then(function (response) {
          $state.go('list')
        })
        .catch(function (response) {
          vm.error = true
          console.log(response)
          if (response.status === 403) {
            vm.message = 'El usuario y/o la contraseña no son correctos'
          }
          vm.message = 'Error del servicio de autenticación'
        })
    }
  }

  controller.$inject = ['$state', '$auth']
}())
