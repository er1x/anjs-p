(function () {
  'use strict'

  window.angular
    .module('app')
    .controller('NavbarController', NavbarController)

  function NavbarController ($auth, $state) {
    var vm = this
    vm.isLoggedIn = function () {
      return $auth.isAuthenticated()
    }
    vm.logout = function () {
      $auth.logout()
           .then(function () {
             $state.go('login')
           })
    }
  }

  NavbarController.$inject = ['$auth', '$state']
}())
