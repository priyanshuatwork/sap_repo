sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/prom/profate/test/integration/pages/RegistrationsList",
	"demo/prom/profate/test/integration/pages/RegistrationsObjectPage"
], function (JourneyRunner, RegistrationsList, RegistrationsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/prom/profate') + '/test/flp.html#app-preview',
        pages: {
			onTheRegistrationsList: RegistrationsList,
			onTheRegistrationsObjectPage: RegistrationsObjectPage
        },
        async: true
    });

    return runner;
});

