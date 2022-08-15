class Teacher {
    constructor() {
        this.observer = [];
    }
    addObserver(...observer) {
        observer.forEach(item => this.observer.push(item));
        return this;
    }
    deleteObserver(...observer) {
        this.observer = this.observer.filter(item => !observer.includes(item));
        return this;
    }
    sendMessage(message) {
        this.observer.forEach(item => item.notice(message));
    }
}

class Student {
    constructor(name) {
        this.name = name;
    }
    notice(message) {
        console.log(`${this.name} has noticed ${message}.`);
    }
}

const teacher = new Teacher();

const studentA = new Student("studentA");
const studentB = new Student("studentB");
const studentC = new Student("studentC");

// push one by one
// teacher.addObserver(studentA).addObserver(studentB).addObserver(studentC);
// push all at once
teacher.addObserver(studentA, studentB, studentC);
teacher.sendMessage("teacher's message");
// studentA has noticed teacher's message.
// studentB has noticed teacher's message.
// studentC has noticed teacher's message.

// delete studentA and studentC
teacher.deleteObserver(studentA, studentC);
teacher.sendMessage("teacher's new message");
// studentB has noticed teacher's new message.