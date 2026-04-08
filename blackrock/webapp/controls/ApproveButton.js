sap.ui.define([
    "sap/m/Button",
    "sap/m/ButtonRenderer",
    "sap/m/MessageBox"
], function (Button, ButtonRenderer, MessageBox) {
    "use strict";

    return Button.extend("com.demo.blackrock.controls.ApproveButton", {
        renderer: ButtonRenderer,

        metadata: {
            properties: {
                budgetExceeded: { type: "boolean", defaultValue: false },
                confirmationRequired: { type: "boolean", defaultValue: true },
                approvalText: {
                    type: "string",
                    defaultValue: "Do you want to approve this requisition?"
                }
            },
            events: {
                approvalAccepted: {},
                approvalRejected: {
                    parameters: {
                        reason: { type: "string" }
                    }
                }
            }
        },

        onclick: function (oEvent) {
            oEvent.preventDefault();

            if (this.getBudgetExceeded()) {
                this.fireApprovalRejected({
                    reason: "Budget exceeded"
                });
                return;
            }

            if (this.getConfirmationRequired()) {
                MessageBox.confirm(this.getApprovalText(), {
                    onClose: function (sAction) {
                        if (sAction === MessageBox.Action.OK) {
                            this.fireApprovalAccepted();
                            this.firePress();   // FIX
                        }
                    }.bind(this)
                });
            } else {
                this.fireApprovalAccepted();
                this.firePress();   // FIX
            }
        }
    });
});