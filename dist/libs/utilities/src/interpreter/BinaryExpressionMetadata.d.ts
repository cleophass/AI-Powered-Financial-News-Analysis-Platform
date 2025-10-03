import { PluggableTypeEnum } from '../enums';
export declare enum OperatorEnum {
    Addition = "Addition",
    Subtraction = "Subtraction",
    Multiplication = "Multiplication",
    Division = "Division",
    WholeDivision = "WholeDivision",
    Modulo = "Modulo",
    Percent = "Percent",
    Exponentiation = "Exponentiation",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Mean = "Mean",
    GreaterThan = "GreaterThan",
    GreaterThanEqual = "GreaterThanEqual",
    LessThan = "LessThan",
    LessThanEqual = "LessThanEqual",
    Equal = "Equal",
    NotEqual = "NotEqual",
    And = "And",
    Or = "Or"
}
export declare const OperatorToArgumentType: {
    readonly Addition: readonly [PluggableTypeEnum.Numeric];
    readonly Subtraction: readonly [PluggableTypeEnum.Numeric];
    readonly Multiplication: readonly [PluggableTypeEnum.Numeric];
    readonly Division: readonly [PluggableTypeEnum.Numeric];
    readonly WholeDivision: readonly [PluggableTypeEnum.Numeric];
    readonly Modulo: readonly [PluggableTypeEnum.Numeric];
    readonly Percent: readonly [PluggableTypeEnum.Numeric];
    readonly Exponentiation: readonly [PluggableTypeEnum.Numeric];
    readonly Minimum: readonly [PluggableTypeEnum.Numeric];
    readonly Maximum: readonly [PluggableTypeEnum.Numeric];
    readonly Mean: readonly [PluggableTypeEnum.Numeric];
    readonly GreaterThan: readonly [PluggableTypeEnum.Numeric];
    readonly GreaterThanEqual: readonly [PluggableTypeEnum.Numeric];
    readonly LessThan: readonly [PluggableTypeEnum.Numeric];
    readonly LessThanEqual: readonly [PluggableTypeEnum.Numeric];
    readonly Equal: readonly [PluggableTypeEnum.Numeric, PluggableTypeEnum.String];
    readonly NotEqual: readonly [PluggableTypeEnum.Numeric, PluggableTypeEnum.String];
    readonly And: readonly [PluggableTypeEnum.Boolean];
    readonly Or: readonly [PluggableTypeEnum.Boolean];
};
export declare const OperatorToResultType: {
    readonly Addition: PluggableTypeEnum.Numeric;
    readonly Subtraction: PluggableTypeEnum.Numeric;
    readonly Multiplication: PluggableTypeEnum.Numeric;
    readonly Division: PluggableTypeEnum.Numeric;
    readonly WholeDivision: PluggableTypeEnum.Numeric;
    readonly Modulo: PluggableTypeEnum.Numeric;
    readonly Percent: PluggableTypeEnum.Numeric;
    readonly Exponentiation: PluggableTypeEnum.Numeric;
    readonly Minimum: PluggableTypeEnum.Numeric;
    readonly Maximum: PluggableTypeEnum.Numeric;
    readonly Mean: PluggableTypeEnum.Numeric;
    readonly GreaterThan: PluggableTypeEnum.Boolean;
    readonly GreaterThanEqual: PluggableTypeEnum.Boolean;
    readonly LessThan: PluggableTypeEnum.Boolean;
    readonly LessThanEqual: PluggableTypeEnum.Boolean;
    readonly Equal: PluggableTypeEnum.Boolean;
    readonly NotEqual: PluggableTypeEnum.Boolean;
    readonly And: PluggableTypeEnum.Boolean;
    readonly Or: PluggableTypeEnum.Boolean;
};
export declare const OperatorToSymbol: {
    readonly Addition: "+";
    readonly Subtraction: "-";
    readonly Multiplication: "*";
    readonly Division: "/";
    readonly WholeDivision: "//";
    readonly Modulo: "%";
    readonly Percent: "%";
    readonly Exponentiation: "**";
    readonly Minimum: "min";
    readonly Maximum: "max";
    readonly Mean: "mean";
    readonly GreaterThan: ">";
    readonly GreaterThanEqual: ">=";
    readonly LessThan: "<";
    readonly LessThanEqual: "<=";
    readonly Equal: "==";
    readonly NotEqual: "!=";
    readonly And: "&&";
    readonly Or: "||";
};
