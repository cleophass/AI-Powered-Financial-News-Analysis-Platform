"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ABACUS_PACKAGE_NAME: function() {
        return ABACUS_PACKAGE_NAME;
    },
    JARVIS_PACKAGE_NAME: function() {
        return JARVIS_PACKAGE_NAME;
    },
    MINERVA_PACKAGE_NAME: function() {
        return MINERVA_PACKAGE_NAME;
    },
    SONAR_PACKAGE_NAME: function() {
        return SONAR_PACKAGE_NAME;
    },
    SPOTLIGHT_PACKAGE_NAME: function() {
        return SPOTLIGHT_PACKAGE_NAME;
    },
    abacusArticlesProtoFile: function() {
        return _articlesproto.default;
    },
    abacusMarketDataProtoFile: function() {
        return _market_dataproto.default;
    },
    jarvisTextToASTProtoFile: function() {
        return _text_to_astproto.default;
    },
    minervaBacktestsProtoFile: function() {
        return _backtestsproto.default;
    },
    minervaExecutionsProtoFile: function() {
        return _executionsproto.default;
    },
    minervaFlowsProtoFile: function() {
        return _flowsproto.default;
    },
    minervaStrategiesProtoFile: function() {
        return _strategiesproto.default;
    },
    sonarApiKeysProtoFile: function() {
        return _api_keysproto.default;
    },
    sonarOrdersProtoFile: function() {
        return _ordersproto.default;
    },
    spotlightFeesProtoFile: function() {
        return _feesproto.default;
    },
    spotlightOrdersProtoFile: function() {
        return _ordersproto1.default;
    }
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _articlesproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/abacus/articles.proto"));
const _market_dataproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/abacus/market_data.proto"));
const _text_to_astproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/jarvis/text_to_ast.proto"));
const _backtestsproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/minerva/backtests.proto"));
const _executionsproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/minerva/executions.proto"));
const _flowsproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/minerva/flows.proto"));
const _strategiesproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/minerva/strategies.proto"));
const _api_keysproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/sonar/api_keys.proto"));
const _ordersproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/sonar/orders.proto"));
const _feesproto = /*#__PURE__*/ _interop_require_default._(require("./definitions/spotlight/fees.proto"));
const _ordersproto1 = /*#__PURE__*/ _interop_require_default._(require("./definitions/spotlight/orders.proto"));
const ABACUS_PACKAGE_NAME = 'abacus';
const MINERVA_PACKAGE_NAME = 'minerva';
const SPOTLIGHT_PACKAGE_NAME = 'spotlight';
const SONAR_PACKAGE_NAME = 'sonar';
const JARVIS_PACKAGE_NAME = 'jarvis';

//# sourceMappingURL=common.js.map