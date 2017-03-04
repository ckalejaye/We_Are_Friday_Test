package WeAreFriday.WeAreFriday;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import Auto.NH_int;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Gym_By_Region_Class extends Drivers implements NH_int{
	HelperClass By_Region = new HelperClass();
	
	@Before
	public void set_window(){
		By_Region.set_browser();
	}
	

@Given("^I launch the \"([^\"]*)\"$")
public void i_launch_the(String arg1) throws Throwable {
   
}

@Given("^I click on \"([^\"]*)\"$")
public void i_click_on(String arg1) throws Throwable {
    
}

@When("^I click on \"([^\"]*)\" link$")
public void i_click_on_link(String arg1) throws Throwable {
   
}

@Then("^I should see \"([^\"]*)\"$")
public void i_should_see(String arg1) throws Throwable {
   
}


}
