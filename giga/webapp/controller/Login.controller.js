 sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/tester/giga/model/loginValidator"
], function (Controller, loginValidator) {
    "use strict";

    return Controller.extend("com.tester.giga.controller.Login", {
        onLogin: function () {
            var sUser = this.byId("userInput").getValue();
            var sPassword = this.byId("passwordInput").getValue();

            var oResult = loginValidator.validateCredentials(sUser, sPassword);

            this.byId("resultText").setText(oResult.message);
        }
    });
});