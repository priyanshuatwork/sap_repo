/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/demo/blackstone/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
