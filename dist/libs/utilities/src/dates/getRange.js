"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=getRange.js.map