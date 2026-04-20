sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZ_PRODUCT04List.iSeeThisPage();
            Then.onTheZ_PRODUCT04List.onTable().iCheckColumns(8, {"product_id":{"header":"product_id"},"product_name":{"header":"product_name"},"price":{"header":"price"},"currency":{"header":"currency"},"created_by":{"header":"Created By"},"created_at":{"header":"Created On"},"last_changed_by":{"header":"Changed By"},"last_changed_at":{"header":"Changed On"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZ_PRODUCT04List.onFilterBar().iExecuteSearch();
            
            Then.onTheZ_PRODUCT04List.onTable().iCheckRows();

            When.onTheZ_PRODUCT04List.onTable().iPressRow(0);
            Then.onTheZ_PRODUCT04ObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});