sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("com.demo.appusinglogon.controller.Main", {

        onInit: function () {},

        // 🔄 REFRESH
        onRefresh: function () {
            this.getView().getModel().refresh();
            MessageToast.show("Data refreshed");
        },

        // ✅ ENABLE/DISABLE BUTTONS
        onSelectionChange: function () {
            var oTable = this.byId("regTable");
            var bSelected = !!oTable.getSelectedItem();

            this.byId("btnDelete").setEnabled(bSelected);
            this.byId("btnUpdate").setEnabled(bSelected);
        },

        // ❌ DELETE
        onDelete: function () {
            var oTable = this.byId("regTable");
            var oItem = oTable.getSelectedItem();

            if (!oItem) {
                MessageBox.error("Select a row first");
                return;
            }

            var sPath = oItem.getBindingContext().getPath();
            var oModel = this.getView().getModel();

            MessageBox.confirm("Are you sure you want to delete?", {
                onClose: function (sAction) {
                    if (sAction === "OK") {
                        oModel.remove(sPath, {
                            success: function () {
                                MessageToast.show("Deleted successfully");
                            },
                            error: function () {
                                MessageBox.error("Delete failed");
                            }
                        });
                    }
                }
            });
        },

        // 🟢 OPEN CREATE DIALOG
        onCreate: function () {
            this.byId("createDialog").open();
        },

        // ❌ CLOSE CREATE
        onCancelCreate: function () {
            this.byId("createDialog").close();
        },

        // ✅ CREATE
        onSubmitCreate: function () {
            var oModel = this.getView().getModel();

            var oEntry = {
                RegId: this.byId("inpRegId").getValue(),
                FirstName: this.byId("inpFirstName").getValue(),
                MiddleName: this.byId("inpMiddleName").getValue(),
                Surname: this.byId("inpSurname").getValue(),
                Age: parseInt(this.byId("inpAge").getValue()),
                Gender: this.byId("inpGender").getValue(),
                Address: this.byId("inpAddress").getValue()
            };

            // validation
            for (var key in oEntry) {
                if (!oEntry[key]) {
                    MessageBox.error("All fields are required");
                    return;
                }
            }

            oModel.create("/RegistrationSet", oEntry, {
                success: () => {
                    MessageToast.show("Created successfully");
                    this.byId("createDialog").close();
                    oModel.refresh();
                },
                error: (err) => {
                    console.log(err);
                    MessageBox.error("Create failed");
                }
            });
        },

        // ✏️ OPEN UPDATE DIALOG
        onUpdate: function () {
            var oItem = this.byId("regTable").getSelectedItem();
            if (!oItem) {
                MessageBox.error("Select a row first");
                return;
            }

            var oData = oItem.getBindingContext().getObject();

            this.byId("updRegId").setValue(oData.RegId);
            this.byId("updFirstName").setValue(oData.FirstName);
            this.byId("updMiddleName").setValue(oData.MiddleName);
            this.byId("updSurname").setValue(oData.Surname);
            this.byId("updAge").setValue(oData.Age);
            this.byId("updGender").setValue(oData.Gender);
            this.byId("updAddress").setValue(oData.Address);

            this.byId("updateDialog").open();
        },

        // ❌ CLOSE UPDATE
        onCancelUpdate: function () {
            this.byId("updateDialog").close();
        },

        // ✅ SUBMIT UPDATE
        onSubmitUpdate: function () {
            var oModel = this.getView().getModel();

            var sRegId = this.byId("updRegId").getValue();

            var oEntry = {
                RegId: sRegId,
                FirstName: this.byId("updFirstName").getValue(),
                MiddleName: this.byId("updMiddleName").getValue(),
                Surname: this.byId("updSurname").getValue(),
                Age: parseInt(this.byId("updAge").getValue()),
                Gender: this.byId("updGender").getValue(),
                Address: this.byId("updAddress").getValue()
            };

            var sPath = "/RegistrationSet('" + sRegId + "')";

            oModel.update(sPath, oEntry, {
                success: () => {
                    MessageToast.show("Updated successfully");
                    this.byId("updateDialog").close();
                    oModel.refresh();
                },
                error: (err) => {
                    console.log(err);
                    MessageBox.error("Update failed");
                }
            });
        }

    });
});