sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'demo.listing.promate',
            componentId: 'Z_PRODUCT04List',
            contextPath: '/Z_PRODUCT04'
        },
        CustomPageDefinitions
    );
});