sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.demo.blackrock.controller.Main", {
        onApprove: function(oEvent) {
            MessageToast.show("Approved: " + oEvent.getParameter("reqId"));
        },

        onBlocked: function(oEvent) {
            MessageToast.show(
                "Approval blocked for " +
                oEvent.getParameter("reqId") +
                ". Reason: " +
                oEvent.getParameter("reason")
            );
        }
    });
});