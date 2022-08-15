// https://www.javascripttutorial.net/javascript-queue/
// implementation Queue using Object

class Queue {
    constructor() {
        this.elements = {};
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
        const result = new Queue();
        while (n !== 0) {
            result.enqueue(this.elements[this.head]);
            delete this.elements[this.head];
            this.head++;
            this.size--;
            n--;
        }
        return result;
    }
    front() {
        return this.elements[this.head];
    }
    rear() {
        return this.elements[this.tail];
        // return this.elements[this.size-1];
    }
    insertBefore(element, key) {
        let temp = ++this.tail;
        this.size++;
        while (temp !== key) {
            this.elements[temp] = this.elements[temp - 1];
            temp--;
        }
        this.elements[key] = element;
        return this.size;
    }
    insertAfter(element, key) {
        this.insertBefore(element, key + 1);
        return this.size;
    }
    delete(element, index) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
        // Object.getOwnPropertyDescriptor(this.elements, index).configurable;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
        // "use strict";
        // https://stackoverflow.com/questions/10480108/is-there-any-way-to-check-if-strict-mode-is-enforced
        if (this.elements[index] === element) {
            delete this.elements[index];
            this.size--;
            return element;
        }
        else {
            throw new Error("Element is not in queue.");
        }
    }
    indexOf(element) {
        // 1. Object.values() + Array.prototype.indexOf()
        return Object.values(this.elements).indexOf(element);

        // 2. while loop
        // let index = this.head;
        // while (this.elements[index] !== element && index !== this.tail) {
        //     index++;
        // }
        // return index === this.tail ? -1 : index;
    }
    includes(element) {
        return Object.values(this.elements).includes(element);
    }
    max() {
        return Math.max(...Object.values(this.elements));
    }
    min() {
        return Math.min(...Object.values(this.elements));
    }
    // TODO
    sort() {

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
console.log(q.elements); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8 }
console.log(q.size); // 8

console.log(q.dequeue(2));
console.log(q);
console.log(q.elements); // { '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8 }

console.log(q.front()); // 3
console.log(q.rear()); // 8

console.log(q.insertBefore(10, 3)); // 7
console.log(q.insertAfter(100, 5)); // 8
console.log(q);
console.log(q.elements); // { '2': 3, '3': 10, '4': 4, '5': 5, '6': 100, '7': 6, '8': 7, '9': 8 }

console.log(q.delete(4, 4)); // 4

console.log(q.indexOf(10)); // 1
console.log(q.includes(1000)); // false

console.log(q.max()); // 100
console.log(q.min()); // 3

console.log(q.toString()); // {"2":3,"3":10,"5":5,"6":100,"7":6,"8":7,"9":8}

console.log(q.isEmpty()); // false