import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
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
export declare const Fee: MessageFns<Fee>;
export declare const FeeResponse: MessageFns<FeeResponse>;
export declare const FeesListResponse: MessageFns<FeesListResponse>;
export declare const FeeByIdRequest: MessageFns<FeeByIdRequest>;
export declare const ListFeesByOrderIdRequest: MessageFns<ListFeesByOrderIdRequest>;
export declare const ListFeesByStrategyIdRequest: MessageFns<ListFeesByStrategyIdRequest>;
export declare const SetOrderFeesRequest: MessageFns<SetOrderFeesRequest>;
export type FeesService = typeof FeesService;
export declare const FeesService: {
    readonly getFeeById: {
        readonly path: "/spotlight.Fees/GetFeeById";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FeeByIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => FeeByIdRequest;
        readonly responseSerialize: (value: FeeResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FeeResponse;
    };
    readonly listFeesByOrderId: {
        readonly path: "/spotlight.Fees/ListFeesByOrderId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFeesByOrderIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ListFeesByOrderIdRequest;
        readonly responseSerialize: (value: FeesListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FeesListResponse;
    };
    readonly listFeesByStrategyId: {
        readonly path: "/spotlight.Fees/ListFeesByStrategyId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFeesByStrategyIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ListFeesByStrategyIdRequest;
        readonly responseSerialize: (value: FeesListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FeesListResponse;
    };
    readonly setOrderFees: {
        readonly path: "/spotlight.Fees/SetOrderFees";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetOrderFeesRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => SetOrderFeesRequest;
        readonly responseSerialize: (value: FeesListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FeesListResponse;
    };
};
export interface FeesServer extends UntypedServiceImplementation {
    getFeeById: handleUnaryCall<FeeByIdRequest, FeeResponse>;
    listFeesByOrderId: handleUnaryCall<ListFeesByOrderIdRequest, FeesListResponse>;
    listFeesByStrategyId: handleUnaryCall<ListFeesByStrategyIdRequest, FeesListResponse>;
    setOrderFees: handleUnaryCall<SetOrderFeesRequest, FeesListResponse>;
}
export interface FeesClient extends Client {
    getFeeById(request: FeeByIdRequest, callback: (error: ServiceError | null, response: FeeResponse) => void): ClientUnaryCall;
    getFeeById(request: FeeByIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FeeResponse) => void): ClientUnaryCall;
    getFeeById(request: FeeByIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FeeResponse) => void): ClientUnaryCall;
    listFeesByOrderId(request: ListFeesByOrderIdRequest, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
    listFeesByOrderId(request: ListFeesByOrderIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
    listFeesByOrderId(request: ListFeesByOrderIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
    listFeesByStrategyId(request: ListFeesByStrategyIdRequest, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
    listFeesByStrategyId(request: ListFeesByStrategyIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
    listFeesByStrategyId(request: ListFeesByStrategyIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
    setOrderFees(request: SetOrderFeesRequest, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
    setOrderFees(request: SetOrderFeesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
    setOrderFees(request: SetOrderFeesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FeesListResponse) => void): ClientUnaryCall;
}
export declare const FeesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FeesClient;
    service: typeof FeesService;
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
