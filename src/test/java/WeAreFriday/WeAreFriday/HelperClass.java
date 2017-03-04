package WeAreFriday.WeAreFriday;

import org.junit.Assert;
import org.openqa.selenium.By;

import Auto.NH_int;

public class HelperClass extends Drivers implements NH_int{
	
	public void get_url(String url){
		driver.get(url); 
	}
	
	public void do_click(String click){
		driver.findElement(By.id(click)).click();
	}
	
	public void send_text(String send_text_locator, String send_text) throws Exception{
		driver.findElement(By.id(send_text_locator)).sendKeys(send_text);
		
	}
	
	public void set_browser(){
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}
		
}
