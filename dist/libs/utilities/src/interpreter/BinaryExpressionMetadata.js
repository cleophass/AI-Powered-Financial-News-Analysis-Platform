"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorToSymbol = exports.OperatorToResultType = exports.OperatorToArgumentType = exports.OperatorEnum = void 0;
const enums_1 = require("../enums");
var OperatorEnum;
(function (OperatorEnum) {
    OperatorEnum["Addition"] = "Addition";
    OperatorEnum["Subtraction"] = "Subtraction";
    OperatorEnum["Multiplication"] = "Multiplication";
    OperatorEnum["Division"] = "Division";
    OperatorEnum["WholeDivision"] = "WholeDivision";
    OperatorEnum["Modulo"] = "Modulo";
    OperatorEnum["Percent"] = "Percent";
    OperatorEnum["Exponentiation"] = "Exponentiation";
    OperatorEnum["Minimum"] = "Minimum";
    OperatorEnum["Maximum"] = "Maximum";
    OperatorEnum["Mean"] = "Mean";
    OperatorEnum["GreaterThan"] = "GreaterThan";
    OperatorEnum["GreaterThanEqual"] = "GreaterThanEqual";
    OperatorEnum["LessThan"] = "LessThan";
    OperatorEnum["LessThanEqual"] = "LessThanEqual";
    OperatorEnum["Equal"] = "Equal";
    OperatorEnum["NotEqual"] = "NotEqual";
    OperatorEnum["And"] = "And";
    OperatorEnum["Or"] = "Or";
})(OperatorEnum || (exports.OperatorEnum = OperatorEnum = {}));
exports.OperatorToArgumentType = {
    [OperatorEnum.Addition]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Subtraction]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Multiplication]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Division]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.WholeDivision]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Modulo]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Percent]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Exponentiation]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Minimum]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Maximum]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Mean]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.GreaterThan]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.GreaterThanEqual]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.LessThan]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.LessThanEqual]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Equal]: [enums_1.PluggableTypeEnum.Numeric, enums_1.PluggableTypeEnum.String],
    [OperatorEnum.NotEqual]: [enums_1.PluggableTypeEnum.Numeric, enums_1.PluggableTypeEnum.String],
    [OperatorEnum.And]: [enums_1.PluggableTypeEnum.Boolean],
    [OperatorEnum.Or]: [enums_1.PluggableTypeEnum.Boolean],
};
exports.OperatorToResultType = {
    [OperatorEnum.Addition]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Subtraction]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Multiplication]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Division]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.WholeDivision]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Modulo]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Percent]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Exponentiation]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Minimum]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Maximum]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Mean]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.GreaterThan]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.GreaterThanEqual]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.LessThan]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.LessThanEqual]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.Equal]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.NotEqual]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.And]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.Or]: enums_1.PluggableTypeEnum.Boolean,
};
exports.OperatorToSymbol = {
    [OperatorEnum.Addition]: '+',
    [OperatorEnum.Subtraction]: '-',
    [OperatorEnum.Multiplication]: '*',
    [OperatorEnum.Division]: '/',
    [OperatorEnum.WholeDivision]: '//',
    [OperatorEnum.Modulo]: '%',
    [OperatorEnum.Percent]: '%',
    [OperatorEnum.Exponentiation]: '**',
    [OperatorEnum.Minimum]: 'min',
    [OperatorEnum.Maximum]: 'max',
    [OperatorEnum.Mean]: 'mean',
    [OperatorEnum.GreaterThan]: '>',
    [OperatorEnum.GreaterThanEqual]: '>=',
    [OperatorEnum.LessThan]: '<',
    [OperatorEnum.LessThanEqual]: '<=',
    [OperatorEnum.Equal]: '==',
    [OperatorEnum.NotEqual]: '!=',
    [OperatorEnum.And]: '&&',
    [OperatorEnum.Or]: '||',
};
//# sourceMappingURL=BinaryExpressionMetadata.js.map