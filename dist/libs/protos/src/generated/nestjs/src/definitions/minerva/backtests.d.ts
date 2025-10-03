import { Observable } from "rxjs";
export interface BacktestResponse {
    id: string;
    startDate: Date | undefined;
    baseBudget: number;
    frequency: string;
    runIfOrdersActive: boolean;
    base: string;
    quote: string;
    broker: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    finishedAt?: Date | undefined;
    isFinished: boolean;
    trades: {
        [key: string]: any;
    }[];
    errors: {
        [key: string]: any;
    }[];
    metrics: {
        [key: string]: any;
    } | undefined;
}
export interface BacktestsListResponse {
    backtests: BacktestResponse[];
}
export interface BacktestByIdRequest {
    userId: string;
    id: string;
}
export interface BacktestsByFlowIdRequest {
    userId: string;
    flowId: string;
}
export interface BacktestsByStrategyIdRequest {
    userId: string;
    strategyId: string;
}
export interface BacktestsByUserIdRequest {
    userId: string;
}
export interface CreateBacktestRequest {
    userId: string;
    flowId: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    baseBudget: number;
    frequency: string;
    runIfOrdersActive: boolean;
    base: string;
    quote: string;
    broker: string;
}
export interface UpdateBacktestRequest {
    id: string;
    userId: string;
    finishedAt: Date | undefined;
    trades: {
        [key: string]: any;
    }[];
    errors: {
        [key: string]: any;
    }[];
    metrics: {
        [key: string]: any;
    } | undefined;
}
export interface BacktestsClient {
    createBacktest(request: CreateBacktestRequest): Observable<BacktestResponse>;
    updateBacktest(request: UpdateBacktestRequest): Observable<BacktestResponse>;
    getBacktestById(request: BacktestByIdRequest): Observable<BacktestResponse>;
    listBacktestsByFlowId(request: BacktestsByFlowIdRequest): Observable<BacktestsListResponse>;
    listBacktestsByStrategyId(request: BacktestsByStrategyIdRequest): Observable<BacktestsListResponse>;
    listBacktestsByUserId(request: BacktestsByUserIdRequest): Observable<BacktestsListResponse>;
}
export interface BacktestsController {
    createBacktest(request: CreateBacktestRequest): Promise<BacktestResponse> | Observable<BacktestResponse> | BacktestResponse;
    updateBacktest(request: UpdateBacktestRequest): Promise<BacktestResponse> | Observable<BacktestResponse> | BacktestResponse;
    getBacktestById(request: BacktestByIdRequest): Promise<BacktestResponse> | Observable<BacktestResponse> | BacktestResponse;
    listBacktestsByFlowId(request: BacktestsByFlowIdRequest): Promise<BacktestsListResponse> | Observable<BacktestsListResponse> | BacktestsListResponse;
    listBacktestsByStrategyId(request: BacktestsByStrategyIdRequest): Promise<BacktestsListResponse> | Observable<BacktestsListResponse> | BacktestsListResponse;
    listBacktestsByUserId(request: BacktestsByUserIdRequest): Promise<BacktestsListResponse> | Observable<BacktestsListResponse> | BacktestsListResponse;
}
export declare function BacktestsControllerMethods(): (constructor: Function) => void;
export declare const BACKTESTS_SERVICE_NAME = "Backtests";
