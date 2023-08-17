sap.ui.define([], function () {
"use-strict"
return {
    formatName: function (sFirstName, sLastName) {
        return sFirstName[0] + ". " + sLastName;
    },
    sumAmount: function(aOrders) {
        
        return aOrders.length;
     }

}


}

)