package WeAreFriday.WeAreFriday;


import org.openqa.selenium.By;

import Auto.NH_int;

public class HelperClass extends Drivers implements NH_int {

	public void get_url(String url) {
		driver.get(url);
	}

	public void set_browser() {
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}
			
	public void do_click(String click) {
		driver.findElement(By.id(click)).click();
	}
	public void do_click_xpath(String click) {
		driver.findElement(By.xpath(click)).click();
	}
	
	public void confirm_element(String click) throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath(click)).isDisplayed();//.click();
	}

	public void send_text(String send_text_locator, String send_text) throws Exception {
		Thread.sleep(2000);
		driver.findElement(By.id(send_text_locator)).sendKeys(send_text);

	}
public void submit_keyboard(String submit_selector) throws InterruptedException{
	Thread.sleep(2000);
	driver.findElement(By.id(submit_selector)).submit();
}
	public void assert_element(String assert_element) {

	}

	public void assert_element(String assert_element, String assert_element0) {

	}

	public void assert_element(String assert_element0, String assert_element1, String element_2) {

	}

	public void check_pagesource(String element0){
		driver.getPageSource().contains(element0);

	}
}
