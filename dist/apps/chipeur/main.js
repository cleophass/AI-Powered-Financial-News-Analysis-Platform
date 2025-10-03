/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const billy_service_1 = __webpack_require__(5);
const forbes_service_1 = __webpack_require__(53);
const env_1 = __webpack_require__(7);
const sourceServiceMap = {
    forbes: forbes_service_1.ForbesCrawlerService,
};
const handler = async () => {
    const appContext = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    common_1.Logger.log(`Starting chipeur with source: ${env_1.env.CHIPEUR_SOURCE}`);
    const crawlerService = appContext.get(sourceServiceMap[env_1.env.CHIPEUR_SOURCE]);
    const articles = await crawlerService.crawl(env_1.env.CHIPEUR_START_DATE, env_1.env.CHIPEUR_END_DATE);
    common_1.Logger.log(`📰 Found ${articles.length} article(s) to process`);
    const billyService = appContext.get(billy_service_1.BillyService);
    const articlesList = await billyService.processArticles(articles);
    common_1.Logger.log(`✅ Processed ${articlesList.length} article(s)`);
    common_1.Logger.log('\n📊 Results:');
    common_1.Logger.log(JSON.stringify(articlesList, null, 2));
    // Fermer l'application proprement
    await appContext.close();
};
exports.handler = handler;
void (0, exports.handler)();


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const billy_service_1 = __webpack_require__(5);
const forbes_service_1 = __webpack_require__(53);
const grpc_exception_filter_1 = __webpack_require__(60);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: grpc_exception_filter_1.GrpcExceptionFilter,
            },
            forbes_service_1.ForbesCrawlerService,
            billy_service_1.BillyService,
        ],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillyService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const nestjs_grpc_exceptions_1 = __webpack_require__(6);
const env_1 = __webpack_require__(7);
const models_1 = __webpack_require__(50);
let BillyService = class BillyService {
    async processArticles(articles) {
        const results = [];
        common_1.Logger.log(`🚀 Début de l'analyse financière de ${articles.length} article(s)...`);
        for (const article of articles) {
            common_1.Logger.log(`\n📰 Analyse de l'article: "${article.title}"`);
            const prompt = [
                {
                    role: 'system',
                    content: `You are an expert in financial impact analysis. Analyze the following article and identify key financial topics.

          Requirements:
          - Return a strictly valid JSON object with this structure:
          {
            "result": {
              "Topic name": {
                "description": "Detailed financial impact description, including expected timeframe",
                "score": (-1 to 1 numerical impact score), -0.7 for example if it is a highly negative impact
              },
              "Topic name": {
                "description": "Detailed financial impact description, including expected timeframe",
                "score": (-1 to 1 numerical impact score), 0.8 for example if it is a highly positive impact
              }
            }
          }

          Return only valid JSON, without any additional text.`,
                },
                {
                    role: 'user',
                    content: article.text,
                },
            ];
            common_1.Logger.log(`🤖 Analyse des impacts financiers en cours...`);
            const impactAnalysis = await models_1.mistralChain.invoke(prompt);
            if (!impactAnalysis.result) {
                common_1.Logger.warn(`⚠️  Aucun impact financier détecté pour cet article`);
                continue;
            }
            const topicCount = Object.keys(impactAnalysis.result).length;
            common_1.Logger.log(`✅ ${topicCount} impact(s) financier(s) identifié(s):`);
            // Afficher les topics au format JSON propre
            const topicsJson = {};
            Object.keys(impactAnalysis.result).forEach((topic) => {
                const topicData = impactAnalysis.result[topic];
                topicsJson[topic] = {
                    description: topicData.description,
                    impact: topicData.score,
                };
            });
            common_1.Logger.log(JSON.stringify(topicsJson, null, 2));
            const topicsWithDescriptions = Object.keys(impactAnalysis.result).map((topic) => {
                const topicData = impactAnalysis.result[topic];
                return `${article.title}, ${topic}. ${topicData.description}`;
            });
            common_1.Logger.log(`🔢 Génération des embeddings pour ${topicCount} topic(s)...`);
            const topicEmbeddings = await this.getTopicsEmbeddings(topicsWithDescriptions);
            common_1.Logger.log(`✅ Embeddings générés avec succès`);
            const articleResult = {
                title: article.title,
                text: article.text,
                url: article.url,
                publicationDate: article.publicationDate,
                topics: Object.keys(impactAnalysis.result).map((topic) => {
                    const topicKey = `${article.title}, ${topic}. ${impactAnalysis.result[topic].description}`;
                    return {
                        name: topic,
                        impact: impactAnalysis.result[topic].score,
                        embedding: topicEmbeddings[topicKey] || [],
                    };
                }),
            };
            results.push(articleResult);
        }
        common_1.Logger.log(`🎯 Analyse terminée: ${results.length} article(s) traité(s) avec succès`);
        return results;
    }
    async getOllamaEmbedding(text) {
        const requestBody = {
            model: env_1.env.OLLAMA_EMBEDDING_MODEL,
            prompt: text,
        };
        const startTime = Date.now();
        const response = await fetch(env_1.env.OLLAMA_URL + '/api/embeddings', {
            method: 'POST',
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
        const duration = Date.now() - startTime;
        if (!response.ok) {
            common_1.Logger.error(`❌ Erreur lors de la génération d'embedding: ${response.status} ${response.statusText}`);
            throw new nestjs_grpc_exceptions_1.GrpcAbortedException(`Error while requesting Ollama: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.embedding;
    }
    async getTopicsEmbeddings(topics) {
        const embeddings = {};
        await Promise.all(topics.map(async (topic) => {
            embeddings[topic] = await this.getOllamaEmbedding(topic);
        }));
        return embeddings;
    }
};
exports.BillyService = BillyService;
exports.BillyService = BillyService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], BillyService);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("nestjs-grpc-exceptions");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.env = void 0;
const env_utils_1 = __webpack_require__(8);
const envalid_1 = __webpack_require__(49);
exports.env = (0, envalid_1.cleanEnv)(process.env, {
    CHIPEUR_SOURCE: (0, envalid_1.str)({ choices: ['forbes'], desc: 'Source to scrape articles from.' }),
    CHIPEUR_START_DATE: (0, env_utils_1.date)({ desc: 'Start date for scraped articles.', default: new Date('2025-09-26') }),
    CHIPEUR_END_DATE: (0, env_utils_1.date)({ desc: 'End date for scraped articles.', default: new Date('2025-10-03') }),
    CHIPEUR_FORBES_URLS: (0, env_utils_1.urlArray)({ desc: 'Forbes URLs to scrape articles from.' }),
    ABACUS_URL: (0, envalid_1.url)(), // jsp si c'est le bon
    OLLAMA_EMBEDDING_MODEL: (0, envalid_1.str)(),
    OLLAMA_URL: (0, envalid_1.url)(),
    OPEN_AI_KEY: (0, envalid_1.str)(),
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(9), exports);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.number = exports.address = exports.date = exports.urlArray = void 0;
const utilities_1 = __webpack_require__(10);
const envalid_1 = __webpack_require__(49);
exports.urlArray = (0, envalid_1.makeValidator)((input) => {
    try {
        return input
            .split(',')
            .filter(Boolean)
            .map((url) => new URL(url));
    }
    catch {
        throw new envalid_1.EnvError(`Invalid urls: "${input}"`);
    }
});
exports.date = (0, envalid_1.makeValidator)((input) => {
    const dateInput = new Date(input);
    if (Number.isNaN(dateInput.getTime())) {
        throw new envalid_1.EnvError(`Invalid date: "${input}"`);
    }
    return dateInput;
});
exports.address = (0, envalid_1.makeValidator)((input) => {
    const [ip, port] = input.split(':');
    if (!(0, utilities_1.isFQDN)(ip) && !(0, utilities_1.isIP)(ip)) {
        throw new envalid_1.EnvError(`Invalid address: "${ip}"`);
    }
    const portNumber = Number(port);
    if (Number.isNaN(portNumber) || portNumber <= 0 || portNumber > 65_535) {
        throw new envalid_1.EnvError(`Invalid port: "${port}"`);
    }
    return input;
});
const number = (options) => (0, envalid_1.makeValidator)((input) => {
    const numberValue = Number(input);
    if (Number.isNaN(numberValue)) {
        throw new envalid_1.EnvError(`Invalid number: "${input}"`);
    }
    if (options.integer && !Number.isInteger(numberValue)) {
        throw new envalid_1.EnvError(`Invalid integer: "${input}"`);
    }
    if (options.min && numberValue < options.min) {
        throw new envalid_1.EnvError(`Number is smaller than min: "${input}"`);
    }
    if (options.max && numberValue > options.max) {
        throw new envalid_1.EnvError(`Number is bigger than max: "${input}"`);
    }
    return numberValue;
});
exports.number = number;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filterNullish = filterNullish;
exports.filterNullishAndEmpty = filterNullishAndEmpty;
const nullish_1 = __webpack_require__(13);
function filterNullish(value) {
    return !(0, nullish_1.isNullish)(value);
}
function filterNullishAndEmpty(value) {
    return !(0, nullish_1.isNullishOrEmpty)(value);
}


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNullish = isNullish;
exports.isNullishOrEmpty = isNullishOrEmpty;
function isNullish(value) {
    return value === undefined || value === null;
}
function isNullishOrEmpty(value) {
    return isNullish(value) || value.length === 0;
}


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lastNonZeroIndex = lastNonZeroIndex;
/**
 * Returns the index of the last non-zero element in the array.
 * You can optionally specify the index up to which to search.
 *
 * @example
 * lastNonZeroIndex([0, 1, 0, 1, 0, 1]);    // => 5
 * lastNonZeroIndex([0, 1, 0, 1, 0, 0]);    // => 3
 * lastNonZeroIndex([0, 0, 0, 1, 1, 1], 3); // => 3
 * lastNonZeroIndex([1, 0, 0, 0, 1, 1], 3); // => 0
 */
function lastNonZeroIndex(arr, upTo = arr.length) {
    for (let i = upTo - 1; i >= 0; i--) {
        if (arr[i] !== 0)
            return i;
    }
    return -1;
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PriorityQueue = void 0;
var PriorityQueue_1 = __webpack_require__(16);
Object.defineProperty(exports, "PriorityQueue", ({ enumerable: true, get: function () { return PriorityQueue_1.PriorityQueue; } }));


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PriorityQueue = void 0;
class PriorityQueue {
    constructor(priorityGetter) {
        this.priorityGetter = priorityGetter;
        this.queue = [];
    }
    get length() {
        return this.queue.length;
    }
    enqueue(item) {
        this.queue.splice(this.indexOf(item), 0, item);
    }
    dequeue(filter) {
        if (typeof filter === 'undefined') {
            return this.queue.shift();
        }
        const index = this.queue.findIndex(filter);
        if (index === -1) {
            return undefined;
        }
        return this.queue.splice(index, 1)[0];
    }
    peek() {
        return this.queue[0];
    }
    delete(filter) {
        const index = this.queue.findIndex(filter);
        if (index !== -1) {
            this.queue.splice(index, 1);
        }
    }
    filter(filter) {
        return this.queue.filter(filter);
    }
    indexOf(item) {
        let low = 0;
        let high = this.queue.length - 1;
        const itemPriority = this.priorityGetter(item);
        while (low <= high) {
            const mid = (low + high) >>> 1;
            const midPriority = this.priorityGetter(this.queue[mid]);
            for (const [i, itemValue] of itemPriority.entries()) {
                const midValue = midPriority[i];
                if (itemValue === undefined || itemValue === null) {
                    low = mid + 1;
                    break;
                }
                if (midValue === undefined || midValue === null) {
                    high = mid - 1;
                    break;
                }
                if (midValue < itemValue) {
                    high = mid - 1;
                    break;
                }
                else if (midValue > itemValue || (midValue === itemValue && i === itemPriority.length - 1)) {
                    low = mid + 1;
                    break;
                }
            }
        }
        return low;
    }
}
exports.PriorityQueue = PriorityQueue;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(18), exports);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRange = getRange;
function getRange(start, end) {
    const result = [];
    const currentDate = new Date(start);
    while (currentDate <= end) {
        const formattedDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        result.push(formattedDate);
        currentDate.setDate(currentDate.getDate() + 1); // Increment by one day
    }
    return result;
}


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssetEnum = void 0;
var AssetEnum;
(function (AssetEnum) {
    AssetEnum["ADA"] = "ADA";
    AssetEnum["APT"] = "APT";
    AssetEnum["AUD"] = "AUD";
    AssetEnum["AVAX"] = "AVAX";
    AssetEnum["BCH"] = "BCH";
    AssetEnum["BNB"] = "BNB";
    AssetEnum["BONK"] = "BONK";
    AssetEnum["BTC"] = "BTC";
    AssetEnum["DAI"] = "DAI";
    AssetEnum["DOGE"] = "DOGE";
    AssetEnum["DOT"] = "DOT";
    AssetEnum["ETC"] = "ETC";
    AssetEnum["ETH"] = "ETH";
    AssetEnum["EUR"] = "EUR";
    AssetEnum["FET"] = "FET";
    AssetEnum["GBP"] = "GBP";
    AssetEnum["HBAR"] = "HBAR";
    AssetEnum["ICP"] = "ICP";
    AssetEnum["LINK"] = "LINK";
    AssetEnum["LTC"] = "LTC";
    AssetEnum["NEAR"] = "NEAR";
    AssetEnum["PEOPLE"] = "PEOPLE";
    AssetEnum["PEPE"] = "PEPE";
    AssetEnum["RENDER"] = "RENDER";
    AssetEnum["SHIB"] = "SHIB";
    AssetEnum["SOL"] = "SOL";
    AssetEnum["SUI"] = "SUI";
    AssetEnum["TRX"] = "TRX";
    AssetEnum["TRY"] = "TRY";
    AssetEnum["UNI"] = "UNI";
    AssetEnum["USD"] = "USD";
    AssetEnum["USDC"] = "USDC";
    AssetEnum["USDT"] = "USDT";
    AssetEnum["WIF"] = "WIF";
    AssetEnum["XLM"] = "XLM";
    AssetEnum["XRP"] = "XRP";
    AssetEnum["TAO"] = "TAO";
})(AssetEnum || (exports.AssetEnum = AssetEnum = {}));


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.currentVersion = exports.AstVersion = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
var AstVersion;
(function (AstVersion) {
    AstVersion["V1_0"] = "1.0";
})(AstVersion || (exports.AstVersion = AstVersion = {}));
/* eslint-enable @typescript-eslint/naming-convention */
exports.currentVersion = AstVersion.V1_0;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrokerEnum = void 0;
var BrokerEnum;
(function (BrokerEnum) {
    BrokerEnum["COINBASE"] = "COINBASE";
    BrokerEnum["BINANCE"] = "BINANCE";
    BrokerEnum["KRAKEN"] = "KRAKEN";
})(BrokerEnum || (exports.BrokerEnum = BrokerEnum = {}));


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlowStatus = void 0;
var FlowStatus;
(function (FlowStatus) {
    FlowStatus["Active"] = "active";
    FlowStatus["Draft"] = "draft";
})(FlowStatus || (exports.FlowStatus = FlowStatus = {}));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphNodeType = void 0;
var GraphNodeType;
(function (GraphNodeType) {
    GraphNodeType["IndicatorInput"] = "IndicatorInput";
    GraphNodeType["StrategyInput"] = "StrategyInput";
    GraphNodeType["LiteralInput"] = "LiteralInput";
    GraphNodeType["Expression"] = "Expression";
    GraphNodeType["IfStatement"] = "IfStatement";
    GraphNodeType["IfConsequent"] = "IfConsequent";
    GraphNodeType["NotificationEffect"] = "NotificationEffect";
    GraphNodeType["OrderEffect"] = "OrderEffect";
})(GraphNodeType || (exports.GraphNodeType = GraphNodeType = {}));


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IndicatorEnum = void 0;
var IndicatorEnum;
(function (IndicatorEnum) {
    IndicatorEnum["SMA"] = "SMA";
    IndicatorEnum["EMA"] = "EMA";
    IndicatorEnum["RSI"] = "RSI";
    IndicatorEnum["MACD"] = "MACD";
    IndicatorEnum["BollingerBands"] = "BollingerBands";
    IndicatorEnum["ATR"] = "ATR";
    IndicatorEnum["Hype"] = "Hype";
})(IndicatorEnum || (exports.IndicatorEnum = IndicatorEnum = {}));


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JarvisConversationRoleEnum = void 0;
var JarvisConversationRoleEnum;
(function (JarvisConversationRoleEnum) {
    JarvisConversationRoleEnum["User"] = "user";
    JarvisConversationRoleEnum["Assistant"] = "assistant";
})(JarvisConversationRoleEnum || (exports.JarvisConversationRoleEnum = JarvisConversationRoleEnum = {}));


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PluggableTypeEnum = void 0;
var PluggableTypeEnum;
(function (PluggableTypeEnum) {
    PluggableTypeEnum["String"] = "String";
    PluggableTypeEnum["Boolean"] = "Boolean";
    PluggableTypeEnum["Numeric"] = "Numeric";
})(PluggableTypeEnum || (exports.PluggableTypeEnum = PluggableTypeEnum = {}));


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgramActionEnum = void 0;
var ProgramActionEnum;
(function (ProgramActionEnum) {
    ProgramActionEnum["Notify"] = "Notify";
    ProgramActionEnum["PlaceOrder"] = "PlaceOrder";
})(ProgramActionEnum || (exports.ProgramActionEnum = ProgramActionEnum = {}));


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrategyParameterEnum = void 0;
var StrategyParameterEnum;
(function (StrategyParameterEnum) {
    StrategyParameterEnum["QuoteBudget"] = "quoteBudget";
    StrategyParameterEnum["BaseBudget"] = "baseBudget";
    StrategyParameterEnum["Broker"] = "broker";
    StrategyParameterEnum["Quote"] = "quote";
    StrategyParameterEnum["Base"] = "base";
})(StrategyParameterEnum || (exports.StrategyParameterEnum = StrategyParameterEnum = {}));


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrategyType = void 0;
var StrategyType;
(function (StrategyType) {
    StrategyType["PAPER"] = "PAPER";
    StrategyType["LIVE"] = "LIVE";
})(StrategyType || (exports.StrategyType = StrategyType = {}));


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.breadthFirstSearch = breadthFirstSearch;
function breadthFirstSearch(edges, start, end, serializer = (x) => (typeof x === 'string' ? x : JSON.stringify(x))) {
    const adjacencyMatrix = new Map();
    // Build the adjacency list
    for (const [from, to] of edges) {
        if (!adjacencyMatrix.has(from))
            adjacencyMatrix.set(from, []);
        if (!adjacencyMatrix.has(to))
            adjacencyMatrix.set(to, []);
        adjacencyMatrix.get(from).push(to);
    }
    const queue = [[start, []]];
    const visited = new Set();
    // BFS
    while (queue.length > 0) {
        const [current, path] = queue.shift();
        if (current === end)
            return path;
        const serialized = serializer(current);
        if (!visited.has(serialized)) {
            visited.add(serialized);
            for (const neighbor of adjacencyMatrix.get(current) ?? []) {
                queue.push([neighbor, [...path, [current, neighbor]]]);
            }
        }
    }
    return [];
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnaryExpressionMetadata = exports.StrategyInputMetadata = exports.LiteralInputMetadata = exports.IndicatorInputMetadata = exports.BinaryExpressionMetadata = void 0;
const tslib_1 = __webpack_require__(4);
exports.BinaryExpressionMetadata = tslib_1.__importStar(__webpack_require__(35));
exports.IndicatorInputMetadata = tslib_1.__importStar(__webpack_require__(36));
exports.LiteralInputMetadata = tslib_1.__importStar(__webpack_require__(37));
exports.StrategyInputMetadata = tslib_1.__importStar(__webpack_require__(38));
exports.UnaryExpressionMetadata = tslib_1.__importStar(__webpack_require__(39));


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperatorToSymbol = exports.OperatorToResultType = exports.OperatorToArgumentType = exports.OperatorEnum = void 0;
const enums_1 = __webpack_require__(19);
var OperatorEnum;
(function (OperatorEnum) {
    OperatorEnum["Addition"] = "Addition";
    OperatorEnum["Subtraction"] = "Subtraction";
    OperatorEnum["Multiplication"] = "Multiplication";
    OperatorEnum["Division"] = "Division";
    OperatorEnum["WholeDivision"] = "WholeDivision";
    OperatorEnum["Modulo"] = "Modulo";
    OperatorEnum["Percent"] = "Percent";
    OperatorEnum["Exponentiation"] = "Exponentiation";
    OperatorEnum["Minimum"] = "Minimum";
    OperatorEnum["Maximum"] = "Maximum";
    OperatorEnum["Mean"] = "Mean";
    OperatorEnum["GreaterThan"] = "GreaterThan";
    OperatorEnum["GreaterThanEqual"] = "GreaterThanEqual";
    OperatorEnum["LessThan"] = "LessThan";
    OperatorEnum["LessThanEqual"] = "LessThanEqual";
    OperatorEnum["Equal"] = "Equal";
    OperatorEnum["NotEqual"] = "NotEqual";
    OperatorEnum["And"] = "And";
    OperatorEnum["Or"] = "Or";
})(OperatorEnum || (exports.OperatorEnum = OperatorEnum = {}));
exports.OperatorToArgumentType = {
    [OperatorEnum.Addition]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Subtraction]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Multiplication]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Division]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.WholeDivision]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Modulo]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Percent]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Exponentiation]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Minimum]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Maximum]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Mean]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.GreaterThan]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.GreaterThanEqual]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.LessThan]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.LessThanEqual]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Equal]: [enums_1.PluggableTypeEnum.Numeric, enums_1.PluggableTypeEnum.String],
    [OperatorEnum.NotEqual]: [enums_1.PluggableTypeEnum.Numeric, enums_1.PluggableTypeEnum.String],
    [OperatorEnum.And]: [enums_1.PluggableTypeEnum.Boolean],
    [OperatorEnum.Or]: [enums_1.PluggableTypeEnum.Boolean],
};
exports.OperatorToResultType = {
    [OperatorEnum.Addition]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Subtraction]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Multiplication]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Division]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.WholeDivision]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Modulo]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Percent]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Exponentiation]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Minimum]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Maximum]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Mean]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.GreaterThan]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.GreaterThanEqual]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.LessThan]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.LessThanEqual]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.Equal]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.NotEqual]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.And]: enums_1.PluggableTypeEnum.Boolean,
    [OperatorEnum.Or]: enums_1.PluggableTypeEnum.Boolean,
};
exports.OperatorToSymbol = {
    [OperatorEnum.Addition]: '+',
    [OperatorEnum.Subtraction]: '-',
    [OperatorEnum.Multiplication]: '*',
    [OperatorEnum.Division]: '/',
    [OperatorEnum.WholeDivision]: '//',
    [OperatorEnum.Modulo]: '%',
    [OperatorEnum.Percent]: '%',
    [OperatorEnum.Exponentiation]: '**',
    [OperatorEnum.Minimum]: 'min',
    [OperatorEnum.Maximum]: 'max',
    [OperatorEnum.Mean]: 'mean',
    [OperatorEnum.GreaterThan]: '>',
    [OperatorEnum.GreaterThanEqual]: '>=',
    [OperatorEnum.LessThan]: '<',
    [OperatorEnum.LessThanEqual]: '<=',
    [OperatorEnum.Equal]: '==',
    [OperatorEnum.NotEqual]: '!=',
    [OperatorEnum.And]: '&&',
    [OperatorEnum.Or]: '||',
};


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IndicatorToResultType = exports.IndicatorEnum = void 0;
const enums_1 = __webpack_require__(19);
exports.IndicatorEnum = enums_1.IndicatorEnum;
exports.IndicatorToResultType = {
    [exports.IndicatorEnum.SMA]: { sma: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.EMA]: { ema: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.RSI]: { rsi: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.MACD]: { macd: enums_1.PluggableTypeEnum.Numeric, signal: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.BollingerBands]: {
        upper: enums_1.PluggableTypeEnum.Numeric,
        lower: enums_1.PluggableTypeEnum.Numeric,
        middle: enums_1.PluggableTypeEnum.Numeric,
    },
    [exports.IndicatorEnum.ATR]: { atr: enums_1.PluggableTypeEnum.Numeric },
    [exports.IndicatorEnum.Hype]: { hype: enums_1.PluggableTypeEnum.Numeric },
};


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigurableEnum = void 0;
var ConfigurableEnum;
(function (ConfigurableEnum) {
    ConfigurableEnum["Configurable"] = "Configurable";
    ConfigurableEnum["Fixed"] = "Fixed";
})(ConfigurableEnum || (exports.ConfigurableEnum = ConfigurableEnum = {}));


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrategyInputToResultType = exports.ParametersEnum = void 0;
const enums_1 = __webpack_require__(19);
exports.ParametersEnum = enums_1.StrategyParameterEnum;
exports.StrategyInputToResultType = {
    [enums_1.StrategyParameterEnum.Quote]: enums_1.PluggableTypeEnum.String,
    [enums_1.StrategyParameterEnum.Base]: enums_1.PluggableTypeEnum.String,
    [enums_1.StrategyParameterEnum.Broker]: enums_1.PluggableTypeEnum.String,
    [enums_1.StrategyParameterEnum.QuoteBudget]: enums_1.PluggableTypeEnum.Numeric,
    [enums_1.StrategyParameterEnum.BaseBudget]: enums_1.PluggableTypeEnum.Numeric,
};


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperatorToSymbol = exports.OperatorToResultType = exports.OperatorToArgumentType = exports.OperatorEnum = void 0;
const enums_1 = __webpack_require__(19);
var OperatorEnum;
(function (OperatorEnum) {
    OperatorEnum["AdditiveInverse"] = "AdditiveInverse";
    OperatorEnum["MultiplicativeInverse"] = "MultiplicativeInverse";
    OperatorEnum["SquareRoot"] = "SquareRoot";
    OperatorEnum["Floor"] = "Floor";
    OperatorEnum["Ceil"] = "Ceil";
    OperatorEnum["Round"] = "Round";
    OperatorEnum["Not"] = "Not";
})(OperatorEnum || (exports.OperatorEnum = OperatorEnum = {}));
exports.OperatorToArgumentType = {
    [OperatorEnum.AdditiveInverse]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.MultiplicativeInverse]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.SquareRoot]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Floor]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Ceil]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Round]: [enums_1.PluggableTypeEnum.Numeric],
    [OperatorEnum.Not]: [enums_1.PluggableTypeEnum.Boolean],
};
exports.OperatorToResultType = {
    [OperatorEnum.AdditiveInverse]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.MultiplicativeInverse]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.SquareRoot]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Floor]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Ceil]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Round]: enums_1.PluggableTypeEnum.Numeric,
    [OperatorEnum.Not]: enums_1.PluggableTypeEnum.Boolean,
};
exports.OperatorToSymbol = {
    [OperatorEnum.AdditiveInverse]: '-',
    [OperatorEnum.MultiplicativeInverse]: '1/',
    [OperatorEnum.SquareRoot]: '√',
    [OperatorEnum.Floor]: '⌊⌋',
    [OperatorEnum.Ceil]: '⌈⌉',
    [OperatorEnum.Round]: '⌊⌉',
    [OperatorEnum.Not]: '!',
};


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noCase = noCase;
exports.camelCase = camelCase;
exports.pascalCase = pascalCase;
exports.titleCase = titleCase;
exports.screamingSnakeCase = screamingSnakeCase;
exports.dotCase = dotCase;
exports.kebabCase = kebabCase;
exports.snakeCase = snakeCase;
// Regexps involved with splitting words in various case formats.
const SPLIT_LOWER_UPPER_RE = /(?<lower>[\p{Ll}\d])(?<upper>\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(?<upper1>\p{Lu})(?<upper2>[\p{Lu}][\p{Ll}])/gu;
// Regexp involved with stripping non-word characters from the result.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
function split(value) {
    let result = value.trim();
    result = result.replaceAll(SPLIT_LOWER_UPPER_RE, '$1\0$2').replaceAll(SPLIT_UPPER_UPPER_RE, '$1\0$2');
    result = result.replaceAll(DEFAULT_STRIP_REGEXP, '\0');
    let start = 0;
    let end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === '\0')
        start++;
    if (start === end)
        return [];
    while (result.charAt(end - 1) === '\0')
        end--;
    return result.slice(start, end).split(/\0/g);
}
function capitalCaseTransformFactory() {
    return (word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
}
function pascalCaseTransformFactory() {
    return (word, index) => {
        const char0 = word[0];
        const initial = index > 0 && char0 >= '0' && char0 <= '9' ? `_${char0}` : char0.toUpperCase();
        return initial + word.slice(1).toLowerCase();
    };
}
function splitPrefixSuffix(input) {
    let prefixIndex = 0;
    let suffixIndex = input.length;
    while (prefixIndex < input.length) {
        const char = input.charAt(prefixIndex);
        if (char !== '')
            break;
        prefixIndex++;
    }
    while (suffixIndex > prefixIndex) {
        const index = suffixIndex - 1;
        const char = input.charAt(index);
        if (char !== '')
            break;
        suffixIndex = index;
    }
    return [input.slice(0, prefixIndex), split(input.slice(prefixIndex, suffixIndex)), input.slice(suffixIndex)];
}
/**
 * Convert a string to space separated lower case (`foo bar`).
 */
function noCase(input, delimiter = ' ') {
    const [prefix, words, suffix] = splitPrefixSuffix(input);
    return prefix + words.map((w) => w.toLowerCase()).join(delimiter) + suffix;
}
/**
 * Convert a string to camel case (`fooBar`).
 */
function camelCase(input) {
    const [prefix, words, suffix] = splitPrefixSuffix(input);
    const transform = pascalCaseTransformFactory();
    return (prefix + words.map((word, index) => (index === 0 ? word.toLowerCase() : transform(word, index))).join('') + suffix);
}
/**
 * Convert a string to pascal case (`FooBar`).
 */
function pascalCase(input) {
    const [prefix, words, suffix] = splitPrefixSuffix(input);
    const transform = pascalCaseTransformFactory();
    return prefix + words.map(transform).join('') + suffix;
}
/**
 * Convert a string to title case (`Foo Bar`).
 */
function titleCase(input) {
    const [prefix, words, suffix] = splitPrefixSuffix(input);
    return prefix + words.map(capitalCaseTransformFactory()).join(' ') + suffix;
}
/**
 * Convert a string to screaming snake case (`FOO_BAR`).
 */
function screamingSnakeCase(input) {
    const [prefix, words, suffix] = splitPrefixSuffix(input);
    return prefix + words.map((x) => x.toUpperCase()).join('_') + suffix;
}
/**
 * Convert a string to dot case (`foo.bar`).
 */
function dotCase(input) {
    return noCase(input, '.');
}
/**
 * Convert a string to kebab case (`foo-bar`).
 */
function kebabCase(input) {
    return noCase(input, '-');
}
/**
 * Convert a string to snake case (`foo_bar`).
 */
function snakeCase(input) {
    return noCase(input, '_');
}


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isIP = exports.isFQDN = void 0;
var isFQDN_1 = __webpack_require__(47);
Object.defineProperty(exports, "isFQDN", ({ enumerable: true, get: function () { return isFQDN_1.isFQDN; } }));
var isIP_1 = __webpack_require__(48);
Object.defineProperty(exports, "isIP", ({ enumerable: true, get: function () { return isIP_1.isIP; } }));


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFQDN = isFQDN;
function isFQDN(input) {
    if (input.length === 0)
        return false;
    const parts = input.split('.');
    for (const part of parts) {
        if (!/^[\da-z\u00A1-\uFFFF-]+$/i.test(part) ||
            /[\uFF01-\uFF5E]/.test(part) ||
            part.startsWith('-') ||
            part.at(-1) === '-')
            return false;
    }
    return true;
}


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isIP = isIP;
const ipv4Regex = /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
function isIP(input) {
    return ipv4Regex.test(input);
}


/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("envalid");

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// import { ChatMistralAI } from '@langchain/mistralai';
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mistralChain = void 0;
const openai_1 = __webpack_require__(51);
const env_1 = __webpack_require__(7);
const impact_json_module_1 = __webpack_require__(52);
exports.mistralChain = new openai_1.ChatOpenAI({
    model: 'gpt-4o-mini',
    temperature: 0,
    apiKey: env_1.env.OPEN_AI_KEY,
}).withStructuredOutput(impact_json_module_1.impactAnalysisSchema);


/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = require("@langchain/openai");

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.impactAnalysisSchema = void 0;
exports.impactAnalysisSchema = {
    title: 'impactAnalysisSchema',
    description: 'A JSON object representing the financial impact of topics',
    type: 'object',
    properties: {
        result: {
            type: 'object',
            description: 'A dictionary of financial topics with detailed description and impact scores',
            additionalProperties: {
                type: 'object',
                properties: {
                    description: {
                        type: 'string',
                        description: 'Comprehensive description of financial topic and impact timeframe',
                    },
                    score: {
                        type: 'number',
                        minimum: -1,
                        maximum: 1,
                        description: 'Numerical impact score from -1 (very negative) to 1 (very positive)',
                    },
                },
                required: ['description', 'score'],
            },
        },
    },
    required: ['result'],
};


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForbesCrawlerService = void 0;
const tslib_1 = __webpack_require__(4);
const readability_1 = __webpack_require__(54);
const common_1 = __webpack_require__(1);
const dayjs_1 = tslib_1.__importDefault(__webpack_require__(55));
const customParseFormat_1 = tslib_1.__importDefault(__webpack_require__(56));
const timezone_1 = tslib_1.__importDefault(__webpack_require__(57));
const jsdom_1 = __webpack_require__(58);
const env_1 = __webpack_require__(7);
const crawler_service_1 = __webpack_require__(59);
dayjs_1.default.extend(customParseFormat_1.default);
dayjs_1.default.extend(timezone_1.default);
// Créer une console virtuelle pour ignorer les erreurs CSS
const virtualConsole = new jsdom_1.VirtualConsole();
virtualConsole.on('error', () => {
    // Ignorer les erreurs (notamment les erreurs CSS)
});
let ForbesCrawlerService = class ForbesCrawlerService extends crawler_service_1.CrawlerService {
    async getUrls() {
        const re = /https:\/\/www\.forbes\.com\/sites\/[\dA-Za-z-]+\/\d{4}\/\d{2}\/\d{2}\/[\dA-Za-z-]+\//;
        const htmlLinks = [];
        await Promise.all(env_1.env.CHIPEUR_FORBES_URLS.map(async (forbesUrl) => {
            const req = await fetch(forbesUrl);
            const dom = new jsdom_1.JSDOM(await req.text(), { virtualConsole }).window.document;
            htmlLinks.push(...[...dom.querySelectorAll('a[data-ga-track]')]
                .map((elem) => elem.getAttribute('href') ?? '')
                .filter((href) => re.test(href)));
        }));
        return [...new Set(htmlLinks)];
    }
    async getArticle(url) {
        common_1.Logger.log(`📖 Scraping article: ${url}`);
        const req = await fetch(url);
        const dom = new jsdom_1.JSDOM(await req.text(), { virtualConsole });
        const article = new readability_1.Readability(dom.window.document).parse();
        if (article === null) {
            // throw new Error('Article is null');
            return {
                title: '',
                text: '',
                url,
                publicationDate: this.getDate(dom, url),
            };
        }
        return {
            title: article.title,
            text: article?.textContent ?? '',
            url,
            publicationDate: this.getDate(dom, url),
        };
    }
    getDate(dom, url) {
        const dateElements = [
            ...dom.window.document.querySelectorAll('div.top-contrib-block time, div.top-contrib-block__premium time'),
        ];
        const dateText = dateElements
            .map((node) => node.textContent ?? '')
            .join(' ');
        common_1.Logger.log(`🔍 Date text found for ${url}: "${dateText}"`);
        if (!dateText) {
            common_1.Logger.warn(`⚠️  No date found in article ${url}, using current date as fallback`);
            return new Date();
        }
        const parsedDate = (0, dayjs_1.default)(dateText, 'MMM D, YYYY, hh:mma', false);
        if (!parsedDate.isValid()) {
            common_1.Logger.warn(`⚠️  Could not parse date: "${dateText}" for ${url}, using current date as fallback`);
            return new Date();
        }
        common_1.Logger.log(`✅ Parsed date: ${parsedDate.toISOString()}`);
        return parsedDate.toDate();
    }
};
exports.ForbesCrawlerService = ForbesCrawlerService;
exports.ForbesCrawlerService = ForbesCrawlerService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ForbesCrawlerService);


/***/ }),
/* 54 */
/***/ ((module) => {

module.exports = require("@mozilla/readability");

/***/ }),
/* 55 */
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("jsdom");

/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrawlerService = void 0;
const common_1 = __webpack_require__(1);
class CrawlerService {
    async crawl(startDate, endDate) {
        common_1.Logger.log(`🔍 Starting crawl from ${startDate.toISOString()} to ${endDate.toISOString()}`);
        const urls = await this.getUrls();
        common_1.Logger.log(`🔗 Found ${urls.length} URL(s) to scrape`);
        const articles = await Promise.all(urls.map(async (url) => await this.getArticle(url)));
        common_1.Logger.log(`📄 Scraped ${articles.length} article(s)`);
        // Log des dates pour debug
        articles.forEach((article, index) => {
            const dateStr = article.publicationDate instanceof Date && !isNaN(article.publicationDate.getTime())
                ? article.publicationDate.toISOString()
                : 'Invalid Date';
            common_1.Logger.log(`Article ${index + 1}: "${article.title.substring(0, 50)}..." - Date: ${dateStr}`);
        });
        const filteredArticles = articles.filter((article) => article.publicationDate >= startDate && article.publicationDate <= endDate);
        common_1.Logger.log(`✅ ${filteredArticles.length} article(s) match the date range`);
        return filteredArticles;
    }
}
exports.CrawlerService = CrawlerService;


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcExceptionFilter = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const microservices_1 = __webpack_require__(61);
const rxjs_1 = __webpack_require__(62);
let GrpcExceptionFilter = class GrpcExceptionFilter {
    catch(exception) {
        return (0, rxjs_1.throwError)(() => exception.getError());
    }
};
exports.GrpcExceptionFilter = GrpcExceptionFilter;
exports.GrpcExceptionFilter = GrpcExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(microservices_1.RpcException)
], GrpcExceptionFilter);


/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map