sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.practice.project.controller.View4", {

        onInit: function () {
         },

        onSelectionChange: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");
            
            if (oSelectedItem) {
                var sText = oSelectedItem.getText();
                MessageToast.show("You selected: " + sText);
            }
        }

    });
});
