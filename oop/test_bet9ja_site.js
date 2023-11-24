const { Builder, By, Key, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
options.addArguments('headless'); // running headless
options.addArguments('no-sandbox'); // Bypass OS security model
options.addArguments('disable-dev-shm-usage'); // overcome limited resource problems



async function testBet9ja() {
    try {

        let driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await driver.get("https://www.cbn.gov.ng/");

        let title = await driver.getTitle();
    
        expect(title).to.equal('Central Bank of Nigeria | Home');

    } catch (error) {
        console.error('An error occurred:', error);
    }
    
}



(async () => {
    await testBet9ja();
  })();
  