class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

const linkedList = (startingNode) => {
    let headNode = startingNode;

    // Add a new node containing value to the end of the list
    let append = (newNode) => {
        let current = headNode;
        while (current !== null) {
            if (current.next === null) {
                current.next = newNode;
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
        let current = headNode;
        while (current !== null) {
            if (current.next === null) return current;
            current = current.next;
        }
    };

    return { append, prepend, size, tail };
};
