sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";

    return Control.extend("demo.extend.practice.control.MyText", {
        metadata: {
            properties: {
                text: {
                    type: "string",
                    defaultValue: "Hello Custom Control"
                }
            }
        },

        renderer: {
            apiVersion: 2,
            render: function (oRm, oControl) {
                oRm.openStart("div");
                oRm.style("border", "2px solid blue");
                oRm.style("padding", "10px");
                oRm.style("margin", "10px");
                oRm.style("font-weight", "bold");
                oRm.openEnd();

                oRm.text(oControl.getText());

                oRm.close("div");
            }
        }
    });
});