(function () {
  'use strict'

  window.angular
        .module('app')
        .controller('ViewWorkerController', controller)

  function controller (workerDataResponse) {
    var vm = this
    if (!workerDataResponse) {
      vm.error = true
      return
    }
    vm.worker = workerDataResponse.data
  }

  controller.$inject = ['workerDataResponse']
}())
