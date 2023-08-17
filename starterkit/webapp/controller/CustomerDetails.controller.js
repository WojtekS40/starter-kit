sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
    "sap/ui/core/Fragment",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Formatter, Fragment) {
    "use strict";

    return Controller.extend("ns.HTML5Module.controller.CustomerDetails", {
      formatter: Formatter,

      onInit: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter
          .getRoute("CustomerDetails")
          .attachPatternMatched(this._onPatternMatched, this);
      },

      _onPatternMatched: function (oEvent) {
        this.getView().bindElement({
          path:
            "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
          parameters: {
            expand: "Orders, Orders/Order_Details, Orders/Employee",
          },
        });
      },
      formatEmployeeName: function (FirstName, LastName) {
        return FirstName + " " + LastName;
      },

      ConInfBtn: function () {
        // create dialog lazily
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "stk.starterkit.view.ContactInfoDialog",
          });
        }

        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },

      onCloseDialog: function () {
        // note: We don't need to chain to the pDialog promise, since this event-handler
        // is only called from within the loaded dialog itself.
        this.byId("contactDialog").close();
      },
    });
  }
);
