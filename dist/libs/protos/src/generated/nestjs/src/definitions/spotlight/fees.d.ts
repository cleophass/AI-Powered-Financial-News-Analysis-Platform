import { Observable } from "rxjs";
export interface Fee {
    asset: string;
    broker: string;
    amount: number;
}
export interface FeeResponse {
    id: string;
    userId: string;
    orderId?: string | undefined;
    asset: string;
    broker: string;
    amount: number;
}
export interface FeesListResponse {
    fees: FeeResponse[];
}
export interface FeeByIdRequest {
    id: string;
    userId: string;
}
export interface ListFeesByOrderIdRequest {
    userId: string;
    orderId: string;
}
export interface ListFeesByStrategyIdRequest {
    userId: string;
    strategyId: string;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
}
export interface SetOrderFeesRequest {
    userId: string;
    orderId: string;
    fees: Fee[];
}
export interface FeesClient {
    getFeeById(request: FeeByIdRequest): Observable<FeeResponse>;
    listFeesByOrderId(request: ListFeesByOrderIdRequest): Observable<FeesListResponse>;
    listFeesByStrategyId(request: ListFeesByStrategyIdRequest): Observable<FeesListResponse>;
    setOrderFees(request: SetOrderFeesRequest): Observable<FeesListResponse>;
}
export interface FeesController {
    getFeeById(request: FeeByIdRequest): Promise<FeeResponse> | Observable<FeeResponse> | FeeResponse;
    listFeesByOrderId(request: ListFeesByOrderIdRequest): Promise<FeesListResponse> | Observable<FeesListResponse> | FeesListResponse;
    listFeesByStrategyId(request: ListFeesByStrategyIdRequest): Promise<FeesListResponse> | Observable<FeesListResponse> | FeesListResponse;
    setOrderFees(request: SetOrderFeesRequest): Promise<FeesListResponse> | Observable<FeesListResponse> | FeesListResponse;
}
export declare function FeesControllerMethods(): (constructor: Function) => void;
export declare const FEES_SERVICE_NAME = "Fees";
