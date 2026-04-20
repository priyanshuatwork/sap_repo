sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
], function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("com.demo.mkb.controller.Login", {

        onInit: function () {
            this.getView().setModel(new JSONModel({
                name: "",
                pass: ""
            }));
        },

        onTogglePassword: function () {
            var oInput = this.byId("passInput");
            oInput.setType(oInput.getType() === "Password" ? "Text" : "Password");
        },

        onLiveChange: function (oEvent) {

            var oInput = oEvent.getSource();
            var sId = oInput.getId();
            var sValue = (oEvent.getParameter("value") || "").trim();

            var usernameRegex = /^[A-Za-z]{3,10}$/;
            var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=(?:.*[^A-Za-z0-9]){2}).{10}$/;

            if (sId.includes("nameInput")) {

                if (!usernameRegex.test(sValue)) {
                    oInput.setValueState(ValueState.Error);
                    oInput.setValueStateText("Username must be 3-10 letters only");
                } else {
                    oInput.setValueState(ValueState.Success);
                }

            } else if (sId.includes("passInput")) {

                if (!passRegex.test(sValue)) {
                    oInput.setValueState(ValueState.Error);
                    oInput.setValueStateText("Password must contain capital, small, digit, 2 special chars (10 length)");
                } else {
                    oInput.setValueState(ValueState.Success);
                }
            }
        },

        onLogin: function () {

            var oName = this.byId("nameInput");
            var oPass = this.byId("passInput");

            if (oName.getValueState() === "Success" && oPass.getValueState() === "Success") {
                this.byId("loginButton").addStyleClass("sapUiSuccess");
                this.byId("resultText").setText("Login Successful");
            } else {
                this.byId("resultText").setText("Please fix validation errors");
            }
        },

        onCancel: function () {

            this.getView().getModel().setData({ name: "", pass: "" });

            this.byId("nameInput").setValueState("None");
            this.byId("passInput").setValueState("None");
            this.byId("resultText").setText("");
        }

    });
});