sap.ui.define([
    "com/tester/giga/controller/Login.controller"
], function (LoginController) {
    "use strict";

    QUnit.module("Login.controller");

    QUnit.test("onLogin sets success text", function (assert) {
        var oController = new LoginController();

        var sResultText = "";

        oController.byId = function (sId) {
            if (sId === "userInput") {
                return {
                    getValue: function () {
                        return "admin";
                    }
                };
            }

            if (sId === "passwordInput") {
                return {
                    getValue: function () {
                        return "admin123";
                    }
                };
            }

            if (sId === "resultText") {
                return {
                    setText: function (sText) {
                        sResultText = sText;
                    }
                };
            }
        };

        oController.onLogin();

        assert.strictEqual(sResultText, "Login successful.", "Controller sets success message");
    });

    QUnit.test("onLogin sets failure text", function (assert) {
        var oController = new LoginController();

        var sResultText = "";

        oController.byId = function (sId) {
            if (sId === "userInput") {
                return {
                    getValue: function () {
                        return "ad";
                    }
                };
            }

            if (sId === "passwordInput") {
                return {
                    getValue: function () {
                        return "123";
                    }
                };
            }

            if (sId === "resultText") {
                return {
                    setText: function (sText) {
                        sResultText = sText;
                    }
                };
            }
        };

        oController.onLogin();

        assert.strictEqual(sResultText, "User ID must be at least 3 characters.", "Controller sets validation message");
    });
});