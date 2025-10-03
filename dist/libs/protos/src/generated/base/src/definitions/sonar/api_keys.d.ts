import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Empty } from "../../../google/protobuf/empty";
export interface CreateApiKeyRequest {
    userId: string;
    apiKey: string;
    apiSecret: string;
    broker: string;
    name?: string | undefined;
}
export interface DeleteApiKeyRequest {
    userId: string;
    id: string;
}
export interface GetApiKeyRequest {
    userId: string;
    broker: string;
}
export interface ListApiKeysByUserIdRequest {
    userId: string;
}
export interface Ed25519KeyResponse {
    publicKey: string;
}
export interface ApiKeyResponse {
    id: string;
    userId: string;
    apiKey: string;
    broker: string;
    createdAt: string;
    name?: string | undefined;
}
export interface ApiKeysListResponse {
    apiKeys: ApiKeyResponse[];
}
export interface GetValidBrokersRequest {
    userId: string;
}
export interface ValidBrokersResponse {
    brokers: string[];
}
export declare const CreateApiKeyRequest: MessageFns<CreateApiKeyRequest>;
export declare const DeleteApiKeyRequest: MessageFns<DeleteApiKeyRequest>;
export declare const GetApiKeyRequest: MessageFns<GetApiKeyRequest>;
export declare const ListApiKeysByUserIdRequest: MessageFns<ListApiKeysByUserIdRequest>;
export declare const Ed25519KeyResponse: MessageFns<Ed25519KeyResponse>;
export declare const ApiKeyResponse: MessageFns<ApiKeyResponse>;
export declare const ApiKeysListResponse: MessageFns<ApiKeysListResponse>;
export declare const GetValidBrokersRequest: MessageFns<GetValidBrokersRequest>;
export declare const ValidBrokersResponse: MessageFns<ValidBrokersResponse>;
export type ApiKeysService = typeof ApiKeysService;
export declare const ApiKeysService: {
    readonly generateEd25519KeyPair: {
        readonly path: "/sonar.ApiKeys/GenerateEd25519KeyPair";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Ed25519KeyResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => Ed25519KeyResponse;
    };
    readonly createApiKey: {
        readonly path: "/sonar.ApiKeys/CreateApiKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateApiKeyRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CreateApiKeyRequest;
        readonly responseSerialize: (value: ApiKeyResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => ApiKeyResponse;
    };
    readonly deleteApiKey: {
        readonly path: "/sonar.ApiKeys/DeleteApiKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteApiKeyRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => DeleteApiKeyRequest;
        readonly responseSerialize: (value: Empty) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly getApiKey: {
        readonly path: "/sonar.ApiKeys/GetApiKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetApiKeyRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => GetApiKeyRequest;
        readonly responseSerialize: (value: ApiKeyResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => ApiKeyResponse;
    };
    readonly listApiKeysByUserId: {
        readonly path: "/sonar.ApiKeys/ListApiKeysByUserId";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListApiKeysByUserIdRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => ListApiKeysByUserIdRequest;
        readonly responseSerialize: (value: ApiKeysListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => ApiKeysListResponse;
    };
    readonly getValidBrokers: {
        readonly path: "/sonar.ApiKeys/GetValidBrokers";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetValidBrokersRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => GetValidBrokersRequest;
        readonly responseSerialize: (value: ValidBrokersResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => ValidBrokersResponse;
    };
};
export interface ApiKeysServer extends UntypedServiceImplementation {
    generateEd25519KeyPair: handleUnaryCall<Empty, Ed25519KeyResponse>;
    createApiKey: handleUnaryCall<CreateApiKeyRequest, ApiKeyResponse>;
    deleteApiKey: handleUnaryCall<DeleteApiKeyRequest, Empty>;
    getApiKey: handleUnaryCall<GetApiKeyRequest, ApiKeyResponse>;
    listApiKeysByUserId: handleUnaryCall<ListApiKeysByUserIdRequest, ApiKeysListResponse>;
    getValidBrokers: handleUnaryCall<GetValidBrokersRequest, ValidBrokersResponse>;
}
export interface ApiKeysClient extends Client {
    generateEd25519KeyPair(request: Empty, callback: (error: ServiceError | null, response: Ed25519KeyResponse) => void): ClientUnaryCall;
    generateEd25519KeyPair(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: Ed25519KeyResponse) => void): ClientUnaryCall;
    generateEd25519KeyPair(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Ed25519KeyResponse) => void): ClientUnaryCall;
    createApiKey(request: CreateApiKeyRequest, callback: (error: ServiceError | null, response: ApiKeyResponse) => void): ClientUnaryCall;
    createApiKey(request: CreateApiKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ApiKeyResponse) => void): ClientUnaryCall;
    createApiKey(request: CreateApiKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ApiKeyResponse) => void): ClientUnaryCall;
    deleteApiKey(request: DeleteApiKeyRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteApiKey(request: DeleteApiKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteApiKey(request: DeleteApiKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    getApiKey(request: GetApiKeyRequest, callback: (error: ServiceError | null, response: ApiKeyResponse) => void): ClientUnaryCall;
    getApiKey(request: GetApiKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ApiKeyResponse) => void): ClientUnaryCall;
    getApiKey(request: GetApiKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ApiKeyResponse) => void): ClientUnaryCall;
    listApiKeysByUserId(request: ListApiKeysByUserIdRequest, callback: (error: ServiceError | null, response: ApiKeysListResponse) => void): ClientUnaryCall;
    listApiKeysByUserId(request: ListApiKeysByUserIdRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ApiKeysListResponse) => void): ClientUnaryCall;
    listApiKeysByUserId(request: ListApiKeysByUserIdRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ApiKeysListResponse) => void): ClientUnaryCall;
    getValidBrokers(request: GetValidBrokersRequest, callback: (error: ServiceError | null, response: ValidBrokersResponse) => void): ClientUnaryCall;
    getValidBrokers(request: GetValidBrokersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ValidBrokersResponse) => void): ClientUnaryCall;
    getValidBrokers(request: GetValidBrokersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ValidBrokersResponse) => void): ClientUnaryCall;
}
export declare const ApiKeysClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ApiKeysClient;
    service: typeof ApiKeysService;
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
