"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyInputToResultType = exports.ParametersEnum = void 0;
const enums_1 = require("../enums");
exports.ParametersEnum = enums_1.StrategyParameterEnum;
exports.StrategyInputToResultType = {
    [enums_1.StrategyParameterEnum.Quote]: enums_1.PluggableTypeEnum.String,
    [enums_1.StrategyParameterEnum.Base]: enums_1.PluggableTypeEnum.String,
    [enums_1.StrategyParameterEnum.Broker]: enums_1.PluggableTypeEnum.String,
    [enums_1.StrategyParameterEnum.QuoteBudget]: enums_1.PluggableTypeEnum.Numeric,
    [enums_1.StrategyParameterEnum.BaseBudget]: enums_1.PluggableTypeEnum.Numeric,
};
//# sourceMappingURL=StrategyInputMetadata.js.map