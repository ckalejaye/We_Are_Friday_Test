Feature: Searching for a gym
As a prospective Nuffield gym customer
I want to find a gym nearest to my house
in order to decide which gym to join

@testcompleted
Scenario: Browse by region
Given I launch the "url"
And I click on "GYMS_tab"
When I click on "Find a Gym" link
Then I should see "different regions"
