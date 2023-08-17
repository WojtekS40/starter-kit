sap.ui.define([
    "stk/starterkit/model/formatter"
], function (formatter){
    "use strict";

    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions) {
        // Act
        var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);

        //Assert
        oOptions.assert.strictEqual(sName, oOptions.expected, "The name was correctly formatted: " + sName);
    }

    QUnit.test("Should format 'Wojciech Borowski' to 'W. Borowski'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Wojciech",
            lastName: "Borowski",
            expected: "W. Borowski"
        });
    });

    QUnit.test("Should format 'Wojciech Borowski' to 'W. Borowski'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Wojciech",
            lastName: "Borowski-Nowak",
            expected: "W. Borowski"
        });
    });
}
)