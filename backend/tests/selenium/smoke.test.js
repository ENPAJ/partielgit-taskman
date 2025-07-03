const { Builder, By, until } = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000');
    let title = await driver.getTitle();
    console.log('Title:', title);
    await driver.wait(until.titleContains('Gestionnaire de Tâches'), 10000);
    console.log('Test OK');
  } catch (e) {
    console.log('Test KO:', e);
  } finally {
    await driver.quit();
  }
})();
