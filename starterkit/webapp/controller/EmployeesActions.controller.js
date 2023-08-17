sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.EmployeesActions", {
            formatter: formatter,
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter
                  .getRoute("EmployeesActions")
            },
            onMotivate: function (oEvent) {
                
            var oEmployee = oEvent.getSource().getBindingContext().getObject();
            var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@gmail.com"
            var sSubject = "Good job!";
            var sBody = "You are doing well, thank you!"
            sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody)
            },
            onFire: function (oEvent) { 
                
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@gmail.com"
                var sSubject = "You are fired"
                debugger
               var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("evilinsult/generate_insult.php",{             
                        lang: "en",
                        type: "json",
                     }).then(function () {
                        var sBody = oModel.getData().insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                )   
            }
        });
        
    });
