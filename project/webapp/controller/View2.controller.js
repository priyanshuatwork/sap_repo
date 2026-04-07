sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/library",
    "sap/ui/core/ValueState"

], function (Controller, JSONModel, coreLibrary, ValueState) {
    "use strict";

    return Controller.extend("demo.project.practice.controller.View2", {

        onInit: function () {
            var oModel = new JSONModel({
                name: ""
            });

            this.getView().setModel(oModel);
        },

        onLiveChange: function (oEvent) {
            var sValue = (oEvent.getParameter("value") || "").trim();
            var oInput = this.byId("nameInput");

            if (!sValue) {
                oInput.setValueState(ValueState.None);
                oInput.setValueStateText("");
            } 
            else if (sValue.length <= 5) {
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Minimum 6 characters required ❌");
            } 
            else {
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("Valid Input ✅");
            }
        }

    });
});
