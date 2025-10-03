import { PluggableTypeEnum, StrategyParameterEnum } from '../enums';

export import ParametersEnum = StrategyParameterEnum;

export const StrategyInputToResultType = {
  [StrategyParameterEnum.Quote]: PluggableTypeEnum.String,
  [StrategyParameterEnum.Base]: PluggableTypeEnum.String,
  [StrategyParameterEnum.Broker]: PluggableTypeEnum.String,
  [StrategyParameterEnum.QuoteBudget]: PluggableTypeEnum.Numeric,
  [StrategyParameterEnum.BaseBudget]: PluggableTypeEnum.Numeric,
} as const;
