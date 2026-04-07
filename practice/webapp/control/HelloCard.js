sap.ui.define([
    "sap/ui/core/XMLComposite",
    "sap/m/MessageToast"
], function (XMLComposite, MessageToast) {
    "use strict";

    return XMLComposite.extend("demo.extend.practice.control.HelloCard", {
        metadata: {
            properties: {
                title: {
                    type: "string",
                    defaultValue: "Employee Details"
                },
                name: {
                    type: "string",
                    defaultValue: "Guest"
                }
            }
        },

        onShowMessage: function () {
            MessageToast.show("Hello " + this.getName());
        }
    });
});