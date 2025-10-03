"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorToResultType = exports.IndicatorEnum = void 0;
const enums_1 = require("../enums");
exports.IndicatorEnum = enums_1.IndicatorEnum;
exports.IndicatorToResultType = {
    [exports.IndicatorEnum.SMA]: { sma: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.EMA]: { ema: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.RSI]: { rsi: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.MACD]: { macd: enums_1.PluggableTypeEnum.Numeric, signal: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.BollingerBands]: {
        upper: enums_1.PluggableTypeEnum.Numeric,
        lower: enums_1.PluggableTypeEnum.Numeric,
        middle: enums_1.PluggableTypeEnum.Numeric,
    },
    [exports.IndicatorEnum.ATR]: { atr: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.Hype]: { hype: enums_1.PluggableTypeEnum.Numeric },
};
//# sourceMappingURL=IndicatorInputMetadata.js.map