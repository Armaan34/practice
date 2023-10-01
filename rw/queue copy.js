// FIFO - First in First Out

/*
    Queue : enqueue  , dequeue , front , rear , isEmpty , length
*/

class Queue{
    constructor(length){
        this.queue = []
        this.length = length
    }
    
    enqueue(ele){
        if(this.queue.length === this.length){
            console.log("Queue is full");
            return
        }
        this.queue.push(ele)
    }
    dequeue(){
        if(this.isEmpty()){
            return
        }
        this.queue.shift()
    }

    head(){
        if(this.isEmpty()){
            return
        }
        console.log(this.queue[0]);
    }
    rear(){
        if(this.isEmpty()){
            return
        }
        console.log(this.queue.at(-1));
    }

    isEmpty(){
        if(this.queue.length == 0){
            console.log("Queue is Empty");
            return true
        }
    }
    size(){
        console.log(this.queue.length);
    }

}

const queue = new Queue(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(10)
console.log(queue)
queue.head()
queue.rear()
queue.dequeue()
queue.head()
queue.size()
console.log(queue)