'use strict';

describe('Workers app', function() {


  describe ('list page', function () {

    beforeEach(function () {
      browser.get('http://127.0.0.1:8080/#/list')
    });

    it('should have a workers repeater', function() {
      var list = element.all(by.repeater('worker in vm.workers'));
      expect(list.count()).toEqual(10);
    });

    it('should have a company-sells widget', function() {
      var widget = element(by.tagName('company-sells'));
      expect(widget.isPresent()).toBe(true);
    });

    it('should change page and get new workers', function() {
      element(by.linkText('Next')).click();
      var workerLink = element(by.linkText('Goku'));
      expect(workerLink.isPresent()).toBe(true);
    });


  });

  describe('worker page', function() {

    beforeEach(function () {
      browser.get('http://localhost:8080/#/viewworker/1123121')
    })

    it('should have a tags widget', function() {
      var widget = element(by.className('panel-primary'));
      expect(widget.isPresent()).toBe(true);
    });

  });

  describe('add worker page', function() {

    beforeEach(function () {
      browser.get('http://localhost:8080/#/addworker')
    })

    it('should validate long names', function () {
      var nameInput = element(by.model('vm.worker.name'));
      nameInput.sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      var alerts = element.all(by.className('help-block'));
      expect(alerts.getText()).toContain('15 caracteres como máximo');
    });

    it('should show a wrong message log if no worker info is supplied', function () {
      element(by.buttonText('Dar de alta')).click();
      var logMessages = []
      browser.manage().logs().get('browser').then(function(browserLogs) {
       browserLogs.forEach(function(log){
         logMessages.push(log.message)
       });
       expect(logMessages).toContain('http://localhost:8080/scripts/controllers/newWorker.js 24:17 no hacemos nada...');
     });
    });

    it('should show an OK message log if worker info is supplied', function () {
      element(by.model('vm.worker.name')).sendKeys('Percebe');
      element(by.model('vm.worker.job')).sendKeys('programador');
      element(by.buttonText('Dar de alta')).click();
      var logMessages = []
      browser.refresh();
      browser.manage().logs().get('browser').then(function(browserLogs) {
        browserLogs.forEach(function(log){
          logMessages.push(log.message)
        });
        expect(logMessages).toContain('http://localhost:8080/scripts/controllers/newWorker.js 29:21 trabajador añadido correctamente');
      });
    });

  });



});
