sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/Master"
], function (opaTest) {
    "use strict";
    QUnit.module("Customers List Journey");
    opaTest("Should see the initial page of the app", function (Given, When, Then){
        //Arrangement
        Given.iStartMyApp();

        //Assertions
        Then.onTheCustomersList.iShouldSeeTheCarousel();

        //Cleanup
        Then.iTeardownMyApp();

    });
}
);