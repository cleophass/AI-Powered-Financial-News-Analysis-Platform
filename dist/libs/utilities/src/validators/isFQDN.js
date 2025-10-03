"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=isFQDN.js.map