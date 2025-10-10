class LinkedList {
    constructor(){
        this.head = null
    }
    
    append(value){
        const node = new Node(value)
        if(!(this.head)){
            this.head = node;
            return;
        }
        let currentNode = this.head;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        
        currentNode.nextNode = node;
        return;
    }




}

class Node {
    constructor(value = null){
        this.value = value;
        this.nextNode = null
    }
}

const list = new LinkedList()
list.append("dog")
list.append("cat")

console.log(list)
