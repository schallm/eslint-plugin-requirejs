/**
 * @file    Tests for `amd-function-arity` rule
 * @author  Kevin Partington
 */

"use strict";

const testRule = require("../../rule-tester");
const fixtures = require("../../fixtures");
const rule = require("../../../lib/rules/amd-function-arity");

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

function tooManyParams(expected, actual) {
    return {
        message: `Too many parameters in callback (expected ${expected}, found ${actual}).`
    };
}

function tooFewParams(expected, actual) {
    return {
        message: `Not enough parameters in callback (expected ${expected}, found ${actual}).`
    };
}

testRule("amd-function-arity", rule, {

    valid: [
        // Dependency count and parameter counts equal-- always valid
        fixtures.AMD_DEFINE,
        fixtures.AMD_EMPTY_DEFINE,
        fixtures.AMD_EMPTY_REQUIRE,
        fixtures.AMD_EMPTY_REQUIREJS,
        fixtures.AMD_REQUIRE,
        fixtures.AMD_REQUIRE_WITH_ERRBACK,
        fixtures.AMD_REQUIREJS,
        fixtures.AMD_REQUIREJS_WITH_ERRBACK,
        fixtures.NAMED_AMD_DEFINE,
        fixtures.NAMED_AMD_EMPTY_DEFINE,
        fixtures.DYNAMIC_AMD_REQUIRE_WITH_ERRBACK,
        fixtures.DYNAMIC_AMD_REQUIREJS_WITH_ERRBACK,
        fixtures.DYNAMIC_MIXED_AMD_REQUIRE,
        fixtures.DYNAMIC_MIXED_AMD_REQUIREJS,

        // Valid because dependency array arity is unknowable
        fixtures.DYNAMIC_VARIABLE_AMD_DEFINE,
        fixtures.DYNAMIC_VARIABLE_AMD_NAMED_DEFINE,
        fixtures.DYNAMIC_VARIABLE_AMD_REQUIRE,

        // Valid only if allowExtraDependencies is enabled
        {
            code: fixtures.AMD_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_NAMED_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: true }]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: true }]
        },

        // Valid only if allowedExtraDependencies are specified
        {
            code: fixtures.AMD_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["b"] }]
        },
        {
            code: fixtures.AMD_NAMED_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["b"] }]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["b"] }]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["b"] }]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: ["b"] }]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: ["b"] }]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["a"] }]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["a"] }]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: ["a"] }]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: ["a"] }]
        }
    ],

    invalid: [
        // Too few dependencies (invalid even with allowExtraDependencies option)
        {
            code: fixtures.AMD_DEFINE_TOO_MANY_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(2, 3)]
        },
        {
            code: fixtures.AMD_NAMED_DEFINE_TOO_MANY_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(2, 3)]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_MANY_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(2, 3)]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_MANY_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(2, 3)]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_MANY_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(2, 3)]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_MANY_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(2, 3)]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_MANY_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(1, 2)]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_MANY_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(1, 2)]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_MANY_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(1, 2)]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_MANY_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: true }],
            errors: [tooManyParams(1, 2)]
        },

        // Extra dependencies (invalid since option not specified)
        {
            code: fixtures.AMD_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_NAMED_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS,
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS,
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            errors: [tooFewParams(1, 0)]
        },

        // Extra dependencies (invalid since option set to false)
        {
            code: fixtures.AMD_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_NAMED_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: false }],
            errors: [tooFewParams(1, 0)]
        },

        // Extra dependencies (invalid since allowed paths are not the extra dependencies)
        {
            code: fixtures.AMD_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_NAMED_DEFINE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIREJS_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(2, 1)]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIRE_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(1, 0)]
        },
        {
            code: fixtures.AMD_REQUIREJS_SINGLEDEP_TOO_FEW_CALLBACK_PARAMS_WITH_ERRBACK,
            options: [{ allowExtraDependencies: ["x", "y"] }],
            errors: [tooFewParams(1, 0)]
        }
    ]

});
