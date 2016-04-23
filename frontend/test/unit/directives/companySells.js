'use strict';

describe('companySells directive', function() {

  var el
  var fakeSells = {
    data: {
        current: 44444,
        target: 5555555,
        percent: 33
    }
  }
  beforeEach(function () {
    module('app')
    module('templates/company-sells.html')
    module(function($provide) {
      $provide.value('sells', fakeSells)
    })
    inject(function ($compile, $rootScope){
      var scope = $rootScope.$new()
      el = $compile('<company-sells></company-sells>')(scope)
      scope.$digest()
    })
  })

  it('should bind vm.sells.current correctly', function() {
    expect(el.text()).toContain('44.444')
  });

});
