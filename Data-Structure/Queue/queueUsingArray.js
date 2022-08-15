// FIFO: First In First Out
// linear data structure
// https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/
// implementation Queue using Array

class Queue {
    constructor() {
        this.elements = [];
        this.head = 0;
        this.tail = -1;
        this.size = 0;
    }
    // push elements
    enqueue(...elements) {
        elements.forEach(item => {
            this.elements[++this.tail] = item;
        });
        this.size += elements.length;
        // we can use in chain
        // new Queue.enqueue(1, 2, 3, 4).enqueue(5, 6, 7, 8);
        return this;
    }
    // delete head element(s) one by one and return it(them) as a new Queue
    dequeue(n = 1) {
        this.tail -= n;
        this.size -= n;
        return this.elements.splice(0, n);
    }
    front() {
        return this.elements[this.head];
    }
    rear() {
        return this.elements[this.tail];
        // return this.elements[this.size-1];
    }
    insertBefore(element, index) {
        this.elements.splice(index, 0, element);
        this.tail++;
        this.size++;
        return this.size;
    }
    insertAfter(element, index) {
        this.insertBefore(element, index + 1);
        return this.size;
    }
    delete(element, index) {
        if (this.elements[index] === element) {
            this.elements.splice(index, 1);
            this.tail--;
            this.size--;
            return element;
        }
        else {
            throw new Error("Element is not in queue.");
        }
    }
    indexOf(element) {
        return this.elements.indexOf(element);
    }
    includes(element) {
        return this.elements.includes(element);
    }
    max() {
        return Math.max(...this.elements);
    }
    min() {
        return Math.min(...this.elements);
    }
    sort(func) {
        return this.elements.sort(func);
    }
    toString() {
        // return this.elements.toString(); // [object Object]
        return JSON.stringify(this.elements);
    }
    // TODO
    deepClone() {

    }
    clear() {
        this.elements = {};
        this.head = 0;
        this.tail = -1;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
}

let q = new Queue();

q.enqueue(1, 2, 3, 4).enqueue(5, 6, 7, 8);
console.log(q);
console.log(q.elements); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(q.size); // 8

console.log(q.dequeue(2));
console.log(q);
console.log(q.elements); // [3, 4, 5, 6, 7, 8]

console.log(q.front()); // 3
console.log(q.rear()); // 8

console.log(q.insertBefore(10, 3)); // 7
console.log(q.insertAfter(100, 5)); // 8
console.log(q);
console.log(q.elements); // [3, 4, 5, 10, 6, 7, 100, 8]

console.log(q.delete(4, 1)); // 4

console.log(q.indexOf(10)); // 2
console.log(q.includes(1000)); // false

console.log(q.max()); // 100
console.log(q.min()); // 3

console.log(q.toString()); // [3,5,10,6,7,100,8]

console.log(q.isEmpty()); // false