(function () {
  'use strict'

  window.angular
        .module('app')
        .controller('ListController', controller)

  function controller (workers, initialListResponse) {
    var vm = this

    vm.currentPage = 1
    vm.totalWorkers = initialListResponse.data.totalWorkers
    vm.workers = initialListResponse.data.workers

    function listWorkers () {
      workers
        .list(vm.currentPage)
        .then(function (response) {
          vm.totalWorkers = response.data.totalWorkers
          vm.workers = response.data.workers
        }, function (response) {
          console.log(response.data)
        })
    }

    vm.pageChanged = listWorkers
  }

  controller.$inject = ['workers', 'initialListResponse']
}())
