const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe("main.js", function() {
  let driver;

  before(async function() {
    // ブラウザの初期化
    driver = new Builder().forBrowser(Browser.CHROME).build();
  });

  after(async function() {
    // テストが終了した後にブラウザを終了
    await driver.quit();
  });

  it("ToDoを追加できること", async function() {
    await driver.get('http://127.0.0.1:5500/index.html?');
    let textBox = await driver.findElement(By.id('input'));
    let submitButton = await driver.findElement(By.id('btn'));
    await textBox.sendKeys('test');
    await submitButton.click();
    let content = await driver.findElement(By.className('content')).getText();
    assert.equal(content, 'test');
  });
});


