'use strict'

describe('Grade filter', function () {

  var grade

  beforeEach(function () {
    module('app')
    inject(function (gradeFilter) {
      grade = gradeFilter
    })
  })

  it('should have a grade filter', function() {
    expect(grade).toBeDefined()
  })

  it('should return "Sobresaliente" if input is 9', function () {
    expect(grade(9)).toEqual('Sobresaliente')
  })
})
