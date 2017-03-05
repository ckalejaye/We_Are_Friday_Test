package WeAreFriday.WeAreFriday;

import org.openqa.selenium.WebDriver;

import Auto.NH_int;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Gym_Near_Me_Class implements NH_int{
	WebDriver driver;
	HelperClass Gym_near_me = new HelperClass();
	
	@Given("^in the \"([^\"]*)\" textfield I enter \"([^\"]*)\" in the address text field$")
	public void in_the_textfield_I_enter_in_the_address_text_field(String ad_selector, String value) throws Throwable {
		switch (ad_selector) {
		case "searchbox":
			Gym_near_me.send_text(GymNearMe_Field, GymNearMe_Text);
			break;
		default:
			Thread.sleep(2000);
		}
	}

	@Given("^I press \"([^\"]*)\" on the keyboard$")
	public void i_press_on_the_keyboard(String submit_control) throws Throwable {
		switch (submit_control) {
		case "enter":
			Gym_near_me.submit_keyboard(LocEnter);
			break;
		default:
			Thread.sleep(2000);
		}
	}

	@Given("^I am a \"([^\"]*)\" visitor$")
	public void i_am_a_visitor(String rp_visitor) throws Throwable {
		switch (rp_visitor) {
		case "repeat":
			Gym_near_me.submit_keyboard(LocRepeat);
			break;
		default:
			Thread.sleep(2000);
		}
	}

	@When("^I view the list of \"([^\"]*)\"$")
	public void i_view_the_list_of(String fieldgyms) throws Throwable {
		switch (fieldgyms) {
		case "Nuffield gyms":
		     Gym_near_me.confirm_element(LocConfirm);
		break;
		default:
			Thread.sleep(2000);
		}
		
		
	}
}
