(function () {
  'use strict'

  window.angular
        .module('app')
        .controller('ListController', controller)

  function controller () {
    var vm = this

    vm.currentPage = 1
    vm.workers = [
      {
        code: 1123121,
        name: 'Armando Bulla',
        job: 'Atención al Cliente',
        date: new Date()
      },
      {
        code: 1251252,
        name: 'Harry Potter',
        job: 'Programador Backend',
        date: new Date()
      },
      {
        code: 3125125,
        name: 'Jack Ass',
        job: 'Comercial',
        date: new Date()
      },
      {
        code: 4412412,
        name: 'Albino Blanco',
        job: 'Diseñador Gráfico',
        date: new Date()
      },
      {
        code: 12466125,
        name: 'Aitor Menta',
        job: 'Atención al Cliente',
        date: new Date()
      },
      {
        code: 1251256,
        name: 'Bilbo Bolsón',
        job: 'Comercial',
        date: new Date()
      },
      {
        code: 7125125,
        name: 'Homer Simpson',
        job: 'Inspector de Seguridad',
        date: new Date()
      },
      {
        code: 3325125,
        name: 'Anakin Skywalker',
        job: 'Guardia de Seguridad',
        date: new Date()
      },
      {
        code: 7225125,
        name: 'Pedro Picapiedra',
        job: 'Programador Front-end',
        date: new Date()
      },
      {
        code: 7998272,
        name: 'Filemón Pi',
        job: 'Jefe de Recursos Humanos',
        date: new Date()
      },
      {
        code: 7125125,
        name: 'James Moriarty',
        job: 'Jefe de Sección',
        date: new Date()
      },
      {
        code: 1123121,
        name: 'Armando Bulla',
        job: 'Atención al Cliente',
        date: new Date()
      },
      {
        code: 1251252,
        name: 'Harry Potter',
        job: 'Programador Backend',
        date: new Date()
      },
      {
        code: 3125125,
        name: 'Jack Ass',
        job: 'Comercial',
        date: new Date()
      },
      {
        code: 4412412,
        name: 'Albino Blanco',
        job: 'Diseñador Gráfico',
        date: new Date()
      },
      {
        code: 12466125,
        name: 'Aitor Menta',
        job: 'Atención al Cliente',
        date: new Date()
      },
      {
        code: 1251256,
        name: 'Bilbo Bolsón',
        job: 'Comercial',
        date: new Date()
      },
      {
        code: 7125125,
        name: 'Homer Simpson',
        job: 'Inspector de Seguridad',
        date: new Date()
      },
      {
        code: 3325125,
        name: 'Anakin Skywalker',
        job: 'Guardia de Seguridad',
        date: new Date()
      },
      {
        code: 7225125,
        name: 'Pedro Picapiedra',
        job: 'Programador Front-end',
        date: new Date()
      },
      {
        code: 7998272,
        name: 'Filemón Pi',
        job: 'Jefe de Recursos Humanos',
        date: new Date()
      },
      {
        code: 7125125,
        name: 'James Moriarty',
        job: 'Jefe de Sección',
        date: new Date()
      }
    ]

    vm.pageChanged = function () {
      console.log('cambio de página...')
    }

    vm.getWorkers = function () {
      return vm.workers.slice((vm.currentPage - 1) * 10, ((vm.currentPage - 1) * 10) + 10)
    }
  }
}())
