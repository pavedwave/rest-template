import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FirefoxTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// https://seleniumhq.github.io/selenium/docs/api/java/index.html

		// webdriver.chrome.driver   C:\selenium\chromedriver.exe
		// webdriver.gecko.driver
		// webdriver.ie.driver
		
		System.setProperty("webdriver.gecko.driver", "c:\\selenium\\geckodriver.exe");
		WebDriver driver=new FirefoxDriver();
		
		driver.get("http://localhost:3000");
		
		System.out.println(driver.getTitle());
		
		System.out.println(driver.getCurrentUrl());
		
		// System.out.println(driver.getPageSource());
		
		driver.get("http://localhost:3000/contactus");
		
		// driver.navigate().back();
		
		driver.findElement(By.id("firstname")).sendKeys("Walter");
		driver.findElement(By.id("lastname")).sendKeys("Wallcarpet");
		
		driver.findElement(By.name("telnum")).click();
		driver.findElement(By.name("telnum")).sendKeys("8675309");
		
		// Navigate away from Contact Us page then come back
		driver.findElement(By.linkText("About Us")).click();
		driver.findElement(By.linkText("Menu")).click();
		driver.findElement(By.linkText("Contact Us")).click();
		
		driver.findElement(By.xpath("//*[@id=\'email\']")).click();
		driver.findElement(By.xpath("//*[@id=\'email\']")).sendKeys("chrisp@bacon.com");
		
		driver.findElement(By.xpath("//*[@id='message']")).click();
		driver.findElement(By.xpath("//*[@id='message']")).sendKeys("TEST");
		
		//Send Feedback button
		driver.findElement(By.xpath("//*[@id=\'root\']/div/div/div[2]/div/div[3]/div[2]/form/div[7]/div/button")).click();
		
		// Should display Alert with all Input data
		
		// driver.close();   // Close current window
		// driver.quit();    // Close all windows
		
		System.out.println("***** ALL TESTS PASSED *****");
		
	}

}
