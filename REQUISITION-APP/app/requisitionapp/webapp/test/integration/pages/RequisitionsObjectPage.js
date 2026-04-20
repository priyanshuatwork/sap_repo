sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.demo.requisitionapp',
            componentId: 'RequisitionsObjectPage',
            contextPath: '/Requisitions'
        },
        CustomPageDefinitions
    );
});