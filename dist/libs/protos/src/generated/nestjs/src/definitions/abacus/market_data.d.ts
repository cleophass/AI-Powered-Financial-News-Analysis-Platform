import { Observable } from "rxjs";
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
export interface MarketDataClient {
    getMarketData(request: GetMarketDataRequest): Observable<MarketDataResponse>;
    getRates(request: GetRatesRequest): Observable<RatesResponse>;
}
export interface MarketDataController {
    getMarketData(request: GetMarketDataRequest): Promise<MarketDataResponse> | Observable<MarketDataResponse> | MarketDataResponse;
    getRates(request: GetRatesRequest): Promise<RatesResponse> | Observable<RatesResponse> | RatesResponse;
}
export declare function MarketDataControllerMethods(): (constructor: Function) => void;
export declare const MARKET_DATA_SERVICE_NAME = "MarketData";
