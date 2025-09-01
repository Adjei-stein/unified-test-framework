module.exports = {
  retries: 2,
  timeout: 60000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    quiet: true,
    overwrite: false,
    html: false,
    json: true
  }
};