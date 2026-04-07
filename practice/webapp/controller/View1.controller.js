sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.extend.practice.controller.View1", {
        onPressNormal: function () {
            MessageToast.show("Normal Button Pressed");
        },

        onPressCustom: function () {
            MessageToast.show("Extended Button Pressed");
        }
    });
});