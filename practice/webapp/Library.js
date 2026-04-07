sap.ui.define([
    "sap/ui/core/library"
], function () {
    "use strict";

    sap.ui.getCore().initLibrary({
        name: "demo.component",
        version: "1.0.0",
        dependencies: ["sap.m"],
        controls: [
            "demo.extend.practice.control.MyButton"
        ],
        noLibraryCSS: true
    });

    return demo.component;
});