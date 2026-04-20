sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demo.routing.jingalala.controller.Page2", {
onGoToPage3: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage3");
        }
    });
});
