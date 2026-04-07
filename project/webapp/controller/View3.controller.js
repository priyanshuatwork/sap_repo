sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/library",
    "sap/m/MessageToast"
], function (Controller, JSONModel, coreLibrary, MessageToast) {
    "use strict";

    var ValueState = coreLibrary.ValueState;

    return Controller.extend("demo.project.practice.controller.View3", {

        onInit: function () {
            var oModel = new JSONModel({
                name: "",
                email: ""
            });

            this.getView().setModel(oModel);
        },

        onValidate: function () {
            var oNameInput = this.byId("nameInput2");
            var oEmailInput = this.byId("emailInput");

            var sName = (oNameInput.getValue() || "").trim();
            var sEmail = (oEmailInput.getValue() || "").trim();

            var bValid = true;

            // Email regex
            var bEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sEmail);

            // Name validation
            if (!sName) {
                oNameInput.setValueState(ValueState.Error);
                oNameInput.setValueStateText("Please enter your name");
                bValid = false;
            } else {
                oNameInput.setValueState(ValueState.Success);
                oNameInput.setValueStateText("Valid name");
            }

            // Email validation
            if (!sEmail) {
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("Please enter your email");
                bValid = false;
            } 
            else if (!bEmailValid) {
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("Invalid email format");
                bValid = false;
            } 
            else {
                oEmailInput.setValueState(ValueState.Success);
                oEmailInput.setValueStateText("Valid email");
            }

            // Final success
            if (bValid) {
                MessageToast.show("All inputs are valid ");
            }
        }

    });
});
