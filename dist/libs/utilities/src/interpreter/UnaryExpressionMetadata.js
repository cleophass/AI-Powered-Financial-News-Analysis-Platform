"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorToSymbol = exports.OperatorToResultType = exports.OperatorToArgumentType = exports.OperatorEnum = void 0;
const enums_1 = require("../enums");
var OperatorEnum;
(function (OperatorEnum) {
    OperatorEnum["AdditiveInverse"] = "AdditiveInverse";
    OperatorEnum["MultiplicativeInverse"] = "MultiplicativeInverse";
    OperatorEnum["SquareRoot"] = "SquareRoot";
    OperatorEnum["Floor"] = "Floor";
    OperatorEnum["Ceil"] = "Ceil";
    OperatorEnum["Round"] = "Round";
    OperatorEnum["Not"] = "Not";
})(OperatorEnum || (exports.OperatorEnum = OperatorEnum = {}));
exports.OperatorToArgumentType = {
    [OperatorEnum.AdditiveInverse]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.MultiplicativeInverse]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.SquareRoot]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Floor]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Ceil]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Round]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Not]: [enums_1.PluggableTypeEnum.Boolean],
};
exports.OperatorToResultType = {
    [OperatorEnum.AdditiveInverse]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.MultiplicativeInverse]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.SquareRoot]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Floor]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Ceil]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Round]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Not]: enums_1.PluggableTypeEnum.Boolean,
};
exports.OperatorToSymbol = {
    [OperatorEnum.AdditiveInverse]: '-',
    [OperatorEnum.MultiplicativeInverse]: '1/',
    [OperatorEnum.SquareRoot]: '√',
    [OperatorEnum.Floor]: '⌊⌋',
    [OperatorEnum.Ceil]: '⌈⌉',
    [OperatorEnum.Round]: '⌊⌉',
    [OperatorEnum.Not]: '!',
};
//# sourceMappingURL=UnaryExpressionMetadata.js.map