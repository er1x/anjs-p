exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['test/e2e/**/*.js'],
  capabilities: {
    browserName: 'chrome',
    loggingPrefs: {
      driver: 'ALL',
      browser: 'ALL',
      server: 'ALL'
    }
  }
}
