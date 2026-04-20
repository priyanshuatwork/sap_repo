sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demo.routing.jingalala.controller.Main", {
onGoToPage2: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage2");
        }
    });
});
