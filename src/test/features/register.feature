Feature: Register Feature
    Background:
        Given User on the Home page
        And click Register link
    Scenario: Register with valid details
        When user enter all the valid details in register page
        And click the Register button
        Then user can see the logout button
    Scenario: Register with Invalid details
        When user enter all the invalid details in register page
            | firstName | Tamil |
            | lastName  | E     |
            | email     | tamil |
            | password  | 1234  |
        And click the Register Button
        Then the page should show invalid
        And password should be atleast six characters