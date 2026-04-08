sap.ui.define([
    "com/demo/blackstone/test/mockServer",
    "sap/ui/core/ComponentContainer"
], function (mockServer, ComponentContainer) {
    "use strict";

    mockServer.init();

    new ComponentContainer({
        name: "com.demo.blackstone",
        settings: {
            id: "com.demo.blackstone"
        },
        async: true
    }).placeAt("content");
});