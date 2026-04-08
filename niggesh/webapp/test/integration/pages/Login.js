sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/EnterText",
    "sap/ui/test/actions/Press"
], function (Opa5, EnterText, Press) {
    "use strict";

    var sViewName = "Login";

    Opa5.createPageObjects({

        onTheLoginPage: {

            actions: {

                iEnterUser: function (sValue) {
                    return this.waitFor({
                        id: "userInput",
                        viewName: sViewName,
                        actions: new EnterText({ text: sValue }),
                        errorMessage: "User input field not found"
                    });
                },

                iEnterPassword: function (sValue) {
                    return this.waitFor({
                        id: "passwordInput",
                        viewName: sViewName,
                        actions: new EnterText({ text: sValue }),
                        errorMessage: "Password input field not found"
                    });
                },

                iPressLogin: function () {
                    return this.waitFor({
                        id: "loginButton",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Login button not found"
                    });
                }

            },

            assertions: {

                iShouldSeeLoginForm: function () {

                    this.waitFor({
                        id: "userInput",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "User input field is visible");
                        }
                    });

                    this.waitFor({
                        id: "passwordInput",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "Password input field is visible");
                        }
                    });

                    this.waitFor({
                        id: "loginButton",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "Login button is visible");
                        }
                    });

                },

                iShouldSeeResult: function (sExpectedText) {
                    return this.waitFor({
                        id: "resultText",
                        viewName: sViewName,
                        success: function (oControl) {

                            Opa5.assert.ok(true, "Result text control found");

                            Opa5.assert.strictEqual(
                                oControl.getText(),
                                sExpectedText,
                                "Result text matches expected value"
                            );

                        },
                        errorMessage: "Result text not found"
                    });
                }

            }

        }

    });

});