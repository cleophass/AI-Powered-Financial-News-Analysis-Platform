import { PluggableTypeEnum, StrategyParameterEnum } from '../enums';
export import ParametersEnum = StrategyParameterEnum;
export declare const StrategyInputToResultType: {
    readonly quote: PluggableTypeEnum.String;
    readonly base: PluggableTypeEnum.String;
    readonly broker: PluggableTypeEnum.String;
    readonly quoteBudget: PluggableTypeEnum.Numeric;
    readonly baseBudget: PluggableTypeEnum.Numeric;
};
