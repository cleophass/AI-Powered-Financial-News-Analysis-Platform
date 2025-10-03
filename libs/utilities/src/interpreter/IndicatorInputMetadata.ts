import { PluggableTypeEnum, IndicatorEnum as UtilitiesIndicatorEnum } from '../enums';

export import IndicatorEnum = UtilitiesIndicatorEnum;

export const IndicatorToResultType = {
  [IndicatorEnum.SMA]: { sma: PluggableTypeEnum.Numeric },
  [IndicatorEnum.EMA]: { ema: PluggableTypeEnum.Numeric },
  [IndicatorEnum.RSI]: { rsi: PluggableTypeEnum.Numeric },
  [IndicatorEnum.MACD]: { macd: PluggableTypeEnum.Numeric, signal: PluggableTypeEnum.Numeric },
  [IndicatorEnum.BollingerBands]: {
    upper: PluggableTypeEnum.Numeric,
    lower: PluggableTypeEnum.Numeric,
    middle: PluggableTypeEnum.Numeric,
  },
  [IndicatorEnum.ATR]: { atr: PluggableTypeEnum.Numeric },
  [IndicatorEnum.Hype]: { hype: PluggableTypeEnum.Numeric },
} as const;
