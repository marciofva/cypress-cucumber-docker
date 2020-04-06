Feature: Login flow

Background: User is logged in
    Given I navigate to the login page
    Then I see "Saloodo! Login" in the title

 Scenario: Login as a carrier with valid credentials
 	When I input the credentials "michael@test.com" and "mqin118W%"
    And I click on login button
    Then Carrier should be logged in
    And I see "Saloodo! Carrier dashboard" in the title

Scenario: Login as a carrier with invalid credentials
 	When I input the credentials "michael@test.com" and "mqin"
    And I click on login button
    Then Should see the message "Either your email or password is not correct"