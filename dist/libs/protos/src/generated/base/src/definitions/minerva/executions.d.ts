import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export interface ExecutionResponse {
    id: string;
    executionResult: {
        [key: string]: any;
    } | undefined;
    createdAt: string;
}
export interface CreateExecutionRequest {
    flowId: string;
    userId: string;
    executionResult: {
        [key: string]: any;
    } | undefined;
}
export declare const ExecutionResponse: MessageFns<ExecutionResponse>;
export declare const CreateExecutionRequest: MessageFns<CreateExecutionRequest>;
export type ExecutionsService = typeof ExecutionsService;
export declare const ExecutionsService: {
    readonly createExecution: {
        readonly path: "/minerva.Executions/CreateExecution";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateExecutionRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CreateExecutionRequest;
        readonly responseSerialize: (value: ExecutionResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => ExecutionResponse;
    };
};
export interface ExecutionsServer extends UntypedServiceImplementation {
    createExecution: handleUnaryCall<CreateExecutionRequest, ExecutionResponse>;
}
export interface ExecutionsClient extends Client {
    createExecution(request: CreateExecutionRequest, callback: (error: ServiceError | null, response: ExecutionResponse) => void): ClientUnaryCall;
    createExecution(request: CreateExecutionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ExecutionResponse) => void): ClientUnaryCall;
    createExecution(request: CreateExecutionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ExecutionResponse) => void): ClientUnaryCall;
}
export declare const ExecutionsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ExecutionsClient;
    service: typeof ExecutionsService;
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
