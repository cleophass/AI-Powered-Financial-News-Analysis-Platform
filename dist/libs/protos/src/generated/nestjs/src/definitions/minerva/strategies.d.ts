import { Observable } from "rxjs";
import { Empty } from "../../../google/protobuf/empty";
export interface PairBroker {
    base: string;
    quote: string;
    broker: string;
}
export interface PairRatio {
    base: string;
    quote: string;
    broker: string;
    quoteRatio: number;
    baseRatio: number;
}
export interface RRuleOptions {
    frequency: number;
    interval: number;
    dtstart: Date | undefined;
    /** protolint:disable REPEATED_FIELD_NAMES_PLURALIZED */
    bysetpos: number[];
    bymonth: number[];
    bymonthday: number[];
    byyearday: number[];
    byweekno: number[];
    byweekday: number[];
    byhour: number[];
    /** protolint:enable REPEATED_FIELD_NAMES_PLURALIZED */
    byminute: number[];
}
export interface StrategyResponse {
    id: string;
    userId: string;
    name: string;
    type: string;
    isActive: boolean;
    baseBudget: {
        [key: string]: any;
    } | undefined;
    lastBudgetChange?: Date | undefined;
    recurrence?: RRuleOptions | undefined;
    recurrenceDates: Date[];
    runIfOrdersActive?: boolean | undefined;
    stopIfError?: boolean | undefined;
    maxExecutionDelay?: number | undefined;
    cancelAllOrdersBeforeExecution?: boolean | undefined;
    deployedAt?: Date | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    activePairs: PairRatio[];
    draftPairs: PairBroker[];
}
export interface StrategiesListResponse {
    strategies: StrategyResponse[];
}
export interface StrategiesByUserIdRequest {
    userId: string;
}
export interface StrategyByIdRequest {
    userId: string;
    id: string;
}
export interface CreateStrategyRequest {
    userId: string;
    name: string;
    type: string;
    recurrence: RRuleOptions | undefined;
}
export interface UpdateStrategyRequest {
    id: string;
    userId: string;
    name?: string | undefined;
    type?: string | undefined;
    recurrence?: RRuleOptions | undefined;
    isActive?: boolean | undefined;
    runIfOrdersActive?: boolean | undefined;
    stopIfError?: boolean | undefined;
    maxExecutionDelay?: number | undefined;
    cancelAllOrdersBeforeExecution?: boolean | undefined;
    baseBudget?: {
        [key: string]: any;
    } | undefined;
}
export interface SetStrategyActivePairsRequest {
    id: string;
    userId: string;
    activePairs: PairRatio[];
    clear?: boolean | undefined;
}
export interface SetStrategyDraftPairsRequest {
    id: string;
    userId: string;
    draftPairs: PairBroker[];
    clear?: boolean | undefined;
}
export interface ListActiveStrategiesRequest {
    base: string;
    quote: string;
    broker: string;
    executionDate: Date | undefined;
}
export interface StrategiesClient {
    listStrategiesByUserId(request: StrategiesByUserIdRequest): Observable<StrategiesListResponse>;
    getStrategyById(request: StrategyByIdRequest): Observable<StrategyResponse>;
    createStrategy(request: CreateStrategyRequest): Observable<StrategyResponse>;
    updateStrategy(request: UpdateStrategyRequest): Observable<StrategyResponse>;
    setStrategyActivePairs(request: SetStrategyActivePairsRequest): Observable<StrategyResponse>;
    setStrategyDraftPairs(request: SetStrategyDraftPairsRequest): Observable<StrategyResponse>;
    deleteStrategy(request: StrategyByIdRequest): Observable<Empty>;
    listActiveStrategies(request: ListActiveStrategiesRequest): Observable<StrategiesListResponse>;
}
export interface StrategiesController {
    listStrategiesByUserId(request: StrategiesByUserIdRequest): Promise<StrategiesListResponse> | Observable<StrategiesListResponse> | StrategiesListResponse;
    getStrategyById(request: StrategyByIdRequest): Promise<StrategyResponse> | Observable<StrategyResponse> | StrategyResponse;
    createStrategy(request: CreateStrategyRequest): Promise<StrategyResponse> | Observable<StrategyResponse> | StrategyResponse;
    updateStrategy(request: UpdateStrategyRequest): Promise<StrategyResponse> | Observable<StrategyResponse> | StrategyResponse;
    setStrategyActivePairs(request: SetStrategyActivePairsRequest): Promise<StrategyResponse> | Observable<StrategyResponse> | StrategyResponse;
    setStrategyDraftPairs(request: SetStrategyDraftPairsRequest): Promise<StrategyResponse> | Observable<StrategyResponse> | StrategyResponse;
    deleteStrategy(request: StrategyByIdRequest): void;
    listActiveStrategies(request: ListActiveStrategiesRequest): Promise<StrategiesListResponse> | Observable<StrategiesListResponse> | StrategiesListResponse;
}
export declare function StrategiesControllerMethods(): (constructor: Function) => void;
export declare const STRATEGIES_SERVICE_NAME = "Strategies";
