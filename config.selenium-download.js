const BINPATH = './node_modules/nightwatch/bin/';

if (!process.env.SELENIUM_HOST) {
  require('fs').stat(BINPATH + 'selenium.jar', function(err, stat) {
    if (err || !stat || stat.size < 1) {
      require('selenium-download').ensure(BINPATH, function(error) {
        if (error) throw new Error(error);
        console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
      });
    }
  });
}
