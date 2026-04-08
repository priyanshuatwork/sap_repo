sap.ui.require([
    "sap/ui/test/Opa5",
    "sap/ui/test/opaQunit",
    "com/demo/niggesh/test/integration/arrangements/Startup",
    "com/demo/niggesh/test/integration/pages/Login"
], function (Opa5, opaTest, Startup) {
    "use strict";

    Opa5.extendConfig({
        arrangements: new Startup(),
        viewNamespace: "com.demo.niggesh.view.",
        autoWait: true
    });

    QUnit.module("Login Integration");

    opaTest("Should display login form", function (Given, When, Then) {

        Given.iStartMyApp();

        Then.onTheLoginPage.iShouldSeeLoginForm();

        Then.iTeardownMyApp();

    });

    opaTest("Should login successfully with valid credentials", function (Given, When, Then) {

        Given.iStartMyApp();

        Then.onTheLoginPage.iShouldSeeLoginForm();

        When.onTheLoginPage.iEnterUser("admin");
        When.onTheLoginPage.iEnterPassword("admin123");
        When.onTheLoginPage.iPressLogin();

        Then.onTheLoginPage.iShouldSeeResult("Login successful.");

        Then.iTeardownMyApp();

    });

    opaTest("Should show error for wrong password", function (Given, When, Then) {

        Given.iStartMyApp();

        When.onTheLoginPage.iEnterUser("admin");
        When.onTheLoginPage.iEnterPassword("wrong123");
        When.onTheLoginPage.iPressLogin();

        Then.onTheLoginPage.iShouldSeeResult("Invalid credentials.");

        Then.iTeardownMyApp();

    });

});