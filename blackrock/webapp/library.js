sap.ui.define(["sap/ui/core/Core"], function(Core) {
    "use strict";

    Core.initLibrary({
        name: "demo.co",
        version: "1.0.0",
        dependencies: [
            "sap.ui.core",
            "sap.m"
        ],
        controls: [
            "demo.int.controls.ApproveButton",
            "demo.int.controls.RiskIndicator",
            "demo.int.controls.RequisitionCard"
        ],
        noLibraryCSS: false
    });

    return demo.co;
});