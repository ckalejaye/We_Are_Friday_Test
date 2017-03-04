Feature:As a repeat visitor, I want tobe able 
to see a list of gym near me based on previous
address

Background: Search for a gym near me
Given I launch the "url"
And I click on "GYMS tab"
When I click on "find a Gym" link


Scenario: Save user location for future visits
Then I should see "a list of gym near me"