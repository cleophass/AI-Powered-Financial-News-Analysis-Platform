export declare enum OrderTypeEnum {
    Market = "market",
    Limit = "limit",
    Iceberg = "iceberg",
    StopLoss = "stop-loss",
    TakeProfit = "take-profit",
    StopLossLimit = "stop-loss-limit",
    TakeProfitLimit = "take-profit-limit",
    LimitMaker = "limit-maker"
}
export declare enum OrderSideEnum {
    Buy = "buy",
    Sell = "sell"
}
export declare enum OrderTimeInForceEnum {
    /**
     * Kraken: GTC
     * Binance: GTC
     */
    GoodTilCanceled = "gtc",
    /**
     * Kraken: IOC
     * Binance: IOC
     */
    ImmediateOrCancel = "ioc"
}
export declare enum OrderStatusEnum {
    /**
     * Not yet processed by the broker
     */
    Created = "created",
    /**
     * Kraken: pending
     * Binance: NEW, PENDING_NEW
     */
    Pending = "pending",
    /**
     * Kraken: opened
     * Binance: PARTIALLY_FILLED
     */
    Opened = "opened",
    /**
     * Kraken: closed
     * Binance: FILLED
     */
    Closed = "closed",
    /**
     * Kraken: canceled
     * Binance: CANCELED, PENDING_CANCEL, REJECTED
     */
    Canceled = "canceled",
    /**
     * Kraken: expired
     * Binance: EXPIRED, EXPIRED_IN_MATCH
     */
    Expired = "expired"
}
