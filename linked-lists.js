class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

const linkedList = (startingNode) => {
    let headNode = startingNode;
    let tailNode = startingNode;

    // Add a new node containing value to the end of the list
    let append = (newNode) => {
        let current = headNode;
        while (current !== null) {
            if (current.next === null) {
                current.next = newNode;
                tailNode = newNode;
                return;
            }
            current = current.next;
        }
    };

    // Add a new node containing value to the start of the list
    let prepend = (newNode) => {
        newNode.next = headNode;
        headNode = newNode;
    };

    // Return the total number of nodes in the list
    let size = () => {
        let current = headNode;
        let size = 0;
        while (current !== null) {
            size += 1;
            current = current.next;
        }
        return size;
    };

    // Returns the first node in the list
    let head = () => {
        return headNode;
    };

    // Returns the last node in the list
    let tail = () => {
        return tailNode;
    };

    // Return the node at the given index
    let at = (index) => {
        let current = headNode;
        let count = 0;
        while (current !== null) {
            if (count === index) return current;
            count += 1;
            current = current.next;
        }
        return null;
    };

    // Removes the last element from the list
    let pop = () => {
        let current = headNode;
        while (current !== null) {
            if (current.next === tail) {
                current.next = null;
                tailNode = current;
            }
            current = current.next;
        }
    };

    // Return true if the passed in value is in the list and otherwise returns false.
    let contains = (value) => {
        let current = headNode;
        while (current !== null) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    };

    // Return the index of the node containing value, or null if not found.
    let find = (value) => {
        let current = headNode;
        let count = 0;
        while (current !== null) {
            if (current.value === value) return count;
            count += 1;
            current = current.next;
        }
        return null;
    };

    // Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    const toString = () => {
        let current = headNode;
        let string = '';
        while (current !== null) {
            string += `${current.value} -> `;
            if (current === tailNode) {
                string += `null`;
            }
            current = current.next;
        }
        console.log(string);
    };

    // Inserts a new node with the provided value at the given index.
    const insertAt = (value, index) => {
        let current = headNode;
        let count = 0;
        if (index < size()) {
            while (current !== null) {
                if (count === index - 1) {
                    let tailList = current.next;
                    current.next = new Node(value);
                    current.next.next = tailList;
                    return;
                }
                current = current.next;
                count += 1;
            }
        } else {
            console.log("Index doesn't exist");
        }
    };

    // Removes the node at the given index.
    const removeAt = (index) => {
        let current = headNode;
        let count = 0;
        if (index < size()) {
            while (current !== null) {
                if (count === index - 1) {
                    let tail = current.next.next;
                    current.next = tail;
                    return;
                }
                count += 1;
                current = current.next;
            }
        } else {
            throw new Error("Index doesn't exists");
        }
    };

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };
};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

const newList = linkedList(a);
newList.append(b);
newList.append(c);
newList.append(d);

const e = new Node('E');
newList.prepend(e);

console.log(newList.head());
console.log(newList.size());
console.log(newList.tail());
console.log(newList.at(1));
console.log(newList.at(10));
newList.pop();
console.log(newList.tail());
console.log(newList.contains('A'));
console.log(newList.contains('X'));
console.log(newList.find('C'));
console.log(newList.find('X'));
newList.toString();
newList.insertAt('X', 2);
newList.toString();
newList.insertAt('X', 20);
newList.removeAt(3);
newList.toString();
newList.removeAt(30);
