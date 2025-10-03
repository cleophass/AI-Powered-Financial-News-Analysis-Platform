import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export interface ArticleResponse {
    id: string;
    title: string;
    text: string;
    url: string;
    updatedAt: Date | undefined;
    publicationDate: Date | undefined;
    createdAt: Date | undefined;
}
export interface CreateArticleRequest {
    title: string;
    text: string;
    url: string;
    publicationDate: Date | undefined;
}
export interface CreateArticlesListRequest {
    articles: CreateArticleRequest[];
}
export interface ArticlesListResponse {
    articles: ArticleResponse[];
}
export declare const ArticleResponse: MessageFns<ArticleResponse>;
export declare const CreateArticleRequest: MessageFns<CreateArticleRequest>;
export declare const CreateArticlesListRequest: MessageFns<CreateArticlesListRequest>;
export declare const ArticlesListResponse: MessageFns<ArticlesListResponse>;
export type ArticlesService = typeof ArticlesService;
export declare const ArticlesService: {
    readonly createArticlesList: {
        readonly path: "/billy.Articles/CreateArticlesList";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateArticlesListRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => CreateArticlesListRequest;
        readonly responseSerialize: (value: ArticlesListResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => ArticlesListResponse;
    };
};
export interface ArticlesServer extends UntypedServiceImplementation {
    createArticlesList: handleUnaryCall<CreateArticlesListRequest, ArticlesListResponse>;
}
export interface ArticlesClient extends Client {
    createArticlesList(request: CreateArticlesListRequest, callback: (error: ServiceError | null, response: ArticlesListResponse) => void): ClientUnaryCall;
    createArticlesList(request: CreateArticlesListRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ArticlesListResponse) => void): ClientUnaryCall;
    createArticlesList(request: CreateArticlesListRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ArticlesListResponse) => void): ClientUnaryCall;
}
export declare const ArticlesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ArticlesClient;
    service: typeof ArticlesService;
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
