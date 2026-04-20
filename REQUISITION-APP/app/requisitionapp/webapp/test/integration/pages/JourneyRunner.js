sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/demo/requisitionapp/test/integration/pages/RequisitionsList",
	"com/demo/requisitionapp/test/integration/pages/RequisitionsObjectPage"
], function (JourneyRunner, RequisitionsList, RequisitionsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/demo/requisitionapp') + '/test/flp.html#app-preview',
        pages: {
			onTheRequisitionsList: RequisitionsList,
			onTheRequisitionsObjectPage: RequisitionsObjectPage
        },
        async: true
    });

    return runner;
});

