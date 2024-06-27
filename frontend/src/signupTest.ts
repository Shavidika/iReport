import { Builder, By, until } from 'selenium-webdriver';
import 'selenium-webdriver/edge';

async function testSignup() {
  let driver = await new Builder().forBrowser('MicrosoftEdge').build();

  try {
    // Open the signup page
    await driver.get('http://localhost:3000/register'); // Adjust the URL as needed

    // Fill in the signup form
    let nameInput = await driver.findElement(By.id('text'));
    await nameInput.sendKeys('Test User');

    let emailInput = await driver.findElement(By.id('email'));
    await emailInput.sendKeys('test@ireport.com');

    let passwordInput = await driver.findElement(By.id('password'));
    await passwordInput.sendKeys('testpassword');

    let passwordConfInput = await driver.findElement(By.id('passwordConf'));
    await passwordConfInput.sendKeys('testpassword');

    let rememberCheckbox = await driver.findElement(By.id('remember'));
    await rememberCheckbox.click();

    let signupButton = await driver.findElement(By.xpath("//button[contains(text(), 'Sign Up')]"));
    await signupButton.click();

    // Wait for the page to redirect to the login page
    await driver.wait(until.urlIs('http://localhost:3000/login'), 10000); // Adjust the URL as needed

    // Verify the redirection to the login page
    let title = await driver.getTitle();
    console.log(`Page title is: ${title}`);

    if (title.includes('Login')) {
      console.log('Signup test passed');
    } else {
      console.log('Signup test failed');
    }
  } finally {
    await driver.quit();
  }
}

testSignup().catch(console.error);
