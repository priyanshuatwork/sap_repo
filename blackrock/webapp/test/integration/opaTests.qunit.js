/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/demo/blackrock/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
