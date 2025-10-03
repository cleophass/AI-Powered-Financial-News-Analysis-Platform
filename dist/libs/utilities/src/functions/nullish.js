"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullish = isNullish;
exports.isNullishOrEmpty = isNullishOrEmpty;
function isNullish(value) {
    return value === undefined || value === null;
}
function isNullishOrEmpty(value) {
    return isNullish(value) || value.length === 0;
}
//# sourceMappingURL=nullish.js.map