"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusEnum = exports.OrderTimeInForceEnum = exports.OrderSideEnum = exports.OrderTypeEnum = void 0;
var OrderTypeEnum;
(function (OrderTypeEnum) {
    OrderTypeEnum["Market"] = "market";
    OrderTypeEnum["Limit"] = "limit";
    OrderTypeEnum["Iceberg"] = "iceberg";
    OrderTypeEnum["StopLoss"] = "stop-loss";
    OrderTypeEnum["TakeProfit"] = "take-profit";
    OrderTypeEnum["StopLossLimit"] = "stop-loss-limit";
    OrderTypeEnum["TakeProfitLimit"] = "take-profit-limit";
    OrderTypeEnum["LimitMaker"] = "limit-maker";
})(OrderTypeEnum || (exports.OrderTypeEnum = OrderTypeEnum = {}));
var OrderSideEnum;
(function (OrderSideEnum) {
    OrderSideEnum["Buy"] = "buy";
    OrderSideEnum["Sell"] = "sell";
})(OrderSideEnum || (exports.OrderSideEnum = OrderSideEnum = {}));
var OrderTimeInForceEnum;
(function (OrderTimeInForceEnum) {
    /**
     * Kraken: GTC
     * Binance: GTC
     */
    OrderTimeInForceEnum["GoodTilCanceled"] = "gtc";
    /**
     * Kraken: IOC
     * Binance: IOC
     */
    OrderTimeInForceEnum["ImmediateOrCancel"] = "ioc";
    /**
     * Kraken: N/A
     * Binance: FOK
     * Choose to support the intersection of features of supported brokers
     */
    // FillOrKill = 'fok',
    /**
     * Kraken: GTD
     * Binance: N/A
     * Choose to support the intersection of features of supported brokers
     */
    // GoodTilDate = 'gtd',
})(OrderTimeInForceEnum || (exports.OrderTimeInForceEnum = OrderTimeInForceEnum = {}));
var OrderStatusEnum;
(function (OrderStatusEnum) {
    /**
     * Not yet processed by the broker
     */
    OrderStatusEnum["Created"] = "created";
    /**
     * Kraken: pending
     * Binance: NEW, PENDING_NEW
     */
    OrderStatusEnum["Pending"] = "pending";
    /**
     * Kraken: opened
     * Binance: PARTIALLY_FILLED
     */
    OrderStatusEnum["Opened"] = "opened";
    /**
     * Kraken: closed
     * Binance: FILLED
     */
    OrderStatusEnum["Closed"] = "closed";
    /**
     * Kraken: canceled
     * Binance: CANCELED, PENDING_CANCEL, REJECTED
     */
    OrderStatusEnum["Canceled"] = "canceled";
    /**
     * Kraken: expired
     * Binance: EXPIRED, EXPIRED_IN_MATCH
     */
    OrderStatusEnum["Expired"] = "expired";
})(OrderStatusEnum || (exports.OrderStatusEnum = OrderStatusEnum = {}));
//# sourceMappingURL=order.enum.js.map