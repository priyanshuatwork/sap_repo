sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("demo.bhithike.thike.controller.View2", {
        onInit: function() {
            var oModel= new JSONModel({
                isVisible:false
            });
            this.getView().setModel(oModel);
        },

        onToggle :function()
        {
            var oModel= this.getView().getModel();
            var bCurrent= oModel.getProperty("/isVisible");

            oModel.setProperty("/isVisible", !bCurrent);
        }
    });
});