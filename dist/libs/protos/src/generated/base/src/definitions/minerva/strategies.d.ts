import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
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
export declare const PairBroker: MessageFns<PairBroker>;
export declare const PairRatio: MessageFns<PairRatio>;
export declare const RRuleOptions: MessageFns<RRuleOptions>;
export declare const StrategyResponse: MessageFns<StrategyResponse>;
export declare const StrategiesListResponse: MessageFns<StrategiesListResponse>;
export declare const StrategiesByUserIdRequest: MessageFns<StrategiesByUserIdRequest>;
export declare const StrategyByIdRequest: MessageFns<StrategyByIdRequest>;
export declare const CreateStrategyRequest: MessageFns<CreateStrategyRequest>;
export declare const UpdateStrategyRequest: MessageFns<UpdateStrategyRequest>;
export declare const SetStrategyActivePairsRequest: MessageFns<SetStrategyActivePairsRequest>;
export declare const SetStrategyDraftPairsRequest: MessageFns<SetStrategyDraftPairsRequest>;
export declare const ListActiveStrategiesRequest: MessageFns<ListActiveStrategiesRequest>;
export type StrategiesService = typeof StrategiesService;
export declare const StrategiesService: {
    readonly listStrategiesByUserId: {
        readonly path: "/minerva.Strategies/ListStrategiesByUserId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StrategiesByUserIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => StrategiesByUserIdRequest;
        readonly responseSerialize: (value: StrategiesListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => StrategiesListResponse;
    };
    readonly getStrategyById: {
        readonly path: "/minerva.Strategies/GetStrategyById";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StrategyByIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => StrategyByIdRequest;
        readonly responseSerialize: (value: StrategyResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => StrategyResponse;
    };
    readonly createStrategy: {
        readonly path: "/minerva.Strategies/CreateStrategy";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateStrategyRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CreateStrategyRequest;
        readonly responseSerialize: (value: StrategyResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => StrategyResponse;
    };
    readonly updateStrategy: {
        readonly path: "/minerva.Strategies/UpdateStrategy";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateStrategyRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => UpdateStrategyRequest;
        readonly responseSerialize: (value: StrategyResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => StrategyResponse;
    };
    readonly setStrategyActivePairs: {
        readonly path: "/minerva.Strategies/SetStrategyActivePairs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetStrategyActivePairsRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => SetStrategyActivePairsRequest;
        readonly responseSerialize: (value: StrategyResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => StrategyResponse;
    };
    readonly setStrategyDraftPairs: {
        readonly path: "/minerva.Strategies/SetStrategyDraftPairs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetStrategyDraftPairsRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => SetStrategyDraftPairsRequest;
        readonly responseSerialize: (value: StrategyResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => StrategyResponse;
    };
    readonly deleteStrategy: {
        readonly path: "/minerva.Strategies/DeleteStrategy";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StrategyByIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => StrategyByIdRequest;
        readonly responseSerialize: (value: Empty) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly listActiveStrategies: {
        readonly path: "/minerva.Strategies/ListActiveStrategies";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListActiveStrategiesRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ListActiveStrategiesRequest;
        readonly responseSerialize: (value: StrategiesListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => StrategiesListResponse;
    };
};
export interface StrategiesServer extends UntypedServiceImplementation {
    listStrategiesByUserId: handleUnaryCall<StrategiesByUserIdRequest, StrategiesListResponse>;
    getStrategyById: handleUnaryCall<StrategyByIdRequest, StrategyResponse>;
    createStrategy: handleUnaryCall<CreateStrategyRequest, StrategyResponse>;
    updateStrategy: handleUnaryCall<UpdateStrategyRequest, StrategyResponse>;
    setStrategyActivePairs: handleUnaryCall<SetStrategyActivePairsRequest, StrategyResponse>;
    setStrategyDraftPairs: handleUnaryCall<SetStrategyDraftPairsRequest, StrategyResponse>;
    deleteStrategy: handleUnaryCall<StrategyByIdRequest, Empty>;
    listActiveStrategies: handleUnaryCall<ListActiveStrategiesRequest, StrategiesListResponse>;
}
export interface StrategiesClient extends Client {
    listStrategiesByUserId(request: StrategiesByUserIdRequest, callback: (error: ServiceError | null, response: StrategiesListResponse) => void): ClientUnaryCall;
    listStrategiesByUserId(request: StrategiesByUserIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StrategiesListResponse) => void): ClientUnaryCall;
    listStrategiesByUserId(request: StrategiesByUserIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StrategiesListResponse) => void): ClientUnaryCall;
    getStrategyById(request: StrategyByIdRequest, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    getStrategyById(request: StrategyByIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    getStrategyById(request: StrategyByIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    createStrategy(request: CreateStrategyRequest, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    createStrategy(request: CreateStrategyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    createStrategy(request: CreateStrategyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    updateStrategy(request: UpdateStrategyRequest, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    updateStrategy(request: UpdateStrategyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    updateStrategy(request: UpdateStrategyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    setStrategyActivePairs(request: SetStrategyActivePairsRequest, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    setStrategyActivePairs(request: SetStrategyActivePairsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    setStrategyActivePairs(request: SetStrategyActivePairsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    setStrategyDraftPairs(request: SetStrategyDraftPairsRequest, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    setStrategyDraftPairs(request: SetStrategyDraftPairsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    setStrategyDraftPairs(request: SetStrategyDraftPairsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StrategyResponse) => void): ClientUnaryCall;
    deleteStrategy(request: StrategyByIdRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteStrategy(request: StrategyByIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteStrategy(request: StrategyByIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    listActiveStrategies(request: ListActiveStrategiesRequest, callback: (error: ServiceError | null, response: StrategiesListResponse) => void): ClientUnaryCall;
    listActiveStrategies(request: ListActiveStrategiesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StrategiesListResponse) => void): ClientUnaryCall;
    listActiveStrategies(request: ListActiveStrategiesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StrategiesListResponse) => void): ClientUnaryCall;
}
export declare const StrategiesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): StrategiesClient;
    service: typeof StrategiesService;
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
