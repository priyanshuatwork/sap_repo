sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Input",
    "sap/m/Button",
    "sap/m/VBox",
    "sap/m/Label"
], function (Controller, MessageToast, Dialog, Input, Button, VBox, Label) {
    "use strict";

    return Controller.extend("com.demo.yeahwalav4.controller.Main", {

        onInit: function () {
            this._oTable = this.byId("inventoryTable");
        },

        // 🔄 REFRESH
        onRefresh: function () {
            this._oTable.getBinding("items").refresh();
        },

        // 🔑 UUID GENERATOR
        _generateUUID: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        // ➕ CREATE
        onCreate: function () {

            var oDialog = new Dialog({
                title: "Create Inventory",
                content: new VBox({
                    items: [
                        new Label({ text: "Product Name" }), new Input("name"),
                        new Label({ text: "Price" }), new Input("price"),
                        new Label({ text: "Stock" }), new Input("stock"),
                        new Label({ text: "Warehouse" }), new Input("warehouse"),
                        new Label({ text: "Plant" }), new Input("plant"),
                        new Label({ text: "Asset Code" }), new Input("asset")
                    ]
                }),

                beginButton: new Button({
                    text: "Save",
                    press: function () {

                        var oModel = this.getView().getModel();
                        var oListBinding = oModel.bindList("/Inventory");

                        var oContext = oListBinding.create({
                            ItemId: this._generateUUID(),
                            ProductName: sap.ui.getCore().byId("name").getValue(),
                            ProductPrice: parseFloat(sap.ui.getCore().byId("price").getValue()),
                            InStock: parseInt(sap.ui.getCore().byId("stock").getValue(), 10),
                            WarehouseLoc: sap.ui.getCore().byId("warehouse").getValue(),
                            PlantLoc: sap.ui.getCore().byId("plant").getValue(),
                            AssetCode: sap.ui.getCore().byId("asset").getValue()
                        });

                        oContext.created().then(() => {
                            MessageToast.show("Created Successfully");
                            this.onRefresh();
                        }).catch(() => {
                            MessageToast.show("Create Failed");
                        });

                        oDialog.close();
                    }.bind(this)
                }),

                endButton: new Button({
                    text: "Cancel",
                    press: function () { oDialog.close(); }
                })
            });

            oDialog.open();
        },

        // ❌ DELETE
        onDelete: function () {
            var oItem = this._oTable.getSelectedItem();

            if (!oItem) {
                MessageToast.show("Select a row first");
                return;
            }

            oItem.getBindingContext().delete()
                .then(() => {
                    MessageToast.show("Deleted Successfully");
                    this.onRefresh();
                })
                .catch(() => MessageToast.show("Delete Failed"));
        },

        // ✏️ UPDATE
        onUpdate: function (oEvent) {

            var oContext = oEvent.getSource().getBindingContext();
            var oData = oContext.getObject();

            var oDialog = new Dialog({
                title: "Update Inventory",
                content: new VBox({
                    items: [
                        new Label({ text: "Product Name" }), new Input("uname", { value: oData.ProductName }),
                        new Label({ text: "Price" }), new Input("uprice", { value: oData.ProductPrice }),
                        new Label({ text: "Stock" }), new Input("ustock", { value: oData.InStock }),
                        new Label({ text: "Warehouse" }), new Input("uwarehouse", { value: oData.WarehouseLoc }),
                        new Label({ text: "Plant" }), new Input("uplant", { value: oData.PlantLoc }),
                        new Label({ text: "Asset Code" }), new Input("uasset", { value: oData.AssetCode })
                    ]
                }),

                beginButton: new Button({
                    text: "Update",
                    press: function () {

                        oContext.setProperty("ProductName", sap.ui.getCore().byId("uname").getValue());
                        oContext.setProperty("ProductPrice", parseFloat(sap.ui.getCore().byId("uprice").getValue()));
                        oContext.setProperty("InStock", parseInt(sap.ui.getCore().byId("ustock").getValue(), 10));
                        oContext.setProperty("WarehouseLoc", sap.ui.getCore().byId("uwarehouse").getValue());
                        oContext.setProperty("PlantLoc", sap.ui.getCore().byId("uplant").getValue());
                        oContext.setProperty("AssetCode", sap.ui.getCore().byId("uasset").getValue());

                        MessageToast.show("Updated Successfully");
                        oDialog.close();
                    }
                }),

                endButton: new Button({
                    text: "Cancel",
                    press: function () { oDialog.close(); }
                })
            });

            oDialog.open();
        }

    });
});