sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.demo.xmen.controller.Main", {

        onInit: function () {
            // Sample Data
            var oData = {
                employees: [
                    { id: "101", name: "Tony Stark", city: "New York" },
                    { id: "102", name: "Steve Rogers", city: "Brooklyn" },
                    { id: "103", name: "Bruce Banner", city: "Dayton" },
                    { id: "104", name: "Natasha Romanoff", city: "Moscow" },
                    { id: "105", name: "Thor Odinson", city: "Asgard" },
                    { id: "106", name: "Peter Parker", city: "Queens" }
                ]
            };

            // Create model and set to view
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onSearch: function (oEvent) {
            var sValue = oEvent.getParameter("newValue");

            var oTable = this.byId("idTable");
            var oBinding = oTable.getBinding("items");

            var aFilters = [];

            if (sValue && sValue.length > 0) {

                var oFilterName = new Filter("name", FilterOperator.Contains, sValue);
                var oFilterCity = new Filter("city", FilterOperator.Contains, sValue);

                var oCombinedFilter = new Filter({
                    filters: [oFilterName, oFilterCity],
                    and: false
                });

                aFilters.push(oCombinedFilter);
            }

            oBinding.filter(aFilters);
        }

    });
});
