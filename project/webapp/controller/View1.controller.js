sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/library"
], function (Controller, coreLibrary) {
    "use strict";

    var ValueState = coreLibrary.ValueState;

    return Controller.extend("demo.project.practice.controller.View1", {

        onLiveChange: function (oEvent) {
            var sValue = (oEvent.getParameter("value") || "").trim();
            var oInput = this.byId("numberInput");

            // Regex: only digits allowed
            var bValid = /^[0-9]+$/.test(sValue);

            if (!sValue) {
                // Empty input
                oInput.setValueState(ValueState.None);
                oInput.setValueStateText("");
            } 
            else if (bValid) {
                // Valid number
                oInput.setValueState(ValueState.Information);
                oInput.setValueStateText("Valid number ✅");
            } 
            else {
                // Invalid input
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Only digits allowed ❌");
            }
        }

    });
});
