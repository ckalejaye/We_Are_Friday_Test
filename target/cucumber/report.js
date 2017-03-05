$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Gym_By_Region.feature");
formatter.feature({
  "line": 1,
  "name": "Searching for a gym",
  "description": "As a prospective Nuffield gym customer\r\nI want to find a gym nearest to my house\r\nin order to decide which gym to join",
  "id": "searching-for-a-gym",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4546667148,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Browse by region",
  "description": "",
  "id": "searching-for-a-gym;browse-by-region",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@testcompleted"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I launch the \"url\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"GYMS_tab\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on \"Find a Gym\" link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see \"different regions\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 14
    }
  ],
  "location": "Gym_By_Region_Class.i_launch_the(String)"
});
formatter.result({
  "duration": 7076196956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GYMS_tab",
      "offset": 12
    }
  ],
  "location": "Gym_By_Region_Class.i_click_on(String)"
});
formatter.result({
  "duration": 166219879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Gym",
      "offset": 12
    }
  ],
  "location": "Gym_By_Region_Class.i_click_on_link(String)"
});
formatter.result({
  "duration": 301975192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "different regions",
      "offset": 14
    }
  ],
  "location": "Gym_By_Region_Class.i_should_see(String)"
});
formatter.result({
  "duration": 14503677066,
  "status": "passed"
});
formatter.after({
  "duration": 27750,
  "status": "passed"
});
formatter.uri("Gym_Near_Me.feature");
formatter.feature({
  "line": 1,
  "name": "As a prospective Nuffield gym customer",
  "description": "I want to find a gym nearest to my house\r\nin order to decide which gym to join",
  "id": "as-a-prospective-nuffield-gym-customer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 39191752,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Browse by region",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch the \"url\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"GYMS_tab\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Find a Gym\" link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "in the \"searchbox\" textfield I enter \"GymNearMe_Text\" in the address text field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I press \"enter\" on the keyboard",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 14
    }
  ],
  "location": "Gym_By_Region_Class.i_launch_the(String)"
});
formatter.result({
  "duration": 3484899815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GYMS_tab",
      "offset": 12
    }
  ],
  "location": "Gym_By_Region_Class.i_click_on(String)"
});
formatter.result({
  "duration": 708028874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Gym",
      "offset": 12
    }
  ],
  "location": "Gym_By_Region_Class.i_click_on_link(String)"
});
formatter.result({
  "duration": 327486572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchbox",
      "offset": 8
    },
    {
      "val": "GymNearMe_Text",
      "offset": 38
    }
  ],
  "location": "Gym_Near_Me_Class.in_the_textfield_I_enter_in_the_address_text_field(String,String)"
});
formatter.result({
  "duration": 2159634764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 9
    }
  ],
  "location": "Gym_Near_Me_Class.i_press_on_the_keyboard(String)"
});
formatter.result({
  "duration": 2095558478,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search for a gym near me",
  "description": "",
  "id": "as-a-prospective-nuffield-gym-customer;search-for-a-gym-near-me",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@testcompleted"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I should see \"a list of gym near me\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a list of gym near me",
      "offset": 14
    }
  ],
  "location": "Gym_By_Region_Class.i_should_see(String)"
});
formatter.result({
  "duration": 2057254726,
  "status": "passed"
});
formatter.after({
  "duration": 11024,
  "status": "passed"
});
formatter.before({
  "duration": 26390636,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Browse by region",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch the \"url\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"GYMS_tab\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Find a Gym\" link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "in the \"searchbox\" textfield I enter \"GymNearMe_Text\" in the address text field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I press \"enter\" on the keyboard",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 14
    }
  ],
  "location": "Gym_By_Region_Class.i_launch_the(String)"
});
formatter.result({
  "duration": 3258213812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GYMS_tab",
      "offset": 12
    }
  ],
  "location": "Gym_By_Region_Class.i_click_on(String)"
});
formatter.result({
  "duration": 144642918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Gym",
      "offset": 12
    }
  ],
  "location": "Gym_By_Region_Class.i_click_on_link(String)"
});
formatter.result({
  "duration": 436410670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchbox",
      "offset": 8
    },
    {
      "val": "GymNearMe_Text",
      "offset": 38
    }
  ],
  "location": "Gym_Near_Me_Class.in_the_textfield_I_enter_in_the_address_text_field(String,String)"
});
formatter.result({
  "duration": 2145881405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 9
    }
  ],
  "location": "Gym_Near_Me_Class.i_press_on_the_keyboard(String)"
});
formatter.result({
  "duration": 2049975861,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Save user\u0027s location for future visits",
  "description": "",
  "id": "as-a-prospective-nuffield-gym-customer;save-user\u0027s-location-for-future-visits",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@testcompleted"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am a \"repeat\" visitor",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I view the list of \"Nuffield gyms\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see \"a list of gym near me\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "repeat",
      "offset": 8
    }
  ],
  "location": "Gym_Near_Me_Class.i_am_a_visitor(String)"
});
formatter.result({
  "duration": 2022870187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nuffield gyms",
      "offset": 20
    }
  ],
  "location": "Gym_Near_Me_Class.i_view_the_list_of(String)"
});
formatter.result({
  "duration": 2133382497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a list of gym near me",
      "offset": 14
    }
  ],
  "location": "Gym_By_Region_Class.i_should_see(String)"
});
formatter.result({
  "duration": 2044412555,
  "status": "passed"
});
formatter.after({
  "duration": 25469,
  "status": "passed"
});
formatter.uri("Save_User_Location.feature");
formatter.feature({
  "line": 1,
  "name": "As a repeat visitor, I want tobe able",
  "description": "to see a list of gym near me based on previous\r\naddress",
  "id": "as-a-repeat-visitor,-i-want-tobe-able",
  "keyword": "Feature"
});
formatter.before({
  "duration": 29842661,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Search for a gym near me",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch the \"url\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"GYMS_tab\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Find a Gym\" link",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 14
    }
  ],
  "location": "Gym_By_Region_Class.i_launch_the(String)"
});
formatter.result({
  "duration": 3724457259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GYMS_tab",
      "offset": 12
    }
  ],
  "location": "Gym_By_Region_Class.i_click_on(String)"
});
formatter.result({
  "duration": 154960978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Gym",
      "offset": 12
    }
  ],
  "location": "Gym_By_Region_Class.i_click_on_link(String)"
});
formatter.result({
  "duration": 439812896,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Save user location for future visits",
  "description": "",
  "id": "as-a-repeat-visitor,-i-want-tobe-able;save-user-location-for-future-visits",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@testcompleted"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I should see \"a list of gym near me\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a list of gym near me",
      "offset": 14
    }
  ],
  "location": "Gym_By_Region_Class.i_should_see(String)"
});
formatter.result({
  "duration": 2054185499,
  "status": "passed"
});
formatter.after({
  "duration": 25849,
  "status": "passed"
});
});