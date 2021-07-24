$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/FbSignUp.feature");
formatter.feature({
  "name": "Fb SignUp Feature to validate the add new user functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that user is able to create the new account using cucumber datatable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DataTable"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the FB application",
  "keyword": "Given "
});
formatter.match({
  "location": "FbSignUpSteps.user_has_launched_the_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Create New Account Link",
  "keyword": "When "
});
formatter.match({
  "location": "FbSignUpSteps.user_clicks_on_the_create_new_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User creates the new account",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "FirstNaame",
        "Raj"
      ]
    },
    {
      "cells": [
        "LastName",
        "Sharma"
      ]
    },
    {
      "cells": [
        "MobileNum",
        "9999999999"
      ]
    },
    {
      "cells": [
        "Password",
        "abc@abc123"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpSteps.user_creates_the_new_account(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the SignUp button",
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpSteps.user_click_on_the_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FbSignUpSteps.user_should_be_able_to_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});