sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/listing/promate/test/integration/pages/Z_PRODUCT04List",
	"demo/listing/promate/test/integration/pages/Z_PRODUCT04ObjectPage"
], function (JourneyRunner, Z_PRODUCT04List, Z_PRODUCT04ObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/listing/promate') + '/test/flp.html#app-preview',
        pages: {
			onTheZ_PRODUCT04List: Z_PRODUCT04List,
			onTheZ_PRODUCT04ObjectPage: Z_PRODUCT04ObjectPage
        },
        async: true
    });

    return runner;
});

