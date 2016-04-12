(function () {
  'use strict'

  window.angular
        .module('app')
        .filter('grade', function () {
          return function (input) {
            if (input < 5) {
              return 'Suspenso'
            } else if (input >= 5 && input < 7) {
              return 'Suficiente'
            } else if (input >= 7 && input < 9) {
              return 'Notable'
            } else {
              return 'Sobresaliente'
            }
          }
        })
}())
