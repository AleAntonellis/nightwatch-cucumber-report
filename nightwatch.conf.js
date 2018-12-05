var chromedriver = require('chromedriver');
var geckodriver = require('geckodriver');

module.exports = {
    test_settings: {
        default: {
            webdriver: {
              start_process: true,
              server_path: chromedriver.path,
              cli_args: ['--port=4444']
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                  args: ['headless', 'disable-gpu']
                }
            },
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: 'reports/screenshots/'
            }
        },
        chrome: {
            webdriver: {
                server_path: chromedriver.path
            },  
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ['disable-gpu']
                }
            }
        },
        firefox: {
            webdriver: {
                server_path: geckodriver.path
            },
            desiredCapabilities: {
                browserName: 'firefox',
                marionette: true
            }
        }
    }
};