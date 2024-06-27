import { Builder, By, until } from 'selenium-webdriver';
import 'selenium-webdriver/edge';

async function testLogin() {
  let driver = await new Builder().forBrowser('MicrosoftEdge').build();

  try {
    await driver.get('http://localhost:3000/login'); // Adjust the URL as needed

    let emailInput = await driver.findElement(By.id('email'));
    await emailInput.sendKeys('test@ireport.com');

    let passwordInput = await driver.findElement(By.id('password'));
    await passwordInput.sendKeys('testpassword');

    let loginButton = await driver.findElement(By.xpath("//button[contains(text(), 'Log In')]"));
    await loginButton.click();

    await driver.wait(until.urlIs('http://localhost:3000/'), 10000); // Adjust the URL as needed

    let title = await driver.getTitle();
    console.log(`Page title is: ${title}`);

    if (title.includes('Home')) {
      console.log('Login test passed');
    } else {
      console.log('Login test failed');
    }
  } finally {
    await driver.quit();
  }
}

testLogin().catch(console.error);
