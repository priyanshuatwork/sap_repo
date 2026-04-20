sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.demo.blackstone.controller.App", {

        onSave: function () {
            var that = this;
            var oModel = this.getView().getModel();

            var oData = {
                Banfn: this.byId("inpBanfn").getValue(),
                Txz01: this.byId("inpTxz01").getValue(),
                Menge: this.byId("inpMenge").getValue(),
                Werks: this.byId("inpWerks").getValue()
            };

            oModel.create("/PurchaseReqSet", oData, {
                success: function () {
                    MessageToast.show("Purchase Requisition Created");
                    oModel.refresh(true);

                    // clear form
                    that.byId("inpBanfn").setValue("");
                    that.byId("inpTxz01").setValue("");
                    that.byId("inpMenge").setValue("");
                    that.byId("inpWerks").setValue("");
                },
                error: function () {
                    MessageToast.show("Error creating PR");
                }
            });
        }

    });
});