(function () {
  'use strict'

  window.angular
        .module('app')
        .controller('ListController', controller)

  function controller (workers, $scope) {
    var vm = this

    vm.currentPage = 1
    vm.totalWorkers = 0
    vm.workers = []

    function listWorkers () {
      workers.list({page: vm.currentPage}, function (res) {
        vm.totalWorkers = res.totalWorkers
        vm.workers = res.workers
      })
    }

    vm.pageChanged = listWorkers
    listWorkers()
  }

  controller.$inject = ['workers']
}())
