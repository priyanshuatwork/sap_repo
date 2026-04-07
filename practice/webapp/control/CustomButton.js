sap.ui.define([
    "sap/m/Button",
    "sap/m/ButtonRenderer"
], function (Button, ButtonRenderer) {
    "use strict";

    return Button.extend("demo.extend.practice.control.CustomButton", {
        metadata: {
            properties: {
                highlightColor: {
                    type: "string",
                    defaultValue: "orange"
                }
            }
        },

        onclick: function () {
            console.log("Custom behavior: Extended button clicked");
            Button.prototype.onclick.apply(this, arguments);
        },

        renderer: {
            apiVersion: 2,
            render: function (oRm, oControl) {
                oRm.openStart("div");
                oRm.style("border", "2px solid " + oControl.getHighlightColor());
                oRm.style("padding", "8px");
                oRm.style("display", "inline-block");
                oRm.openEnd();

                ButtonRenderer.render(oRm, oControl);

                oRm.close("div");
            }
        }
    });
});