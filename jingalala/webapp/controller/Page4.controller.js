sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("demo.routing.jingalala.controller.Page4", {
onGoToPage5: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage5");
        }
    });
});
