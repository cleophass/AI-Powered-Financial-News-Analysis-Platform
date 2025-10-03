"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIP = isIP;
const ipv4Regex = /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
function isIP(input) {
    return ipv4Regex.test(input);
}
//# sourceMappingURL=isIP.js.map