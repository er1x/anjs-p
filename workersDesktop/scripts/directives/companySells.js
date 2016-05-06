(function () {
  'use strict'

  window.angular
        .module('app')
        .directive('companySells', directive)

  function directive () {
    return {
      restrict: 'E',
      templateUrl: 'templates/company-sells.html',
      scope: {},
      controller: controller,
      controllerAs: 'vm'
    }
  }

  function controller (sells) {
    var vm = this
    vm.sells = sells.data
  }

  controller.$inject = ['sells']
}())
