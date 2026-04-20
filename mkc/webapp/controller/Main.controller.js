sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",

], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.demo.mkc.controller.Main", {
        onTilePress: function () {
            MessageToast.show("Tile Pressed");
        },
        onTilePress2: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteTile2");
        },
        onTilePress3: function () {
            MessageToast.show("Tile 3 Pressed");
        },
        onTilePress4: function () {
            MessageToast.show("Tile 4 Pressed");
        },
        onTilePress5: function () {
            MessageToast.show("Tile 5 Pressed");
        },
        onFileChange: function (oEvent) {
            var onFileUploader = oEvent.getSource();
            var sFileName = onFileUploader.getValue();

            MessageToast.show("Selected File" + sFileName);
        },
        onDownload: function () {
            // Create dummy content
            var sContent = "This is a dummy file.\nGenerated from SAPUI5 app.";

            // Convert to Blob
            var oBlob = new Blob([sContent], { type: "text/plain" });

            // Create download link
            var sUrl = URL.createObjectURL(oBlob);

            var oLink = document.createElement("a");
            oLink.href = sUrl;
            oLink.download = "dummy.txt";

            // Trigger download
            document.body.appendChild(oLink);
            oLink.click();

            // Cleanup
            document.body.removeChild(oLink);
            URL.revokeObjectURL(sUrl);
        },

        onUpload: function () {
            var oFileUploader = this.byId("fileUploader");
            if (!oFileUploader.getValue()) {
                MessageToast.show("Please select a file First");
                return;
            }

            MessageToast.show("File is uploaded");
        }

    });
});