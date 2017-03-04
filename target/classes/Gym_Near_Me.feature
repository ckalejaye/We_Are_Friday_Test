Feature: As a prospective Nuffield gym customer
I want to find a gym nearest to my house
in order to decide which gym to join

Background: Browse by region 
Given I launch the "url"
When I click on "GYMS tab"
Then I click on "find a Gym"


Scenario: Search for a gym near me
Given I enter my addres on the "search box"
And I press "enter" on the keyboard
Then I should see "a list of gym near me"


