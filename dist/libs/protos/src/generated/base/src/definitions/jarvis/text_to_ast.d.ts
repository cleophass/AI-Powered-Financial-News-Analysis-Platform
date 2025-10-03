import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export interface ChatMessage {
    role: string;
    content: string;
}
export interface TextToAstConversation {
    messages: ChatMessage[];
}
export declare const ChatMessage: MessageFns<ChatMessage>;
export declare const TextToAstConversation: MessageFns<TextToAstConversation>;
export type TextToAstService = typeof TextToAstService;
export declare const TextToAstService: {
    readonly processText: {
        readonly path: "/jarvis.TextToAst/ProcessText";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TextToAstConversation) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => TextToAstConversation;
        readonly responseSerialize: (value: TextToAstConversation) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => TextToAstConversation;
    };
};
export interface TextToAstServer extends UntypedServiceImplementation {
    processText: handleUnaryCall<TextToAstConversation, TextToAstConversation>;
}
export interface TextToAstClient extends Client {
    processText(request: TextToAstConversation, callback: (error: ServiceError | null, response: TextToAstConversation) => void): ClientUnaryCall;
    processText(request: TextToAstConversation, metadata: Metadata, callback: (error: ServiceError | null, response: TextToAstConversation) => void): ClientUnaryCall;
    processText(request: TextToAstConversation, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: TextToAstConversation) => void): ClientUnaryCall;
}
export declare const TextToAstClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TextToAstClient;
    service: typeof TextToAstService;
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
