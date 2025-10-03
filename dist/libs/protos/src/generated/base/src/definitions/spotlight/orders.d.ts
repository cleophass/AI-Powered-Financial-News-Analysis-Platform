import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
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
export declare const OrderFee: MessageFns<OrderFee>;
export declare const OrderResponse: MessageFns<OrderResponse>;
export declare const OrdersListResponse: MessageFns<OrdersListResponse>;
export declare const DeleteOrderResponse: MessageFns<DeleteOrderResponse>;
export declare const CreateOrder: MessageFns<CreateOrder>;
export declare const CreateOrdersRequest: MessageFns<CreateOrdersRequest>;
export declare const CancelAllOrdersByStrategyIdRequest: MessageFns<CancelAllOrdersByStrategyIdRequest>;
export declare const OrderByIdRequest: MessageFns<OrderByIdRequest>;
export declare const ListOrdersByStrategyIdRequest: MessageFns<ListOrdersByStrategyIdRequest>;
export declare const ListOrdersByUserIdRequest: MessageFns<ListOrdersByUserIdRequest>;
export declare const CandleRequest: MessageFns<CandleRequest>;
export declare const ExtractHasOpenedOrdersRequest: MessageFns<ExtractHasOpenedOrdersRequest>;
export declare const ExtractHasOpenedOrdersResponse: MessageFns<ExtractHasOpenedOrdersResponse>;
export declare const GetBudgetImpactRequest: MessageFns<GetBudgetImpactRequest>;
export declare const GetBudgetImpactByFrequencyRequest: MessageFns<GetBudgetImpactByFrequencyRequest>;
export declare const ListBudgetsImpactsRequest: MessageFns<ListBudgetsImpactsRequest>;
export declare const GetProfitsAndLossesRequest: MessageFns<GetProfitsAndLossesRequest>;
export declare const UpdateOrderRequest: MessageFns<UpdateOrderRequest>;
export declare const UpdateOrdersBulkRequest: MessageFns<UpdateOrdersBulkRequest>;
export type OrdersService = typeof OrdersService;
export declare const OrdersService: {
    readonly createOrders: {
        readonly path: "/spotlight.Orders/CreateOrders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateOrdersRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CreateOrdersRequest;
        readonly responseSerialize: (value: OrdersListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrdersListResponse;
    };
    readonly cancelAllOrdersByStrategyId: {
        readonly path: "/spotlight.Orders/CancelAllOrdersByStrategyId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelAllOrdersByStrategyIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CancelAllOrdersByStrategyIdRequest;
        readonly responseSerialize: (value: OrdersListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrdersListResponse;
    };
    readonly getOrderById: {
        readonly path: "/spotlight.Orders/GetOrderById";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: OrderByIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => OrderByIdRequest;
        readonly responseSerialize: (value: OrderResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrderResponse;
    };
    readonly listOrdersByStrategyId: {
        readonly path: "/spotlight.Orders/ListOrdersByStrategyId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOrdersByStrategyIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ListOrdersByStrategyIdRequest;
        readonly responseSerialize: (value: OrdersListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrdersListResponse;
    };
    readonly listOrdersByUserId: {
        readonly path: "/spotlight.Orders/ListOrdersByUserId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOrdersByUserIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ListOrdersByUserIdRequest;
        readonly responseSerialize: (value: OrdersListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrdersListResponse;
    };
    readonly listPendingOrdersTriggeredByCandle: {
        readonly path: "/spotlight.Orders/ListPendingOrdersTriggeredByCandle";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CandleRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CandleRequest;
        readonly responseSerialize: (value: OrdersListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrdersListResponse;
    };
    readonly extractHasOpenedOrders: {
        readonly path: "/spotlight.Orders/ExtractHasOpenedOrders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExtractHasOpenedOrdersRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ExtractHasOpenedOrdersRequest;
        readonly responseSerialize: (value: ExtractHasOpenedOrdersResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => ExtractHasOpenedOrdersResponse;
    };
    readonly getBudgetImpact: {
        readonly path: "/spotlight.Orders/GetBudgetImpact";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBudgetImpactRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => GetBudgetImpactRequest;
        readonly responseSerialize: (value: {
            [key: string]: any;
        } | undefined) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => {
            [key: string]: any;
        };
    };
    readonly getBudgetImpactByFrequency: {
        readonly path: "/spotlight.Orders/GetBudgetImpactByFrequency";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBudgetImpactByFrequencyRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => GetBudgetImpactByFrequencyRequest;
        readonly responseSerialize: (value: {
            [key: string]: any;
        } | undefined) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => {
            [key: string]: any;
        };
    };
    readonly listBudgetsImpacts: {
        readonly path: "/spotlight.Orders/ListBudgetsImpacts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBudgetsImpactsRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ListBudgetsImpactsRequest;
        readonly responseSerialize: (value: {
            [key: string]: any;
        } | undefined) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => {
            [key: string]: any;
        };
    };
    readonly getProfitsAndLosses: {
        readonly path: "/spotlight.Orders/GetProfitsAndLosses";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProfitsAndLossesRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => GetProfitsAndLossesRequest;
        readonly responseSerialize: (value: {
            [key: string]: any;
        } | undefined) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => {
            [key: string]: any;
        };
    };
    readonly updateOrder: {
        readonly path: "/spotlight.Orders/UpdateOrder";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOrderRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => UpdateOrderRequest;
        readonly responseSerialize: (value: OrderResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrderResponse;
    };
    readonly updateOrdersBulk: {
        readonly path: "/spotlight.Orders/UpdateOrdersBulk";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOrdersBulkRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => UpdateOrdersBulkRequest;
        readonly responseSerialize: (value: OrdersListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrdersListResponse;
    };
};
export interface OrdersServer extends UntypedServiceImplementation {
    createOrders: handleUnaryCall<CreateOrdersRequest, OrdersListResponse>;
    cancelAllOrdersByStrategyId: handleUnaryCall<CancelAllOrdersByStrategyIdRequest, OrdersListResponse>;
    getOrderById: handleUnaryCall<OrderByIdRequest, OrderResponse>;
    listOrdersByStrategyId: handleUnaryCall<ListOrdersByStrategyIdRequest, OrdersListResponse>;
    listOrdersByUserId: handleUnaryCall<ListOrdersByUserIdRequest, OrdersListResponse>;
    listPendingOrdersTriggeredByCandle: handleUnaryCall<CandleRequest, OrdersListResponse>;
    extractHasOpenedOrders: handleUnaryCall<ExtractHasOpenedOrdersRequest, ExtractHasOpenedOrdersResponse>;
    getBudgetImpact: handleUnaryCall<GetBudgetImpactRequest, {
        [key: string]: any;
    } | undefined>;
    getBudgetImpactByFrequency: handleUnaryCall<GetBudgetImpactByFrequencyRequest, {
        [key: string]: any;
    } | undefined>;
    listBudgetsImpacts: handleUnaryCall<ListBudgetsImpactsRequest, {
        [key: string]: any;
    } | undefined>;
    getProfitsAndLosses: handleUnaryCall<GetProfitsAndLossesRequest, {
        [key: string]: any;
    } | undefined>;
    updateOrder: handleUnaryCall<UpdateOrderRequest, OrderResponse>;
    updateOrdersBulk: handleUnaryCall<UpdateOrdersBulkRequest, OrdersListResponse>;
}
export interface OrdersClient extends Client {
    createOrders(request: CreateOrdersRequest, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    createOrders(request: CreateOrdersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    createOrders(request: CreateOrdersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    cancelAllOrdersByStrategyId(request: CancelAllOrdersByStrategyIdRequest, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    cancelAllOrdersByStrategyId(request: CancelAllOrdersByStrategyIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    cancelAllOrdersByStrategyId(request: CancelAllOrdersByStrategyIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    getOrderById(request: OrderByIdRequest, callback: (error: ServiceError | null, response: OrderResponse) => void): ClientUnaryCall;
    getOrderById(request: OrderByIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrderResponse) => void): ClientUnaryCall;
    getOrderById(request: OrderByIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrderResponse) => void): ClientUnaryCall;
    listOrdersByStrategyId(request: ListOrdersByStrategyIdRequest, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    listOrdersByStrategyId(request: ListOrdersByStrategyIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    listOrdersByStrategyId(request: ListOrdersByStrategyIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    listOrdersByUserId(request: ListOrdersByUserIdRequest, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    listOrdersByUserId(request: ListOrdersByUserIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    listOrdersByUserId(request: ListOrdersByUserIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    listPendingOrdersTriggeredByCandle(request: CandleRequest, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    listPendingOrdersTriggeredByCandle(request: CandleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    listPendingOrdersTriggeredByCandle(request: CandleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    extractHasOpenedOrders(request: ExtractHasOpenedOrdersRequest, callback: (error: ServiceError | null, response: ExtractHasOpenedOrdersResponse) => void): ClientUnaryCall;
    extractHasOpenedOrders(request: ExtractHasOpenedOrdersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ExtractHasOpenedOrdersResponse) => void): ClientUnaryCall;
    extractHasOpenedOrders(request: ExtractHasOpenedOrdersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ExtractHasOpenedOrdersResponse) => void): ClientUnaryCall;
    getBudgetImpact(request: GetBudgetImpactRequest, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    getBudgetImpact(request: GetBudgetImpactRequest, metadata: Metadata, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    getBudgetImpact(request: GetBudgetImpactRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    getBudgetImpactByFrequency(request: GetBudgetImpactByFrequencyRequest, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    getBudgetImpactByFrequency(request: GetBudgetImpactByFrequencyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    getBudgetImpactByFrequency(request: GetBudgetImpactByFrequencyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    listBudgetsImpacts(request: ListBudgetsImpactsRequest, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    listBudgetsImpacts(request: ListBudgetsImpactsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    listBudgetsImpacts(request: ListBudgetsImpactsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    getProfitsAndLosses(request: GetProfitsAndLossesRequest, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    getProfitsAndLosses(request: GetProfitsAndLossesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    getProfitsAndLosses(request: GetProfitsAndLossesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: {
        [key: string]: any;
    } | undefined) => void): ClientUnaryCall;
    updateOrder(request: UpdateOrderRequest, callback: (error: ServiceError | null, response: OrderResponse) => void): ClientUnaryCall;
    updateOrder(request: UpdateOrderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrderResponse) => void): ClientUnaryCall;
    updateOrder(request: UpdateOrderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrderResponse) => void): ClientUnaryCall;
    updateOrdersBulk(request: UpdateOrdersBulkRequest, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    updateOrdersBulk(request: UpdateOrdersBulkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    updateOrdersBulk(request: UpdateOrdersBulkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
}
export declare const OrdersClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OrdersClient;
    service: typeof OrdersService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
