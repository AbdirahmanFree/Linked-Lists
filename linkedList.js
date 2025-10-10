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
    prepend(value){
        if(!this.head){
            this.append(value)
            return;
        }
        else{
            const node = new Node(value)
            const tempNode = this.head
            this.head = node
            node.nextNode = tempNode
        }
            
    
    }




}

class Node {
    constructor(value = null){
        this.value = value;
        this.nextNode = null
    }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.prepend("d")

console.log(list)
