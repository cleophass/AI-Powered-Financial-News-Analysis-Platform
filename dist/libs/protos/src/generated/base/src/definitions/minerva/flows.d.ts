import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export interface FlowResponse {
    id: string;
    userId: string;
    strategyId: string;
    graph: {
        [key: string]: any;
    } | undefined;
    ast: {
        [key: string]: any;
    } | undefined;
    status: string;
    isArchived: boolean;
    backtestsCount: number;
    executionsCount: number;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface FlowsListResponse {
    flows: FlowResponse[];
}
export interface CreateDraftFlowRequest {
    userId: string;
    strategyId: string;
    graph: {
        [key: string]: any;
    } | undefined;
}
export interface PromoteDraftFlowRequest {
    strategyId: string;
    userId: string;
}
export interface ArchivedFlowsByStrategyIdRequest {
    userId: string;
    strategyId: string;
    status: string;
}
export interface FlowByStrategyIdRequest {
    userId: string;
    strategyId: string;
    status: string;
}
export interface FlowsByStrategyIdRequest {
    userId: string;
    strategyId: string;
}
export interface FlowByIdRequest {
    id: string;
    userId: string;
}
export interface ListFlowsByStrategyIdsRequest {
    ids: string[];
}
export declare const FlowResponse: MessageFns<FlowResponse>;
export declare const FlowsListResponse: MessageFns<FlowsListResponse>;
export declare const CreateDraftFlowRequest: MessageFns<CreateDraftFlowRequest>;
export declare const PromoteDraftFlowRequest: MessageFns<PromoteDraftFlowRequest>;
export declare const ArchivedFlowsByStrategyIdRequest: MessageFns<ArchivedFlowsByStrategyIdRequest>;
export declare const FlowByStrategyIdRequest: MessageFns<FlowByStrategyIdRequest>;
export declare const FlowsByStrategyIdRequest: MessageFns<FlowsByStrategyIdRequest>;
export declare const FlowByIdRequest: MessageFns<FlowByIdRequest>;
export declare const ListFlowsByStrategyIdsRequest: MessageFns<ListFlowsByStrategyIdsRequest>;
export type FlowsService = typeof FlowsService;
export declare const FlowsService: {
    readonly createDraftFlow: {
        readonly path: "/minerva.Flows/CreateDraftFlow";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDraftFlowRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CreateDraftFlowRequest;
        readonly responseSerialize: (value: FlowResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FlowResponse;
    };
    readonly promoteDraftFlow: {
        readonly path: "/minerva.Flows/PromoteDraftFlow";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PromoteDraftFlowRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => PromoteDraftFlowRequest;
        readonly responseSerialize: (value: FlowResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FlowResponse;
    };
    readonly listArchivedFlowsByStrategyId: {
        readonly path: "/minerva.Flows/ListArchivedFlowsByStrategyId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ArchivedFlowsByStrategyIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ArchivedFlowsByStrategyIdRequest;
        readonly responseSerialize: (value: FlowsListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FlowsListResponse;
    };
    readonly getFlowByStrategyId: {
        readonly path: "/minerva.Flows/GetFlowByStrategyId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FlowByStrategyIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => FlowByStrategyIdRequest;
        readonly responseSerialize: (value: FlowResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FlowResponse;
    };
    readonly listFlowsByStrategyId: {
        readonly path: "/minerva.Flows/ListFlowsByStrategyId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FlowsByStrategyIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => FlowsByStrategyIdRequest;
        readonly responseSerialize: (value: FlowsListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FlowsListResponse;
    };
    readonly getFlowById: {
        readonly path: "/minerva.Flows/GetFlowById";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FlowByIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => FlowByIdRequest;
        readonly responseSerialize: (value: FlowResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FlowResponse;
    };
    readonly listFlowsByStrategyIds: {
        readonly path: "/minerva.Flows/ListFlowsByStrategyIds";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFlowsByStrategyIdsRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ListFlowsByStrategyIdsRequest;
        readonly responseSerialize: (value: FlowsListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => FlowsListResponse;
    };
};
export interface FlowsServer extends UntypedServiceImplementation {
    createDraftFlow: handleUnaryCall<CreateDraftFlowRequest, FlowResponse>;
    promoteDraftFlow: handleUnaryCall<PromoteDraftFlowRequest, FlowResponse>;
    listArchivedFlowsByStrategyId: handleUnaryCall<ArchivedFlowsByStrategyIdRequest, FlowsListResponse>;
    getFlowByStrategyId: handleUnaryCall<FlowByStrategyIdRequest, FlowResponse>;
    listFlowsByStrategyId: handleUnaryCall<FlowsByStrategyIdRequest, FlowsListResponse>;
    getFlowById: handleUnaryCall<FlowByIdRequest, FlowResponse>;
    listFlowsByStrategyIds: handleUnaryCall<ListFlowsByStrategyIdsRequest, FlowsListResponse>;
}
export interface FlowsClient extends Client {
    createDraftFlow(request: CreateDraftFlowRequest, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    createDraftFlow(request: CreateDraftFlowRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    createDraftFlow(request: CreateDraftFlowRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    promoteDraftFlow(request: PromoteDraftFlowRequest, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    promoteDraftFlow(request: PromoteDraftFlowRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    promoteDraftFlow(request: PromoteDraftFlowRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    listArchivedFlowsByStrategyId(request: ArchivedFlowsByStrategyIdRequest, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
    listArchivedFlowsByStrategyId(request: ArchivedFlowsByStrategyIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
    listArchivedFlowsByStrategyId(request: ArchivedFlowsByStrategyIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
    getFlowByStrategyId(request: FlowByStrategyIdRequest, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    getFlowByStrategyId(request: FlowByStrategyIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    getFlowByStrategyId(request: FlowByStrategyIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    listFlowsByStrategyId(request: FlowsByStrategyIdRequest, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
    listFlowsByStrategyId(request: FlowsByStrategyIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
    listFlowsByStrategyId(request: FlowsByStrategyIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
    getFlowById(request: FlowByIdRequest, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    getFlowById(request: FlowByIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    getFlowById(request: FlowByIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FlowResponse) => void): ClientUnaryCall;
    listFlowsByStrategyIds(request: ListFlowsByStrategyIdsRequest, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
    listFlowsByStrategyIds(request: ListFlowsByStrategyIdsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
    listFlowsByStrategyIds(request: ListFlowsByStrategyIdsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FlowsListResponse) => void): ClientUnaryCall;
}
export declare const FlowsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FlowsClient;
    service: typeof FlowsService;
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
