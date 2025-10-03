import { PriorityQueue } from './PriorityQueue'; // Adjust this import based on your file structure

describe('PriorityQueue', () => {
  interface Item {
    name: string;
    priority: number;
  }

  let priorityQueue: PriorityQueue<Item>;

  beforeEach(() => {
    priorityQueue = new PriorityQueue<Item>((item) => [item.priority]);
  });

  describe('constructor', () => {
    it('should start with an empty queue', () => {
      expect(priorityQueue.length).toBe(0);
    });
  });

  describe('peek', () => {
    it('should return the item with the highest priority', () => {
      const item1 = { name: 'Item 1', priority: 3 };
      const item2 = { name: 'Item 2', priority: 2 };

      priorityQueue.enqueue(item1);
      priorityQueue.enqueue(item2);

      expect(priorityQueue.peek()).toEqual(item1);
    });

    it('should return undefined when peeking an empty queue', () => {
      expect(priorityQueue.peek()).toBeUndefined();
    });
  });

  describe('length', () => {
    it('should return the number of items in the queue', () => {
      const item1 = { name: 'Item 1', priority: 3 };
      const item2 = { name: 'Item 2', priority: 2 };

      priorityQueue.enqueue(item1);
      priorityQueue.enqueue(item2);

      expect(priorityQueue.length).toBe(2);
    });

    it('should return 0 for an empty queue', () => {
      expect(priorityQueue.length).toBe(0);
    });
  });

  describe('dequeue', () => {
    it('should return undefined when dequeueing from an empty queue', () => {
      expect(priorityQueue.dequeue()).toBeUndefined();
    });

    it('should dequeue items that pass the filter', () => {
      const complexQueue = new PriorityQueue<{ name: string; filter: boolean; priority: number }>((item) => [
        item.priority,
      ]);

      const item1 = { name: 'Item 1', priority: 3, filter: false };
      const item2 = { name: 'Item 2', priority: 2, filter: true };

      complexQueue.enqueue(item1);
      complexQueue.enqueue(item2);

      expect(complexQueue.dequeue((item) => item.filter)).toEqual(item2);
    });

    it('should dequeue undefined if nothing pass the filter', () => {
      const complexQueue = new PriorityQueue<{ name: string; filter: boolean; priority: number }>((item) => [
        item.priority,
      ]);

      const item1 = { name: 'Item 1', priority: 3, filter: false };
      const item2 = { name: 'Item 2', priority: 2, filter: true };

      complexQueue.enqueue(item1);
      complexQueue.enqueue(item2);

      expect(complexQueue.dequeue((item) => item.name === 'Item 3')).toEqual(undefined);
    });
  });

  describe('enqueue', () => {
    it('should dequeue items in correct priority order', () => {
      const item1 = { name: 'Item 1', priority: 3 };
      const item2 = { name: 'Item 2', priority: 2 };
      const item3 = { name: 'Item 3', priority: 1 };

      priorityQueue.enqueue(item1);
      priorityQueue.enqueue(item3);
      priorityQueue.enqueue(item2);

      expect(priorityQueue.dequeue()).toEqual(item1);
      expect(priorityQueue.dequeue()).toEqual(item2);
      expect(priorityQueue.dequeue()).toEqual(item3);
    });

    it('should return undefined when dequeueing from an empty queue', () => {
      expect(priorityQueue.dequeue()).toBeUndefined();
    });

    it('should handle complex priority getters with multiple fields', () => {
      // Using multiple fields for priority sorting
      const complexQueue = new PriorityQueue<{ name: string; age: number; priority: number }>((item) => [
        item.priority,
        item.age,
      ]);

      const item1 = { name: 'Item 1', age: 25, priority: 2 };
      const item2 = { name: 'Item 2', age: 30, priority: 2 }; // Same priority but higher age
      const item3 = { name: 'Item 3', age: 22, priority: 2 };

      complexQueue.enqueue(item1);
      complexQueue.enqueue(item2);
      complexQueue.enqueue(item3);

      expect(complexQueue.dequeue()).toEqual(item2); // H ighest priority, highest age
      expect(complexQueue.dequeue()).toEqual(item1); // Lower age within the same priority
      expect(complexQueue.dequeue()).toEqual(item3);
    });

    it('shoud handle multiple task with the same priority', () => {
      const item1 = { name: 'Item 1', priority: 2 };
      const item2 = { name: 'Item 2', priority: 2 };
      const item3 = { name: 'Item 3', priority: 2 };

      priorityQueue.enqueue(item1);
      priorityQueue.enqueue(item3);
      priorityQueue.enqueue(item2);

      expect(priorityQueue.dequeue()).toEqual(item1); // First in, first out
      expect(priorityQueue.dequeue()).toEqual(item3);
      expect(priorityQueue.dequeue()).toEqual(item2);
    });

    it('should correctly handle items with null or undefined priorities', () => {
      const queueWithNullablePriority = new PriorityQueue<{ name: string; priority: number | null | undefined }>(
        (item) => [item.priority],
      );

      const item1 = { name: 'Item 1', priority: undefined };
      const item2 = { name: 'Item 2', priority: 5 };
      const item3 = { name: 'Item 3', priority: null };

      queueWithNullablePriority.enqueue(item1);
      queueWithNullablePriority.enqueue(item2);
      queueWithNullablePriority.enqueue(item3);

      expect(queueWithNullablePriority.dequeue()).toEqual(item2); // Defined priority should come first
      expect(queueWithNullablePriority.dequeue()).toEqual(item1); // Undefined or null priority handled later
      expect(queueWithNullablePriority.dequeue()).toEqual(item3);
    });
  });

  describe('delete', () => {
    it('should remove items from the queue', () => {
      const item1 = { name: 'Item 1', priority: 3 };
      const item2 = { name: 'Item 2', priority: 2 };

      priorityQueue.enqueue(item1);
      priorityQueue.enqueue(item2);

      priorityQueue.delete((item) => item === item1);

      expect(priorityQueue.dequeue()).toEqual(item2);
    });

    it('should not remove items that do not match the filter', () => {
      const item1 = { name: 'Item 1', priority: 3 };
      const item2 = { name: 'Item 2', priority: 2 };

      priorityQueue.enqueue(item1);
      priorityQueue.enqueue(item2);

      priorityQueue.delete((item) => item.name === 'Item 3');

      expect(priorityQueue.dequeue()).toEqual(item1);
      expect(priorityQueue.dequeue()).toEqual(item2);
    });
  });

  describe('filter', () => {
    it('should return items that match the filter', () => {
      const item1 = { name: 'Item 1', priority: 3 };
      const item2 = { name: 'Item 2', priority: 2 };

      priorityQueue.enqueue(item1);
      priorityQueue.enqueue(item2);

      expect(priorityQueue.filter((item) => item.priority === 2)).toEqual([item2]);
    });

    it('should return an empty array if no items match the filter', () => {
      const item1 = { name: 'Item 1', priority: 3 };
      const item2 = { name: 'Item 2', priority: 2 };

      priorityQueue.enqueue(item1);
      priorityQueue.enqueue(item2);

      expect(priorityQueue.filter((item) => item.priority === 1)).toEqual([]);
    });
  });
});
