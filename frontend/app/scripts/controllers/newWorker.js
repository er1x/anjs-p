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
        workers.add(vm.worker, function (err, response) {
          if (err) {
            console.log(err)
          } else {
            console.log('trabajador añadido correctamente')
          }
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
