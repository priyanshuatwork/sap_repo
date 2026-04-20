sap.ui.define([
    "sap/ui/core/mvc/Controller",

], (Controller) => {
    "use strict";

    return Controller.extend("demo.bhithike.thike.controller.View6", {
 
        onOpenFragment: function ()
        {
            var oView= this.getView();

            if(!this._oDialog)
            {
                this._oDialog =sap.ui.xmlfragment(
                    "demo.bhithike.thike.view.Dialog",
                    this
                );
                oView.addDependent(this._oDialog);
            }
            this._oDialog.open();
        },

        onCloseFragment: function()
        {
            this._oDialog.close();
        }
 
    });
});