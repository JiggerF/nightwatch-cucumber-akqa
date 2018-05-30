const BINPATH = './node_modules/nightwatch/bin/';
const SCREENSHOT_PATH = "./test/screenshots/";
const TEST_REPORT_PATH = "./test/reports";
const PAGE_OBJECT_PATH = "./test/pages";
const SELENIUM_HOST = process.env.SELENIUM_HOST || "127.0.0.1";
const SELENIUM_PORT = process.env.SELENIUM_PORT || "4444";

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', './test/step_definitions','--format', 'node_modules/cucumber-pretty', '--format', 'json:./test/reports/cucumber.json', './test/features']
});

console.log(`Selenium host ----> ` + SELENIUM_HOST);
console.log(`selenium Port ----> ` + SELENIUM_PORT);
const config = {
  output_folder: TEST_REPORT_PATH,
  page_objects_path: PAGE_OBJECT_PATH,
  test_workers: {
    enabled: false,
    workers: "auto",
  },
  globals_path: "nightwatch.globals.js",
  test_settings: {
    default: {
      selenium_port: SELENIUM_PORT,
      selenium_host: SELENIUM_HOST,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: SCREENSHOT_PATH,
      },
      globals: {
        waitForConditionTimeout: 3000,
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: [
            "--window-size=720,1136",
            `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
            (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
          ],
          // images=2 disables image rendering for a faster smoke test
          prefs: {
            profile: {
              default_content_setting_values: {
                images: 1,
              },
            },
          },
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};

if (!process.env.SELENIUM_HOST) {
  config["selenium"] = {
    start_process: true,
    server_path: BINPATH + "selenium.jar",
    log_path: "",
    host: SELENIUM_HOST,
    port: SELENIUM_PORT,
    cli_args: {
      "webdriver.chrome.driver": BINPATH + "chromedriver",
    },
  };
}
module.exports = config;

function padLeft(count) {
  return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0;

function imgpath(browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name); // this is the test filename so always exists.
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
