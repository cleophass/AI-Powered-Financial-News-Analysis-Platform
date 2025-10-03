import { PluggableTypeEnum } from '../enums';

export enum OperatorEnum {
  AdditiveInverse = 'AdditiveInverse',
  MultiplicativeInverse = 'MultiplicativeInverse',
  SquareRoot = 'SquareRoot',
  Floor = 'Floor',
  Ceil = 'Ceil',
  Round = 'Round',
  Not = 'Not',
}

export const OperatorToArgumentType = {
  [OperatorEnum.AdditiveInverse]: [PluggableTypeEnum.Numeric],
  [OperatorEnum.MultiplicativeInverse]: [PluggableTypeEnum.Numeric],
  [OperatorEnum.SquareRoot]: [PluggableTypeEnum.Numeric],
  [OperatorEnum.Floor]: [PluggableTypeEnum.Numeric],
  [OperatorEnum.Ceil]: [PluggableTypeEnum.Numeric],
  [OperatorEnum.Round]: [PluggableTypeEnum.Numeric],
  [OperatorEnum.Not]: [PluggableTypeEnum.Boolean],
} as const;

export const OperatorToResultType = {
  [OperatorEnum.AdditiveInverse]: PluggableTypeEnum.Numeric,
  [OperatorEnum.MultiplicativeInverse]: PluggableTypeEnum.Numeric,
  [OperatorEnum.SquareRoot]: PluggableTypeEnum.Numeric,
  [OperatorEnum.Floor]: PluggableTypeEnum.Numeric,
  [OperatorEnum.Ceil]: PluggableTypeEnum.Numeric,
  [OperatorEnum.Round]: PluggableTypeEnum.Numeric,
  [OperatorEnum.Not]: PluggableTypeEnum.Boolean,
} as const;

export const OperatorToSymbol = {
  [OperatorEnum.AdditiveInverse]: '-',
  [OperatorEnum.MultiplicativeInverse]: '1/',
  [OperatorEnum.SquareRoot]: '√',
  [OperatorEnum.Floor]: '⌊⌋',
  [OperatorEnum.Ceil]: '⌈⌉',
  [OperatorEnum.Round]: '⌊⌉',
  [OperatorEnum.Not]: '!',
} as const;
