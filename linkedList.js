class LinkedList {
    constructor(){
        this.head = null
    }

    append(value){
        const node = new Node(value)
        if(!(this.getHead())){
            this.head = node;
            return;
        }
        let currentNode = this.getHead();
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        
        currentNode.nextNode = node;
        return;
    }

    prepend(value){
        if(!this.getHead()){
            this.append(value)
            return;
        }
        else{
            const node = new Node(value)
            const tempNode = this.getHead()
            this.head = node
            node.nextNode = tempNode
        }
    }

    size(){
        let count = 0;
        let currentNode = this.getHead()
        while(currentNode){
            currentNode = currentNode.nextNode
            count +=1;
        }
        return count

    }

    getHead(){
        return this.head
    }

    getTail(){
        if(!this.getHead()){
            return null
        }
        let currentNode = this.getHead()
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode
        }
        return currentNode


    }

    atIndex(index){
        if(this.size() -1 <  index){
            return null;
        }
        let count = 0
        let currentNode = this.getHead()
        while(count <index){
            currentNode = currentNode.nextNode
            count +=1
        }
        return currentNode

    }

    pop(){
        if(!this.getHead()){
            return null
        }
        let currentNode = this.getHead()
        while(currentNode.nextNode.nextNode){
            currentNode = currentNode.nextNode
        }
        let tempNode = currentNode.nextNode
        currentNode.nextNode = null
        return tempNode
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
console.log(list.getTail())
console.log(list.size())
console.log(list)
console.log(list.pop())
console.log(list)




