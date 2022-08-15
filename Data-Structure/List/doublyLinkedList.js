// 1. DoublyLinkedListNode class
// class DoublyLinkedListNode {
//     constructor(data) {
//         this.data = data;
//         this.previous = null;
//         this.next = null;
//     }
// }

// 2. CommonJS(CJS) require()
const { DoublyLinkedListNode } = require("./list.js");

// 3. ES Module(ESM) import
// import { DoublyLinkedListNode } from "./list.mjs";

const head = Symbol("head");
const tail = Symbol("tail");

class DoublyLinkedList {
    constructor() {
        this[head] = null;
        this[tail] = null;
        this.size = 0;
    }

    // push data to the tail of DoublyLinkedList
    push(data) {
        let node = new DoublyLinkedListNode(data);
        if (this[head] === null) {
            this[head] = node;
        }
        else {
            this[tail].next = node;
            node.previous = this[tail];
        }
        this.size++;
        this[tail] = node;
        return this;
    }

    // get element at index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError(`Index ${index} does not exist in doubly linked list.`);
        }
        let current = this[head];
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // remove element at index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError(`Index ${index} does not exist in doubly linked list.`);
        }
        if (this[head] === null) {
            throw new Error("Size of doubly linked list is zero");
        }
        let current = this[head];
        // index is zero
        if (index === 0) {
            this[head] = current.next;
            if (this[head] === null) {
                this[tail] === null;
            }
            else {
                this[head].previous = null;
            }
        }
        // index is this.size - 1
        else if (index === this.size - 1) {
            current = this[tail];
            this[tail] = current.previous;
            this[tail].next = null;
        }
        else {
            current = this.get(index);
            current.previous.next = current.next;
            current.next.previous = current.previous;
        }
        this.size--;
        return current;
    }

    // remove data in DoublyLinkedList
    remove(data) {
        const index = [...this].indexOf(data);
        this.size--;
        return this.removeAt(index);
    }

    // insert data at specified index
    // default value of index is this.size, which means push(data)
    insert(data, index = this.size) {
        let node = new DoublyLinkedListNode(data);
        if (index === 0) {
            if (this[head] === null) {
                this[head] = node;
                this[tail] = node;
            }
            else {
                this[head].previous = node;
                node.next = this[head];
                this[head] = node;
            }
        }
        else if (index === this.size) {
            node.previous = this[tail];
            this[tail].next = node;
            this[tail] = node;
        }
        else {
            let previous = this.get(index - 1);
            let next = previous.next;
            previous.next = node;
            node.previous = previous;
            node.next = next;
            next.previous = node;
        }
        this.size++;
        return this;
    }

    // check data is in DoublyLinkedList or not
    has(data) {
        return [...this].indexOf(data) !== -1;
    }

    // find index of data in DoublyLinkedList
    indexOf(data) {
        return [...this].indexOf(data);
    }

    // find last index of data in DoublyLinkedList
    lastIndexOf(data) {
        return [...this].reverse().indexOf(data);
    }

    // reverse DoublyLinkedList
    reverse() {
        let array = [...this].reverse();
        this.clear();
        array.forEach(item => this.push(item));
        return this;
    }

    // remove all elements in DoublyLinkedList
    clear() {
        this[head] = null;
        this[tail] = null;
        this.size = 0;
    }

    // check DoublyLinkedList is empty or not
    isEmpty() {
        return this.size === 0;
    }

    // get head of DoublyLinkedList
    getHead() {
        return this[head];
    }

    // get tail of DoublyLinkedList
    getTail() {
        return this[tail];
    }

    // https://github.com/humanwhocodes/computer-science-in-javascript/blob/master/src/data-structures/doubly-linked-list/doubly-linked-list.js#L631-L660
    [Symbol.iterator]() {
        return this.values();
    }

    * values() {
        let current = this[head];

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }

    // convert DoublyLinkedList to a string representation
    toString() {
        return [...this].toString();
    }
}

// exports class DoublyLinkedList as DoublyLinkedList
exports.DoublyLinkedList = DoublyLinkedList;