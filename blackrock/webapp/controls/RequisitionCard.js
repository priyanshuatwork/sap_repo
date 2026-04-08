sap.ui.define([
    "sap/ui/core/XMLComposite"
], function (XMLComposite) {
    "use strict";

    return XMLComposite.extend("com.demo.blackrock.controls.RequisitionCard", {

        metadata: {
            properties: {
                reqId: { type: "string", defaultValue: "" },
                supplier: { type: "string", defaultValue: "" },
                amount: { type: "string", defaultValue: "" },
                riskScore: { type: "int", defaultValue: 0 },
                contractAvailable: { type: "boolean", defaultValue: false },
                budgetExceeded: { type: "boolean", defaultValue: false }
            },

            events: {
                approve: {
                    parameters: {
                        reqId: { type: "string" }
                    }
                },
                blocked: {
                    parameters: {
                        reqId: { type: "string" },
                        reason: { type: "string" }
                    }
                }
            }
        },

        fragment: "com.demo.blackrock.controls.RequisitionCard",

        _onApproveAccepted: function () {
            this.fireApprove({
                reqId: this.getReqId()
            });
        },

        _onApproveRejected: function (oEvent) {
            this.fireBlocked({
                reqId: this.getReqId(),
                reason: oEvent.getParameter("reason")
            });
        }

    });
});