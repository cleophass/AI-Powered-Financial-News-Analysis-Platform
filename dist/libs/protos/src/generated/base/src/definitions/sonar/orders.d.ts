import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Empty } from "../../../google/protobuf/empty";
export interface Order {
    id: string;
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
export interface PlaceOrdersRequest {
    userId: string;
    broker: string;
    expireAt: Date | undefined;
    orders: Order[];
}
export interface OrdersListResponse {
    orders: Order[];
}
export interface CancelRequest {
    id: string;
    base: string;
    quote: string;
}
export interface CancelOrdersRequest {
    userId: string;
    broker: string;
    orders: CancelRequest[];
}
export declare const Order: MessageFns<Order>;
export declare const PlaceOrdersRequest: MessageFns<PlaceOrdersRequest>;
export declare const OrdersListResponse: MessageFns<OrdersListResponse>;
export declare const CancelRequest: MessageFns<CancelRequest>;
export declare const CancelOrdersRequest: MessageFns<CancelOrdersRequest>;
export type OrdersService = typeof OrdersService;
export declare const OrdersService: {
    readonly placeOrders: {
        readonly path: "/sonar.Orders/PlaceOrders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PlaceOrdersRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => PlaceOrdersRequest;
        readonly responseSerialize: (value: OrdersListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => OrdersListResponse;
    };
    readonly cancelOrders: {
        readonly path: "/sonar.Orders/CancelOrders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelOrdersRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CancelOrdersRequest;
        readonly responseSerialize: (value: Empty) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface OrdersServer extends UntypedServiceImplementation {
    placeOrders: handleUnaryCall<PlaceOrdersRequest, OrdersListResponse>;
    cancelOrders: handleUnaryCall<CancelOrdersRequest, Empty>;
}
export interface OrdersClient extends Client {
    placeOrders(request: PlaceOrdersRequest, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    placeOrders(request: PlaceOrdersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    placeOrders(request: PlaceOrdersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrdersListResponse) => void): ClientUnaryCall;
    cancelOrders(request: CancelOrdersRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    cancelOrders(request: CancelOrdersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    cancelOrders(request: CancelOrdersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
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
