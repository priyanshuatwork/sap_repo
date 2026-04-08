sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/demo/blackrock/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.demo.blackrock.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);
            this.setModel(models.createDeviceModel(), "device");
        }
    });
});