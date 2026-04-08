sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.demo.blackstone.controller.App", {

        onSave: function () {
            var oModel = this.getView().getModel();

            var oData = {
                Banfn: this.byId("inpBanfn").getValue(),
                Txz01: this.byId("inpTxz01").getValue(),
                Menge: this.byId("inpMenge").getValue(),
                Werks: this.byId("inpWerks").getValue()
            };

            oModel.create("/PRSet", oData, {
                success: function () {
                    MessageToast.show("PR Created Successfully");
                    oModel.refresh(true);
                },
                error: function () {
                    MessageToast.show("Error while creating PR");
                }
            });
        }

    });
});