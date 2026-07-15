Feature: Login feature
    Background:
        Given User on the Home page
        And click login button
    @ValidLogin
    Scenario: Login with valid credentials
        When User enter email in login page
        And enter password in login page
        And click login Button
        Then User can their username in dashbaord page
    @InvalidLogin
    Scenario Outline: Login with Invalid credentials
        When User enter invalid email "<InvalidEmail>" in login page
        And enter invalid password "<Invalidpassword>" in login page
        And click login Button
        Then page should display Login was unsuccessful. Please correct the errors and try again.
        Examples:
            | InvalidEmail         | Invalidpassword |
            | tamilkumar@gmail.com | Kiot1234        |
            | abc@gmail.com        | wrongpassword   |

