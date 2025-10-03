import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export interface Asset {
    base: string;
    broker: string;
}
export interface Rate {
    base: string;
    quote: string;
    broker: string;
    rate: number;
}
export interface Indicator {
    name: string;
    parameters: {
        [key: string]: any;
    } | undefined;
}
export interface IndicatorMetadata {
    key: string;
    name: string;
    parameters: {
        [key: string]: any;
    } | undefined;
}
export interface ComputedIndicator {
    key: string;
    outputs: {
        [key: string]: any;
    } | undefined;
}
export interface GetMarketDataRequest {
    start: Date | undefined;
    end: Date | undefined;
    interval: string;
    base: string;
    quote: string;
    broker: string;
    indicators: Indicator[];
}
export interface GetRatesRequest {
    assets: Asset[];
    quote: string;
}
export interface Candle {
    openTime: Date | undefined;
    closeTime: Date | undefined;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    indicators: ComputedIndicator[];
}
export interface MarketDataResponse {
    indicators: IndicatorMetadata[];
    candles: Candle[];
}
export interface RatesResponse {
    time: Date | undefined;
    rates: Rate[];
}
export declare const Asset: MessageFns<Asset>;
export declare const Rate: MessageFns<Rate>;
export declare const Indicator: MessageFns<Indicator>;
export declare const IndicatorMetadata: MessageFns<IndicatorMetadata>;
export declare const ComputedIndicator: MessageFns<ComputedIndicator>;
export declare const GetMarketDataRequest: MessageFns<GetMarketDataRequest>;
export declare const GetRatesRequest: MessageFns<GetRatesRequest>;
export declare const Candle: MessageFns<Candle>;
export declare const MarketDataResponse: MessageFns<MarketDataResponse>;
export declare const RatesResponse: MessageFns<RatesResponse>;
export type MarketDataService = typeof MarketDataService;
export declare const MarketDataService: {
    readonly getMarketData: {
        readonly path: "/abacus.MarketData/GetMarketData";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetMarketDataRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => GetMarketDataRequest;
        readonly responseSerialize: (value: MarketDataResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => MarketDataResponse;
    };
    readonly getRates: {
        readonly path: "/abacus.MarketData/GetRates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRatesRequest) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly requestDeserialize: (value: Buffer) => GetRatesRequest;
        readonly responseSerialize: (value: RatesResponse) => Buffer<Uint8Array<ArrayBufferLike>>;
        readonly responseDeserialize: (value: Buffer) => RatesResponse;
    };
};
export interface MarketDataServer extends UntypedServiceImplementation {
    getMarketData: handleUnaryCall<GetMarketDataRequest, MarketDataResponse>;
    getRates: handleUnaryCall<GetRatesRequest, RatesResponse>;
}
export interface MarketDataClient extends Client {
    getMarketData(request: GetMarketDataRequest, callback: (error: ServiceError | null, response: MarketDataResponse) => void): ClientUnaryCall;
    getMarketData(request: GetMarketDataRequest, metadata: Metadata, callback: (error: ServiceError | null, response: MarketDataResponse) => void): ClientUnaryCall;
    getMarketData(request: GetMarketDataRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: MarketDataResponse) => void): ClientUnaryCall;
    getRates(request: GetRatesRequest, callback: (error: ServiceError | null, response: RatesResponse) => void): ClientUnaryCall;
    getRates(request: GetRatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RatesResponse) => void): ClientUnaryCall;
    getRates(request: GetRatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RatesResponse) => void): ClientUnaryCall;
}
export declare const MarketDataClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MarketDataClient;
    service: typeof MarketDataService;
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
