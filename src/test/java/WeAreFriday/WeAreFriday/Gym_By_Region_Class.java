package WeAreFriday.WeAreFriday;

import Auto.NH_int;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Gym_By_Region_Class extends Drivers implements NH_int {
	HelperClass By_Region = new HelperClass();

	@Before
	public void set_window() {
		By_Region.set_browser();
	}

	@Given("^I launch the \"([^\"]*)\"$")
	public void i_launch_the(String arg1) throws Throwable {
		By_Region.get_url(Base_url);
	}

	@Given("^I click on \"([^\"]*)\"$")
	public void i_click_on(String gym_button) throws Throwable {
		switch (gym_button) {
		case "GYMS_tab":
			By_Region.do_click(GymsTab);
		}

	}

	@When("^I click on \"([^\"]*)\" link$")
	public void i_click_on_link(String find_gym) throws Throwable {
		switch (find_gym) {
		case "Find a Gym":
			//By_Region.do_click_linktext("Find a Gym");
			By_Region.do_click_xpath(FindGym);
		}

	}

	@Then("^I should see \"([^\"]*)\"$")
	public void i_should_see(String diff_regions) throws Throwable {
		switch (diff_regions) {
		case "different regions":
			//By_Region.check_pagesource("Central & Midlands");
			//By_Region.check_pagesource("South East");
			By_Region.confirm_element(Region1);
            By_Region.confirm_element(Region2);
            By_Region.confirm_element(Region3);
            By_Region.confirm_element(Region4);
            By_Region.confirm_element(Region5);
            By_Region.confirm_element(Region6);
            By_Region.confirm_element(Region7);
        break;
		
		case "a list of gym near me":
			By_Region.confirm_element(RegionList);
			break;
			default:
		}
	}
		@After
		public void close_browser(){
			//driver.close();
	
	}
}
