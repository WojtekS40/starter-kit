sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "Master";
	
	Opa5.createPageObjects({
		onTheCustomersList: {

			actions: {},

			assertions: {

				iShouldSeeThePageView: function () {
					return this.waitFor({
						id: "page",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},
				iShouldSeeTheCarousel: function () {
					return this.waitFor({
						id: "customersCarousel",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The carousel is displayed");
						},
						errorMessage: "Did not find the carousel"
					});
				}
			}
		}
	});

});
