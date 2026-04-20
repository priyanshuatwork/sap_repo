sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheRegistrationsList.iSeeThisPage();
            Then.onTheRegistrationsList.onFilterBar().iCheckFilterField("RegId");
            Then.onTheRegistrationsList.onFilterBar().iCheckFilterField("FirstName");
            Then.onTheRegistrationsList.onFilterBar().iCheckFilterField("Surname");
            Then.onTheRegistrationsList.onFilterBar().iCheckFilterField("Gender");
            Then.onTheRegistrationsList.onTable().iCheckColumns(8, {"RegId":{"header":"RegId"},"FirstName":{"header":"FirstName"},"MiddleName":{"header":"MiddleName"},"Surname":{"header":"Surname"},"Dob":{"header":"Dob"},"Age":{"header":"Age"},"Gender":{"header":"Gender"},"Address":{"header":"Address"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheRegistrationsList.onFilterBar().iExecuteSearch();
            
            Then.onTheRegistrationsList.onTable().iCheckRows();

            When.onTheRegistrationsList.onTable().iPressRow(0);
            Then.onTheRegistrationsObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});