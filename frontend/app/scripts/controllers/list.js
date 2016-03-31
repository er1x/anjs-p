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
      workers.list(vm.currentPage, function (err, data) {
        if (err) {
          console.log(err)
        }
        vm.totalWorkers = data.totalWorkers
        vm.workers = data.workers
      })
    }

    vm.pageChanged = listWorkers
    listWorkers()
  }

  controller.$inject = ['workers']
}())
