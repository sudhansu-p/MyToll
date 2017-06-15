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
  "duration": 521550896,
  "status": "passed"
});
formatter.before({
  "duration": 449935,
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
  "duration": 270481480,
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
  "duration": 6068838396,
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
  "duration": 21899842,
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
  "duration": 605524,
  "status": "passed"
});
formatter.before({
  "duration": 256577,
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
  "duration": 20501595,
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
  "duration": 2027167692,
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
  "duration": 11758243,
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
  "duration": 1372794,
  "status": "passed"
});
formatter.before({
  "duration": 574735,
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
  "duration": 8045870,
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
  "duration": 2051139863,
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
  "duration": 11289425,
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
  "duration": 970070,
  "status": "passed"
});
formatter.before({
  "duration": 410114,
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
  "duration": 4354434,
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
  "duration": 2060261307,
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
  "duration": 9737232,
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
  "duration": 695428,
  "status": "passed"
});
formatter.before({
  "duration": 644112,
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
  "duration": 11533276,
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
  "duration": 2057686087,
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
  "duration": 13508310,
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
  "duration": 335399,
  "status": "passed"
});
formatter.before({
  "duration": 284904,
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
  "duration": 9432623,
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
  "duration": 2031811136,
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
  "duration": 12061211,
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
  "duration": 421198,
  "status": "passed"
});
formatter.before({
  "duration": 388767,
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
  "duration": 5666060,
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
  "duration": 2031954408,
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
  "duration": 9497485,
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
  "duration": 3253407,
  "status": "passed"
});
formatter.before({
  "duration": 507819,
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
  "duration": 5352008,
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
  "duration": 2053230254,
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
  "duration": 21394075,
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
  "duration": 289009,
  "status": "passed"
});
formatter.before({
  "duration": 254115,
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
  "duration": 2675799,
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
  "duration": 2028251478,
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
  "duration": 7153801,
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
  "duration": 649860,
  "status": "passed"
});
formatter.before({
  "duration": 537376,
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
  "duration": 10074272,
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
  "duration": 2035681971,
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
  "duration": 7004780,
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
  "duration": 686397,
  "status": "passed"
});
formatter.before({
  "duration": 533682,
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
  "duration": 221273,
  "status": "passed"
});
formatter.match({
  "location": "SampleRun.perform_GET_request()"
});
formatter.result({
  "duration": 1918097892,
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
  "duration": 162749989,
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
  "duration": 4670127,
  "status": "passed"
});
formatter.before({
  "duration": 316515,
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
  "duration": 78820,
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
  "duration": 4290392,
  "status": "passed"
});
formatter.match({
  "location": "SampleRun.perform_POST_request()"
});
formatter.result({
  "duration": 1041153443,
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
  "duration": 4255087,
  "status": "passed"
});
formatter.before({
  "duration": 646166,
  "status": "passed"
});
formatter.before({
  "duration": 482777,
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
  "duration": 125210,
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
  "duration": 6340962,
  "status": "passed"
});
formatter.match({
  "location": "SampleRun.perform_POST_request()"
});
formatter.result({
  "duration": 1249295951,
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
  "duration": 5510061,
  "status": "passed"
});
});