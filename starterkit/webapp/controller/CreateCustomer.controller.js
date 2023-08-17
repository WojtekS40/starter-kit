sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
      "use strict";
  
      return Controller.extend("stk.HTML5Module.controller.CreateCustomer", {
        onInit: function () {

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter
              .getRoute("CreateCustomer")
        },
        onCreateButtonPress () {
          var sId = this.byId("CustomerID").getValue();
          var sName = this.byId("CustomerName").getValue();

          this.getView().getModel().create("/Customers", {
            CustomerID: sId,
            CompanyName: sName
          })
        }
  
        
      });
    }
  );