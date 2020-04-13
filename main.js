class _Node {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while(tempNode !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }
    find(item) {
        let currNode = this.head
        if(!this.head) {
            return null
        }
        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next
            }
        }
        return currNode
    }
    remove(item) {
        if(!this.head) {
            return null
        }
        if(this.head.value===item) {
            this.head === this.head.next
        }
        let currNode = this.head;

        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }
        if(currNode === null) {
            console.log('Item not found')
            return;
        }
        previousNode.next === currNode.next
    }
    insertBefore(newItem, node) {
        if(this.head === null) {
            this.insertFirst(newItem)
            return
        }

        let currentNode = this.head
        let previousNode = this.head

        while((currentNode !== null && currentNode.val !== node)){
            previousNode = currentNode
            currentNode = currentNode.next
        }

        if(currentNode === null) {
            this.insertLast(newItem)
            return
        }

        const tempNode = new _Node(newItem, currentNode)

        previousNode.next = tempNode
    }
    insertAfter(newItem, node) {
        if(this.head === null) {
            this.insertFirst(newItem)
            return
        }
        let currentNode = this.find(node)

        if(currentNode === null) {
            this.insertLast(node)
            return
        }

        const tempNode = new _Node(newItem, currentNode)

        currentNode.next = tempNode
    }
    insertAt(newItem, position) {
        if (this.head === null) {
            this.insertFirst(newItem)
        }

        let currentNode = this.head
        let currentPosition = 1

        while(currentPosition < position -1) {
            currentNode = currentNode = currentNode.next
            currentPosition++
        }
        const tempNode = new _Node(item, currentNode.next)

        currentNode.next = tempNode
    }
}

function main() {
    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('Husker')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')

    return SLL
}

console.log(main())

const LL = main()

function display(list) {
    let output = ''
    let currentNode = list.head
    while(currentNode !== null) {
        output += currentNode.val
        if(currentNode.next !== null) {
            output += '->'
        }
        currentNode = currentNode.next
    }
    return output
}

console.log(display(LL))

function size(list) {
    let size = 0
    let currentNode = list.head
    while(currentNode !== null){
        size++
        currentNode = currentNode.next
    }
    return size
}

console.log(size(LL))

const ll = new LinkedList()

function isEmpty(list) {
    if(list.head === null) {
        return true
    } else {
        return false
    }
}

console.log(isEmpty(ll))
console.log(isEmpty(LL))

function findPrevious(item, list) {
    if(list.head === null) {
        console.log('list is empty')
        return
    }

    let currentNode = list.head
    let previousNode = list.head

    while(currentNode !== null && currentNode.val !== item) {
        previousNode = currentNode
        currentNode = currentNode.next
    }
    if(currentNode === null) {
        console.log('item not found')
        return
    }
    return console.log(previousNode.val)
}

console.log(findPrevious('Helo', LL))

function findLast(list) {
    if(list.head === null) {
        return 'list empty'
    }
    let currentNode = list.head

    while(currentNode !== null) {
        currentNode = currentNode.next
    }

    return currentNode.val
}

console.log(findLast(LL))

//Mystery Program, O(n^2), two while loops, it loops through a list, maybe copyig it?

function reverseList(list) {
    let currNode = list.head
    let prevNode  = list.head
    let nextNode = list.head

    while(nextNode !== null) {
        if(currNode === prevNode) {
            currNode.next === null
        } else {
            currNode.next = prevNode
        }
        prevNode = currNode
        currNode = nextNode
        nextNode = nextNode.next
    }
    return prevNode
}


function thirdFromEnd(list) {
    let length = 0
    let currNode = list.head

    while(currNode !== null) {
        currNode = currNode.next
        length++
    }
    if(length < 3) {
        currNode = list.head
        return currNode
    }
    for(i = 1; i < (length - 4); i++) {
        currentNode = currentNode.next
    }
    return currentNode
}

function middleOfList(list) {
    let slow = list.head
    let fast = list.head

    if(head !== null) {
        while(fast !== null && fast.next!== null) {
            fast = fast.next.next
            slow = slow.next
        }
    return slow.val
    } else {
        return 'list is empty'
    }
}

function cycle(list) {
    let currNode = list.head
    let listAlt = new LinkedList()

    while(currNode !== null) {
        if(listAlt.contains(currNode)) {
            return true
        } else {
            listAlt.insertLast(currNode)
            currNode = currNode.next
        }
    }
    return false
}

function sortedInsert(list, newNode) {
    let current = list.head

    while(current.next !== null && current.next.val < newNode.val) {
        current = current.next
    }

    newNode.next = current.next;
    current.next = newNode;
    return list.head
}

function InsertSort(list) {
    let result = null;
    let current = list.head;
    let next

    while(current !== null) {
        next = current.next

        result = SortedInsert(result, current);

        current = next
    }
    return result
}


