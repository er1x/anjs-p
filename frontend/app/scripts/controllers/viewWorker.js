(function () {
  'use strict'

  window.angular
        .module('app')
        .controller('ViewWorkerController', controller)

  function controller (workers, $stateParams) {
    var vm = this

    workers.get($stateParams.id, function (err, response) {
      if (err) {
        console.log(err)
      }
      vm.worker = response
    })
  }

  controller.$inject = ['workers', '$stateParams']
}())
