sap.ui.define([
    "sap/m/Button",
    "sap/m/ButtonRenderer"
], function (Button, ButtonRenderer) {
    "use strict";

    return Button.extend("demo.extend.practice.control.MyButton", {
        metadata: {
            properties: {
                customText: {
                    type: "string",
                    defaultValue: "Library Button"
                }
            }
        },

        renderer: ButtonRenderer,

        onAfterRendering: function () {
            this.setText(this.getCustomText());

            if (Button.prototype.onAfterRendering) {
                Button.prototype.onAfterRendering.apply(this, arguments);
            }
        }
    });
});