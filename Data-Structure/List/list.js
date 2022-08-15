// 1. SinglyLinkedListNode
class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 2.1 DoublyLinkedListNode class
class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

// 2.2 DoublyLinkedListNode extends SinglyLinkedListNode
// class DoublyLinkedListNode extends SinglyLinkedListNode {
//     constructor(data, next, previous) {
//         super(data, next);
//         this.previous = previous;
//     }
// }

// 3.1 export class one by one
// exports.SinglyLinkedListNode = SinglyLinkedListNode;
// exports.DoublyLinkedListNode = DoublyLinkedListNode;

// 3.2 export a single object
module.exports = { SinglyLinkedListNode, DoublyLinkedListNode };