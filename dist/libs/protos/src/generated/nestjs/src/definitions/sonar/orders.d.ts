import { Observable } from "rxjs";
import { Empty } from "../../../google/protobuf/empty";
export interface Order {
    id: string;
    base: string;
    quote: string;
    side: string;
    type: string;
    volume?: number | undefined;
    quoteVolume?: number | undefined;
    displayVolume?: number | undefined;
    timeInForce?: string | undefined;
    limitPrice?: number | undefined;
    trailingDelta?: number | undefined;
    triggerPrice?: number | undefined;
}
export interface PlaceOrdersRequest {
    userId: string;
    broker: string;
    expireAt: Date | undefined;
    orders: Order[];
}
export interface OrdersListResponse {
    orders: Order[];
}
export interface CancelRequest {
    id: string;
    base: string;
    quote: string;
}
export interface CancelOrdersRequest {
    userId: string;
    broker: string;
    orders: CancelRequest[];
}
export interface OrdersClient {
    placeOrders(request: PlaceOrdersRequest): Observable<OrdersListResponse>;
    cancelOrders(request: CancelOrdersRequest): Observable<Empty>;
}
export interface OrdersController {
    placeOrders(request: PlaceOrdersRequest): Promise<OrdersListResponse> | Observable<OrdersListResponse> | OrdersListResponse;
    cancelOrders(request: CancelOrdersRequest): void;
}
export declare function OrdersControllerMethods(): (constructor: Function) => void;
export declare const ORDERS_SERVICE_NAME = "Orders";
