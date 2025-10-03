"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=PriorityQueue.js.map