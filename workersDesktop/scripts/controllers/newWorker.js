(function () {
  'use strict'

  window.angular
        .module('app')
        .controller('NewWorkerController', controller)

  function controller (workers) {
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
      if (vm.newWorkerForm.$invalid) {
        console.log('no hacemos nada...')
      } else {
        workers
          .add(vm.worker)
          .then(function (response) {
            console.log('trabajador añadido correctamente')
          }, function (response) {
            console.log(response)
          })
      }
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
