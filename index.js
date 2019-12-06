const { Builder, By } = require("selenium-webdriver");

async function testCase() {
  let driver = await new Builder().forBrowser("chrome").build();
  let assert = require("assert");

  try {
    await driver.get(
      "https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/log"
    );
    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.id("btnLogin")).click();

    const text = await driver.findElement(By.xpath("//li")).getText();
    assert.equal(text, "Welcome Admin", "Tes Gagal");
    console.log("Tes Sukses");
  } catch (error) {
    console.log("Tes Gagal");
  }
}

testCase();




