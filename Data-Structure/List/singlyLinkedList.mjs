// 1. SinglyLinkedListNode class
// class SinglyLinkedListNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// 2. CommonJS(CJS) require()
// const { SinglyLinkedListNode } = require("./list.js");

// 3. ES Module(ESM) import
import { SinglyLinkedListNode } from "./list.mjs";

const head = Symbol('head');
class SinglyLinkedList {
    constructor() {
        this[head] = null;
        // size
        this.size = 0;
    }

    // push data to the tail of SinglyLinkedList
    push(data) {
        let node = new SinglyLinkedListNode(data);
        // if SinglyLinkedList is empty, just let this[head] be node
        if (this[head] === null) {
            this[head] = node;
        }
        // if not, let the last node in SinglyLinkedList be node
        else {
            let current = this[head];
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        // increment size by 1
        this.size++;
        // return class SinglyLinkedList itself
        // thus, we can use like this: list.push(1).push(2).push(3)
        return this;
    }

    // push multiple data to the tail of SinglyLinkedList
    multiplePush(...data) {
        let length = data.length;
        if (this[head] === null) {
            this[head] = new SinglyLinkedListNode(data[0]);
            let current = this[head];
            for (let i = 1; i < length; i++) {
                current.next = new SinglyLinkedListNode(data[i]);
                current = current.next;
            }
        }
        else {
            let current = this[head];
            while (current.next !== null) {
                current = current.next;
            }
            for (let i = 0; i < length; i++) {
                current.next = new SinglyLinkedListNode(data[i]);
                current = current.next;
            }
        }
        this.size += length;
        return this;
    }

    // get element at index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError(`Index ${index} does not exist in singly linked list.`);
        }
        let current = this[head];
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // remove element at index
    removeAt(index) {
        // index should be a number between 0 and this.size - 1
        if (index < 0 || index >= this.size) {
            throw new RangeError(`Index ${index} does not exist in singly linked list.`);
        }
        let current = this[head];
        if (index === 0) {
            this[head] = current.next; // or: this[head] = this[head].next;
        }
        else {
            // get previous element at (index - 1) of element at index
            let previous = this.get(index - 1);
            // current element to be removed
            current = previous.next;
            // let next element of previous element points to next element of current element
            previous.next = current.next;
        }
        this.size--;
        // return removed element
        return current;
    }

    // remove data in SinglyLinkedList
    remove(data) {
        const index = [...this].indexOf(data);
        this.size--;
        return this.removeAt(index);
    }

    // insert data at specified index
    // default value of index is this.size, which means push(data)
    insert(data, index = this.size) {
        // index should be a number between 0 and this.size
        if (index < 0 || index > this.size) {
            throw new RangeError(`Index ${index} does not exist in singly linked list.`);
        }
        let current = this[head];
        let node = new SinglyLinkedListNode(data);
        if (index === 0) {
            node.next = current;
            this[head] = node;
        }
        else {
            let previous = this.get(index - 1);
            let next = previous.next;
            previous.next = node;
            node.next = next;
        }
        this.size++;
        return this;
    }

    // check data is in SinglyLinkedList or not
    has(data) {
        return [...this].indexOf(data) !== -1;
    }

    // find index of data in SinglyLinkedList
    indexOf(data) {
        return [...this].indexOf(data);
    }

    // find last index of data in SinglyLinkedList
    lastIndexOf(data) {
        return [...this].reverse().indexOf(data);
    }

    // reverse SinglyLinkedList
    reverse() {
        let array = [...this].reverse();
        this.clear();
        array.forEach(item => this.push(item));
        return this;
    }

    // remove all elements in SinglyLinkedList
    clear() {
        this[head] = null;
        this.size = 0;
    }

    // check list is empty or not
    isEmpty() {
        return this.size === 0;
    }

    // get head of list
    getHead() {
        return this[head];
    }

    // https://github.com/humanwhocodes/computer-science-in-javascript/blob/master/src/data-structures/linked-list/linked-list.js#L504-L534
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

    // convert SinglyLinkedList to a string representation
    toString() {
        return [...this].toString();
    }
}

// export class SinglyLinkedList
export { SinglyLinkedList };