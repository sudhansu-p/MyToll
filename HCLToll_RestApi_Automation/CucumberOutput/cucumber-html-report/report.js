$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LocationManagement/LocationManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Location Management Rest Api with Address and reference services",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through \u003cRow\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;",
  "rows": [
    {
      "cells": [
        "Description",
        "Row"
      ],
      "line": 10,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;1"
    },
    {
      "cells": [
        "TC1",
        "1"
      ],
      "line": 11,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;2"
    },
    {
      "cells": [
        "TC2",
        "2"
      ],
      "line": 12,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;3"
    },
    {
      "cells": [
        "TC3",
        "3"
      ],
      "line": 13,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;4"
    },
    {
      "cells": [
        "TC4",
        "4"
      ],
      "line": 14,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;5"
    },
    {
      "cells": [
        "TC5",
        "5"
      ],
      "line": 15,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;6"
    },
    {
      "cells": [
        "TC6",
        "6"
      ],
      "line": 16,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;7"
    },
    {
      "cells": [
        "TC7",
        "7"
      ],
      "line": 17,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;8"
    },
    {
      "cells": [
        "TC8",
        "8"
      ],
      "line": 18,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;9"
    },
    {
      "cells": [
        "TC9",
        "9"
      ],
      "line": 19,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;10"
    },
    {
      "cells": [
        "TC10",
        "10"
      ],
      "line": 20,
      "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 476075121,
  "status": "passed"
});
formatter.before({
  "duration": 454445,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "1",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 287178609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 6266170266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 6701733,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 345247,
  "status": "passed"
});
formatter.before({
  "duration": 320616,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 2",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "2",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 20386405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2028239236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 12208854,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1029583,
  "status": "passed"
});
formatter.before({
  "duration": 929417,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 3",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "3",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 4346993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2037158186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 21147509,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 390814,
  "status": "passed"
});
formatter.before({
  "duration": 306658,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 4",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "4",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 4701681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2058192803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 42316776,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 339090,
  "status": "passed"
});
formatter.before({
  "duration": 333752,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "5",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 8861888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2046738483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 8324518,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 687210,
  "status": "passed"
});
formatter.before({
  "duration": 605927,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 6",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "6",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 18655244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2023637311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 8013755,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 672431,
  "status": "passed"
});
formatter.before({
  "duration": 728262,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 7",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "7",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 6386865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2031746716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 11377963,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 641231,
  "status": "passed"
});
formatter.before({
  "duration": 593611,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 8",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "8",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 13499528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2042184178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 6479232,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1086646,
  "status": "passed"
});
formatter.before({
  "duration": 331289,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 9",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "9",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 2612136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2039079828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 5871253,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 347710,
  "status": "passed"
});
formatter.before({
  "duration": 302143,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate response code for Reference Service with Path and Query parameter",
  "description": "",
  "id": "validate-location-management-rest-api-with-address-and-reference-services;validate-response-code-for-reference-service-with-path-and-query-parameter;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A location management URI under sheet \"LocationManagement-Reference\" from column \"3\" through 10",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I perform request from Column \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify the ResponseCode from column \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "if ResponseCode is \"200\" then validate Context Type from column \"7\" and Response time from column \"8\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "LocationManagement-Reference",
      "offset": 39
    },
    {
      "val": "3",
      "offset": 82
    },
    {
      "val": "10",
      "offset": 93
    }
  ],
  "location": "Reference_LocationManagement.a_location_management_URI_under_sheet_from_column_through(String,int,int)"
});
formatter.result({
  "duration": 2721335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Reference_LocationManagement.Get_Request_Method(int)"
});
formatter.result({
  "duration": 2037724703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "Reference_LocationManagement.i_verify_the_ResponseCode_from_column(int)"
});
formatter.result({
  "duration": 6466506,
  "error_message": "java.lang.NullPointerException\r\n\tat LocationManagement.Reference_LocationManagement.i_verify_the_ResponseCode_from_column(Reference_LocationManagement.java:74)\r\n\tat ✽.Then I verify the ResponseCode from column \"5\"(LocationManagement/LocationManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 65
    },
    {
      "val": "8",
      "offset": 99
    }
  ],
  "location": "Reference_LocationManagement.if_ResponseCode_is_then_validate_Context_Type_from_column_and_Response_time_from_column(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("SampleFeature/Sample.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: malkiyat.singh"
    }
  ],
  "line": 2,
  "name": "Check the stability of POST request for PickUP feature",
  "description": "",
  "id": "check-the-stability-of-post-request-for-pickup-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6760848,
  "status": "passed"
});
formatter.before({
  "duration": 621527,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate Pet Store Inventory",
  "description": "",
  "id": "check-the-stability-of-post-request-for-pickup-feature;validate-pet-store-inventory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "URI is \"http://petstore.swagger.io/v2/store/inventory\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Perform GET request",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://petstore.swagger.io/v2/store/inventory",
      "offset": 8
    }
  ],
  "location": "SampleRun.uri_is(String)"
});
formatter.result({
  "duration": 234818,
  "status": "passed"
});
formatter.match({
  "location": "SampleRun.perform_GET_request()"
});
formatter.result({
  "duration": 1373529364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "SampleRun.validate_response(String)"
});
formatter.result({
  "duration": 133484159,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Place an order for a pet",
  "description": "",
  "id": "check-the-stability-of-post-request-for-pickup-feature;place-an-order-for-a-pet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "URI is \"http://petstore.swagger.io/v2/store/order\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Use sheet \"Sample\" and \u003cRow\u003e and \u003cColumn\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Perform POST request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the \u003cResponseCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "check-the-stability-of-post-request-for-pickup-feature;place-an-order-for-a-pet;",
  "rows": [
    {
      "cells": [
        "Description",
        "Row",
        "Column",
        "ResponseCode"
      ],
      "line": 18,
      "id": "check-the-stability-of-post-request-for-pickup-feature;place-an-order-for-a-pet;;1"
    },
    {
      "cells": [
        "Valid Json",
        "0",
        "0",
        "200"
      ],
      "line": 19,
      "id": "check-the-stability-of-post-request-for-pickup-feature;place-an-order-for-a-pet;;2"
    },
    {
      "cells": [
        "Invalid Json",
        "0",
        "2",
        "400"
      ],
      "line": 20,
      "id": "check-the-stability-of-post-request-for-pickup-feature;place-an-order-for-a-pet;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5097012,
  "status": "passed"
});
formatter.before({
  "duration": 424067,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Place an order for a pet",
  "description": "",
  "id": "check-the-stability-of-post-request-for-pickup-feature;place-an-order-for-a-pet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "URI is \"http://petstore.swagger.io/v2/store/order\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Use sheet \"Sample\" and 0 and 0",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Perform POST request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the 200",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://petstore.swagger.io/v2/store/order",
      "offset": 8
    }
  ],
  "location": "SampleRun.uri_is(String)"
});
formatter.result({
  "duration": 79230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 11
    },
    {
      "val": "0",
      "offset": 23
    },
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "SampleRun.use_sheet_and_and(String,int,int)"
});
formatter.result({
  "duration": 3853959,
  "status": "passed"
});
formatter.match({
  "location": "SampleRun.perform_POST_request()"
});
formatter.result({
  "duration": 777488909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 11
    }
  ],
  "location": "SampleRun.verify_the(int)"
});
formatter.result({
  "duration": 8833151,
  "status": "passed"
});
formatter.before({
  "duration": 551328,
  "status": "passed"
});
formatter.before({
  "duration": 564876,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Place an order for a pet",
  "description": "",
  "id": "check-the-stability-of-post-request-for-pickup-feature;place-an-order-for-a-pet;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "URI is \"http://petstore.swagger.io/v2/store/order\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Use sheet \"Sample\" and 0 and 2",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Perform POST request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the 400",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://petstore.swagger.io/v2/store/order",
      "offset": 8
    }
  ],
  "location": "SampleRun.uri_is(String)"
});
formatter.result({
  "duration": 126851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample",
      "offset": 11
    },
    {
      "val": "0",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "SampleRun.use_sheet_and_and(String,int,int)"
});
formatter.result({
  "duration": 6150405,
  "status": "passed"
});
formatter.match({
  "location": "SampleRun.perform_POST_request()"
});
formatter.result({
  "duration": 873713894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 11
    }
  ],
  "location": "SampleRun.verify_the(int)"
});
formatter.result({
  "duration": 6107300,
  "status": "passed"
});
});