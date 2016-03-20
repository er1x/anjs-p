(function () {
  'use strict'

  window.angular
        .module('app')
        .controller('NewWorkerController', controller)

  function controller () {
    var vm = this

    vm.worker = {
      name: '',
      surname: '',
      birthdate: '',
      department: 0,
      job: '',
      salary: 0,
      photo: '',
      observations: ''
    }

    vm.send = function () {
      console.log('enviando al backend...')
      console.log(JSON.stringify(vm.worker))
    }

    vm.fileChange = function (el) {
      var reader
      if (el.files.length === 0) {
        vm.worker.photo = ''
        return
      }

      reader = new window.FileReader()
      reader.onloadend = function () {
        vm.worker.photo = reader.result
      }
      reader.readAsDataURL(el.files[0])
    }
  }
}())
