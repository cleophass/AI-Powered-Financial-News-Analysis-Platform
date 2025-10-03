import { PluggableTypeEnum, IndicatorEnum as UtilitiesIndicatorEnum } from '../enums';
export import IndicatorEnum = UtilitiesIndicatorEnum;
export declare const IndicatorToResultType: {
    readonly SMA: {
        readonly sma: PluggableTypeEnum.Numeric;
    };
    readonly EMA: {
        readonly ema: PluggableTypeEnum.Numeric;
    };
    readonly RSI: {
        readonly rsi: PluggableTypeEnum.Numeric;
    };
    readonly MACD: {
        readonly macd: PluggableTypeEnum.Numeric;
        readonly signal: PluggableTypeEnum.Numeric;
    };
    readonly BollingerBands: {
        readonly upper: PluggableTypeEnum.Numeric;
        readonly lower: PluggableTypeEnum.Numeric;
        readonly middle: PluggableTypeEnum.Numeric;
    };
    readonly ATR: {
        readonly atr: PluggableTypeEnum.Numeric;
    };
    readonly Hype: {
        readonly hype: PluggableTypeEnum.Numeric;
    };
};
