(function () {
  'use strict'

  window.angular
        .module('app')
        .controller('ViewWorkerController', controller)

  function controller (workers, workerDataResponse) {
    var vm = this
    vm.worker = workerDataResponse.data
  }

  controller.$inject = ['workers', 'workerDataResponse']
}())
