import { Observable } from "rxjs";
import { Struct } from "../../../google/protobuf/struct";
export interface OrderFee {
    asset: string;
    amount: number;
}
export interface OrderResponse {
    id: string;
    userId: string;
    orderId?: string | undefined;
    strategyId: string;
    flowId: string;
    broker: string;
    base: string;
    quote: string;
    type: string;
    isPaper: boolean;
    side: string;
    status: string;
    inOrderBook: boolean;
    volumeTraded: number;
    quoteVolumeTraded: number;
    volume?: number | undefined;
    quoteVolume?: number | undefined;
    displayVolume?: number | undefined;
    timeInForce?: string | undefined;
    limitPrice?: number | undefined;
    triggerPrice?: number | undefined;
    trailingDelta?: number | undefined;
    createdAt: Date | undefined;
    pendingAt?: Date | undefined;
    openedAt?: Date | undefined;
    closedAt?: Date | undefined;
    canceledAt?: Date | undefined;
    rejectedAt?: Date | undefined;
    errorCode?: string | undefined;
    errorMessage?: string | undefined;
    fees: OrderFee[];
}
export interface OrdersListResponse {
    orders: OrderResponse[];
}
export interface DeleteOrderResponse {
    id: string;
}
export interface CreateOrder {
    base: string;
    quote: string;
    side: string;
    type: string;
    volume?: number | undefined;
    quoteVolume?: number | undefined;
    displayVolume?: number | undefined;
    timeInForce?: string | undefined;
    limitPrice?: number | undefined;
    trailingDelta?: number | undefined;
    triggerPrice?: number | undefined;
}
export interface CreateOrdersRequest {
    userId: string;
    strategyId: string;
    flowId: string;
    expireAt: Date | undefined;
    isPaper: boolean;
    broker: string;
    orders: CreateOrder[];
}
export interface CancelAllOrdersByStrategyIdRequest {
    userId: string;
    strategyId: string;
    broker: string;
}
export interface OrderByIdRequest {
    id: string;
    userId: string;
}
export interface ListOrdersByStrategyIdRequest {
    strategyId: string;
    userId: string;
    status?: string | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
}
export interface ListOrdersByUserIdRequest {
    userId: string;
    status?: string | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
}
export interface CandleRequest {
    base: string;
    quote: string;
    broker: string;
    openTime: Date | undefined;
    closeTime: Date | undefined;
    high: number;
    low: number;
    isPaper?: boolean | undefined;
}
export interface ExtractHasOpenedOrdersRequest {
    strategyIds: string[];
}
export interface ExtractHasOpenedOrdersResponse {
    strategyIds: string[];
    base: string;
    quote: string;
    broker: string;
}
export interface GetBudgetImpactRequest {
    userId: string;
    strategyId: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
}
export interface GetBudgetImpactByFrequencyRequest {
    userId: string;
    strategyId: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    frequency: string;
}
export interface ListBudgetsImpactsRequest {
    budgets: GetBudgetImpactRequest[];
    tradeableAssetsOnly: boolean;
}
export interface GetProfitsAndLossesRequest {
    userId: string;
    strategyId: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    frequency: string;
}
export interface UpdateOrderRequest {
    id: string;
    userId: string;
    status: string;
    date: Date | undefined;
    orderId?: string | undefined;
    volumeTraded?: number | undefined;
    quoteVolumeTraded?: number | undefined;
    inOrderBook?: boolean | undefined;
    errorCode?: string | undefined;
    errorMessage?: string | undefined;
}
export interface UpdateOrdersBulkRequest {
    orders: UpdateOrderRequest[];
}
export interface OrdersClient {
    createOrders(request: CreateOrdersRequest): Observable<OrdersListResponse>;
    cancelAllOrdersByStrategyId(request: CancelAllOrdersByStrategyIdRequest): Observable<OrdersListResponse>;
    getOrderById(request: OrderByIdRequest): Observable<OrderResponse>;
    listOrdersByStrategyId(request: ListOrdersByStrategyIdRequest): Observable<OrdersListResponse>;
    listOrdersByUserId(request: ListOrdersByUserIdRequest): Observable<OrdersListResponse>;
    listPendingOrdersTriggeredByCandle(request: CandleRequest): Observable<OrdersListResponse>;
    extractHasOpenedOrders(request: ExtractHasOpenedOrdersRequest): Observable<ExtractHasOpenedOrdersResponse>;
    getBudgetImpact(request: GetBudgetImpactRequest): Observable<Struct>;
    getBudgetImpactByFrequency(request: GetBudgetImpactByFrequencyRequest): Observable<Struct>;
    listBudgetsImpacts(request: ListBudgetsImpactsRequest): Observable<Struct>;
    getProfitsAndLosses(request: GetProfitsAndLossesRequest): Observable<Struct>;
    updateOrder(request: UpdateOrderRequest): Observable<OrderResponse>;
    updateOrdersBulk(request: UpdateOrdersBulkRequest): Observable<OrdersListResponse>;
}
export interface OrdersController {
    createOrders(request: CreateOrdersRequest): Promise<OrdersListResponse> | Observable<OrdersListResponse> | OrdersListResponse;
    cancelAllOrdersByStrategyId(request: CancelAllOrdersByStrategyIdRequest): Promise<OrdersListResponse> | Observable<OrdersListResponse> | OrdersListResponse;
    getOrderById(request: OrderByIdRequest): Promise<OrderResponse> | Observable<OrderResponse> | OrderResponse;
    listOrdersByStrategyId(request: ListOrdersByStrategyIdRequest): Promise<OrdersListResponse> | Observable<OrdersListResponse> | OrdersListResponse;
    listOrdersByUserId(request: ListOrdersByUserIdRequest): Promise<OrdersListResponse> | Observable<OrdersListResponse> | OrdersListResponse;
    listPendingOrdersTriggeredByCandle(request: CandleRequest): Promise<OrdersListResponse> | Observable<OrdersListResponse> | OrdersListResponse;
    extractHasOpenedOrders(request: ExtractHasOpenedOrdersRequest): Promise<ExtractHasOpenedOrdersResponse> | Observable<ExtractHasOpenedOrdersResponse> | ExtractHasOpenedOrdersResponse;
    getBudgetImpact(request: GetBudgetImpactRequest): Promise<Struct> | Observable<Struct> | Struct;
    getBudgetImpactByFrequency(request: GetBudgetImpactByFrequencyRequest): Promise<Struct> | Observable<Struct> | Struct;
    listBudgetsImpacts(request: ListBudgetsImpactsRequest): Promise<Struct> | Observable<Struct> | Struct;
    getProfitsAndLosses(request: GetProfitsAndLossesRequest): Promise<Struct> | Observable<Struct> | Struct;
    updateOrder(request: UpdateOrderRequest): Promise<OrderResponse> | Observable<OrderResponse> | OrderResponse;
    updateOrdersBulk(request: UpdateOrdersBulkRequest): Promise<OrdersListResponse> | Observable<OrdersListResponse> | OrdersListResponse;
}
export declare function OrdersControllerMethods(): (constructor: Function) => void;
export declare const ORDERS_SERVICE_NAME = "Orders";
