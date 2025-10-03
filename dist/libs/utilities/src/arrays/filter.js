"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterNullish = filterNullish;
exports.filterNullishAndEmpty = filterNullishAndEmpty;
const nullish_1 = require("../functions/nullish");
function filterNullish(value) {
    return !(0, nullish_1.isNullish)(value);
}
function filterNullishAndEmpty(value) {
    return !(0, nullish_1.isNullishOrEmpty)(value);
}
//# sourceMappingURL=filter.js.map