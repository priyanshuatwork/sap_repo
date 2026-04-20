sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demo.routing.jingalala.controller.Page5", {
 onGoToPage1: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage1");
        },

        onBack: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage4");
        }
    });
});

