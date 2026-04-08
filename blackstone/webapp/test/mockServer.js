sap.ui.define([
  "sap/ui/core/util/MockServer"
], function (MockServer) {
  "use strict";

  return {
    init: function () {
      var oMockServer = new MockServer({
        rootUri: "/sap/opu/odata/sap/ZPR_SRV/"
      });

      MockServer.config({
        autoRespond: true,
        autoRespondAfter: 500
      });

      oMockServer.simulate("../localservice/metadata.xml", {
        sMockdataBaseUrl: "../localservice/mockdata/PRSet.json",
        bGenerateMissingMockData: true
      });

      oMockServer.start();
      console.log("Mock Server started");
    }
  };
});