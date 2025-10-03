import { PluggableTypeEnum } from '../enums';
export declare enum OperatorEnum {
    AdditiveInverse = "AdditiveInverse",
    MultiplicativeInverse = "MultiplicativeInverse",
    SquareRoot = "SquareRoot",
    Floor = "Floor",
    Ceil = "Ceil",
    Round = "Round",
    Not = "Not"
}
export declare const OperatorToArgumentType: {
    readonly AdditiveInverse: readonly [PluggableTypeEnum.Numeric];
    readonly MultiplicativeInverse: readonly [PluggableTypeEnum.Numeric];
    readonly SquareRoot: readonly [PluggableTypeEnum.Numeric];
    readonly Floor: readonly [PluggableTypeEnum.Numeric];
    readonly Ceil: readonly [PluggableTypeEnum.Numeric];
    readonly Round: readonly [PluggableTypeEnum.Numeric];
    readonly Not: readonly [PluggableTypeEnum.Boolean];
};
export declare const OperatorToResultType: {
    readonly AdditiveInverse: PluggableTypeEnum.Numeric;
    readonly MultiplicativeInverse: PluggableTypeEnum.Numeric;
    readonly SquareRoot: PluggableTypeEnum.Numeric;
    readonly Floor: PluggableTypeEnum.Numeric;
    readonly Ceil: PluggableTypeEnum.Numeric;
    readonly Round: PluggableTypeEnum.Numeric;
    readonly Not: PluggableTypeEnum.Boolean;
};
export declare const OperatorToSymbol: {
    readonly AdditiveInverse: "-";
    readonly MultiplicativeInverse: "1/";
    readonly SquareRoot: "√";
    readonly Floor: "⌊⌋";
    readonly Ceil: "⌈⌉";
    readonly Round: "⌊⌉";
    readonly Not: "!";
};
