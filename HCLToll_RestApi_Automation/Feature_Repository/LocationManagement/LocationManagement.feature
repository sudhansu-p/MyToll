Feature: Validate Location Management Rest Api with Address and reference services

  Scenario Outline: Validate response code for Reference Service with Path and Query parameter
    Given A location management URI under sheet "LocationManagement-Reference" from column "3" through <Row>
    When I perform request from Column "2"
    Then I verify the ResponseCode from column "5"
    And if ResponseCode is "200" then validate Context Type from column "7" and Response time from column "8"

    Examples: 
      | Description | Row |
      | TC1         |   1 |
      | TC2         |   2 |
      | TC3         |   3 |
      | TC4         |   4 |
      | TC5         |   5 |
      | TC6         |   6 |
      | TC7         |   7 |
      | TC8         |   8 |
      | TC9         |   9 |
      | TC10        |  10 |
