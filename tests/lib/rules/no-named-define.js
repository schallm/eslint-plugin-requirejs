/**
 * @file    Tests for `no-named-define` rule
 * @author  Casey Visco <cvisco@gmail.com>
 */

"use strict";

const testRule = require("../../rule-tester");
const fixtures = require("../../fixtures");
const rule = require("../../../lib/rules/no-named-define");

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ERROR = {
    message: "Named module form of `define` is not allowed",
    type: "CallExpression"
};

testRule("no-named-define", rule, {

    valid: [
        fixtures.OBJECT_DEFINE,
        fixtures.FUNCTION_DEFINE,
        fixtures.CJS_WITH_RETURN,
        fixtures.CJS_WITH_EXPORTS,
        fixtures.CJS_WITH_MODULE_EXPORTS,
        fixtures.AMD_DEFINE,
        fixtures.AMD_EMPTY_DEFINE
    ],

    invalid: [
        { code: fixtures.NAMED_OBJECT_DEFINE, errors: [ERROR] },
        { code: fixtures.NAMED_FUNCTION_DEFINE, errors: [ERROR] },
        { code: fixtures.NAMED_AMD_DEFINE, errors: [ERROR] },
        { code: fixtures.NAMED_AMD_EMPTY_DEFINE, errors: [ERROR] },
        { code: fixtures.NAMED_CJS_DEFINE, errors: [ERROR] }
    ]

});
