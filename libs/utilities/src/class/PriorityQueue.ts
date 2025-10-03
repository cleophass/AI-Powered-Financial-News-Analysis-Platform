export class PriorityQueue<T> {
  private readonly queue: T[] = [];

  constructor(private readonly priorityGetter: (item: T) => Array<number | string | undefined | null>) {}

  public get length() {
    return this.queue.length;
  }

  public enqueue(item: T) {
    this.queue.splice(this.indexOf(item), 0, item);
  }

  public dequeue(filter?: (item: T) => boolean): T | undefined {
    if (typeof filter === 'undefined') {
      return this.queue.shift();
    }

    const index = this.queue.findIndex(filter);

    if (index === -1) {
      return undefined;
    }

    return this.queue.splice(index, 1)[0];
  }

  public peek(): T | undefined {
    return this.queue[0];
  }

  public delete(filter: (item: T) => boolean): void {
    const index = this.queue.findIndex(filter);

    if (index !== -1) {
      this.queue.splice(index, 1);
    }
  }

  public filter(filter: (item: T) => boolean): T[] {
    return this.queue.filter(filter);
  }

  private indexOf(item: T): number {
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
        } else if (midValue > itemValue || (midValue === itemValue && i === itemPriority.length - 1)) {
          low = mid + 1;
          break;
        }
      }
    }

    return low;
  }
}
