import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
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
export declare const BacktestResponse: MessageFns<BacktestResponse>;
export declare const BacktestsListResponse: MessageFns<BacktestsListResponse>;
export declare const BacktestByIdRequest: MessageFns<BacktestByIdRequest>;
export declare const BacktestsByFlowIdRequest: MessageFns<BacktestsByFlowIdRequest>;
export declare const BacktestsByStrategyIdRequest: MessageFns<BacktestsByStrategyIdRequest>;
export declare const BacktestsByUserIdRequest: MessageFns<BacktestsByUserIdRequest>;
export declare const CreateBacktestRequest: MessageFns<CreateBacktestRequest>;
export declare const UpdateBacktestRequest: MessageFns<UpdateBacktestRequest>;
export type BacktestsService = typeof BacktestsService;
export declare const BacktestsService: {
    readonly createBacktest: {
        readonly path: "/minerva.Backtests/CreateBacktest";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateBacktestRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CreateBacktestRequest;
        readonly responseSerialize: (value: BacktestResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => BacktestResponse;
    };
    readonly updateBacktest: {
        readonly path: "/minerva.Backtests/UpdateBacktest";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBacktestRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => UpdateBacktestRequest;
        readonly responseSerialize: (value: BacktestResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => BacktestResponse;
    };
    readonly getBacktestById: {
        readonly path: "/minerva.Backtests/GetBacktestById";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BacktestByIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => BacktestByIdRequest;
        readonly responseSerialize: (value: BacktestResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => BacktestResponse;
    };
    readonly listBacktestsByFlowId: {
        readonly path: "/minerva.Backtests/ListBacktestsByFlowId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BacktestsByFlowIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => BacktestsByFlowIdRequest;
        readonly responseSerialize: (value: BacktestsListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => BacktestsListResponse;
    };
    readonly listBacktestsByStrategyId: {
        readonly path: "/minerva.Backtests/ListBacktestsByStrategyId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BacktestsByStrategyIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => BacktestsByStrategyIdRequest;
        readonly responseSerialize: (value: BacktestsListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => BacktestsListResponse;
    };
    readonly listBacktestsByUserId: {
        readonly path: "/minerva.Backtests/ListBacktestsByUserId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BacktestsByUserIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => BacktestsByUserIdRequest;
        readonly responseSerialize: (value: BacktestsListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => BacktestsListResponse;
    };
};
export interface BacktestsServer extends UntypedServiceImplementation {
    createBacktest: handleUnaryCall<CreateBacktestRequest, BacktestResponse>;
    updateBacktest: handleUnaryCall<UpdateBacktestRequest, BacktestResponse>;
    getBacktestById: handleUnaryCall<BacktestByIdRequest, BacktestResponse>;
    listBacktestsByFlowId: handleUnaryCall<BacktestsByFlowIdRequest, BacktestsListResponse>;
    listBacktestsByStrategyId: handleUnaryCall<BacktestsByStrategyIdRequest, BacktestsListResponse>;
    listBacktestsByUserId: handleUnaryCall<BacktestsByUserIdRequest, BacktestsListResponse>;
}
export interface BacktestsClient extends Client {
    createBacktest(request: CreateBacktestRequest, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    createBacktest(request: CreateBacktestRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    createBacktest(request: CreateBacktestRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    updateBacktest(request: UpdateBacktestRequest, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    updateBacktest(request: UpdateBacktestRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    updateBacktest(request: UpdateBacktestRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    getBacktestById(request: BacktestByIdRequest, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    getBacktestById(request: BacktestByIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    getBacktestById(request: BacktestByIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BacktestResponse) => void): ClientUnaryCall;
    listBacktestsByFlowId(request: BacktestsByFlowIdRequest, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
    listBacktestsByFlowId(request: BacktestsByFlowIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
    listBacktestsByFlowId(request: BacktestsByFlowIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
    listBacktestsByStrategyId(request: BacktestsByStrategyIdRequest, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
    listBacktestsByStrategyId(request: BacktestsByStrategyIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
    listBacktestsByStrategyId(request: BacktestsByStrategyIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
    listBacktestsByUserId(request: BacktestsByUserIdRequest, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
    listBacktestsByUserId(request: BacktestsByUserIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
    listBacktestsByUserId(request: BacktestsByUserIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BacktestsListResponse) => void): ClientUnaryCall;
}
export declare const BacktestsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BacktestsClient;
    service: typeof BacktestsService;
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
