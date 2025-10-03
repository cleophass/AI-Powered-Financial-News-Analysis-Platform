import type { BrokerEnum } from '../enums';
import type { Pair } from './pair.type';
export interface PairBroker extends Pair {
    broker: BrokerEnum;
}
