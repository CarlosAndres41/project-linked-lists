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

    return { append };
};
