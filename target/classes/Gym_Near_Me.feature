Feature: As a prospective Nuffield gym customer
I want to find a gym nearest to my house
in order to decide which gym to join

Background: Browse by region 
Given I launch the "url"
And I click on "GYMS_tab"
When I click on "Find a Gym" link
Then in the "searchbox" textfield I enter "GymNearMe_Text" in the address text field
And I press "enter" on the keyboard

@testcompleted
Scenario: Search for a gym near me
Then I should see "a list of gym near me"

@testcompleted
Scenario: Save user's location for future visits
 Given I am a "repeat" visitor
 When I view the list of "Nuffield gyms"
Then I should see "a list of gym near me"


