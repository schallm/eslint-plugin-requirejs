/**
 * @fileoverview Tests for `no-assign-require` rule
 * @author Casey Visco <cvisco@gmail.com>
 */

"use strict";

const RuleTester = require("eslint").RuleTester;
const fixtures = require("../../fixtures");
const rule = require("../../../lib/rules/no-assign-require");

const MESSAGE = "Invalid assignment to `require`.";

const ruleTester = new RuleTester();

ruleTester.run("no-assign-require", rule, {

    valid: [
        fixtures.ASSIGN_TO_FOO_REQUIRE
    ],

    invalid: [
        { code: fixtures.DECLARE_REQUIRE, errors: [{ message: MESSAGE, type: "VariableDeclarator" }] },
        { code: fixtures.ASSIGN_TO_REQUIRE, errors: [{ message: MESSAGE, type: "AssignmentExpression" }] },
        { code: fixtures.ASSIGN_TO_WINDOW_REQUIRE, errors: [{ message: MESSAGE, type: "AssignmentExpression" }] }
    ]

});
