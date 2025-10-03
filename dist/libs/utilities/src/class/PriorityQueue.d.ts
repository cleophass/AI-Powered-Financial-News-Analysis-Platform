export declare class PriorityQueue<T> {
    private readonly priorityGetter;
    private readonly queue;
    constructor(priorityGetter: (item: T) => Array<number | string | undefined | null>);
    get length(): number;
    enqueue(item: T): void;
    dequeue(filter?: (item: T) => boolean): T | undefined;
    peek(): T | undefined;
    delete(filter: (item: T) => boolean): void;
    filter(filter: (item: T) => boolean): T[];
    private indexOf;
}
