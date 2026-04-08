sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";

    return Control.extend("com.demo.blackrock.controls.RiskIndicator", {
        metadata: {
            properties: {
                score: { type: "int", defaultValue: 0 },
                label: { type: "string", defaultValue: "Risk" },
                threshold: { type: "int", defaultValue: 70 }
            }
        },

        renderer: {

            apiVersion: 2,
            render: function (rm, oControl) {
                var iScore = oControl.getScore();
                var iThreshold = oControl.getThreshold();
                var sState = iScore >= iThreshold ? "High" : (iScore >= 40 ? "Medium" : "Low");
                var sWidth = Math.max(0, Math.min(iScore, 100)) + "%";

                rm.openStart("div", oControl);
                rm.class("demoCoRiskIndicator");
                rm.openEnd();

                rm.openStart("div");
                rm.class("demoCoRiskLabel");
                rm.openEnd();
                rm.text(oControl.getLabel() + ": " + sState + " (" + iScore + ")");
                rm.close("div");

                rm.openStart("div");
                rm.class("demoCoRiskBarContainer");
                rm.openEnd();

                rm.openStart("div");
                rm.class("demoCoRiskBar");
                rm.class("demoCoRiskBar" + sState);
                rm.style("width", sWidth);
                rm.openEnd();
                rm.close("div");

                rm.close("div");
                rm.close("div");
            }
        }
    });
});