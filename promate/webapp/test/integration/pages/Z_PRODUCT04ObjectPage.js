sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'demo.listing.promate',
            componentId: 'Z_PRODUCT04ObjectPage',
            contextPath: '/Z_PRODUCT04'
        },
        CustomPageDefinitions
    );
});