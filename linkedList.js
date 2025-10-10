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

    contains(value){
        if(!this.getHead()){
            return false;
        }
        let currentNode = this.getHead()
        while(currentNode.nextNode){
            if (currentNode.value == value){
                return true
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value){
        if(!this.getHead()){
            return value;
        }
        let currentNode = this.getHead()
        let count = 0;
        while(currentNode){
            if (currentNode.value == value){
                return count
            }
            currentNode = currentNode.nextNode;
            count+=1;
        }
        return null
        
    }

    toString(){
        if (!this.getHead()){
            return "null"
        }
        let string = `(${this.getHead().value})`
        let currentNode = this.getHead().nextNode
        while (currentNode){
            string = `${string} -> (${currentNode.value}) `
            currentNode = currentNode.nextNode
        }
        string = `${string} -> null`;
        return string 
    }

    insertAt(value,index){
        if((index > this.size()-1) || index <0 ){
            return null
        }
        if (index == 0){
            this.prepend(value)
            return
        }
        let count = 0
        let currentNode = this.getHead()
        while (count < index -1){
            currentNode = currentNode.nextNode;
            count +=1
        }
        let temp = currentNode.nextNode
        const node = new Node(value)
        currentNode.nextNode = node
        node.nextNode = temp
        return
    }

    removeAt(index){
        if((index > this.size()-1) || index <0 ){
            return null
        }
        if(index == 0){
            this.head = this.head.nextNode
            return
        }
        let count = 0
        let currentNode = this.getHead()
        while(count < index -1){
            currentNode = currentNode.nextNode;
            count +=1;
        }
        currentNode.nextNode = currentNode.nextNode.nextNode
        return

    }











}

class Node {
    constructor(value = null){
        this.value = value;
        this.nextNode = null
    }
}
