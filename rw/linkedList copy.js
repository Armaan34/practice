class Node{
    constructor(ele){
        this.element = ele;
        this.next = null
    }
}

class LinkedList { 
    constructor(){
        this.head = null;
        this.size = 0
    }


    // add
    add(element){
        let node = new Node(element);

        let current;

        if(this.head == null){
            this.head = node;
        }else{
            current = this.head
            while(current.next){
                current = current.next;
            }
            current.next = node
        }

        this.size++
    }

    // insert At 

    // Remove Index

  
    removeElement(element){
        let current = this.head;
        let prev = null

        while(current){
            if(current.element == element){
                if(prev == null){
                    this.head = current.next;
                }else{
                    prev.next = current.next
                }
            }
            prev = current
            current = current.next
        }
        this.size--
    }


    isEmpty(){
        if(this.size == 0) return true
        else return false   
    }

    print(){
        if(this.head == null){
            console.log('Linked List is empty')
            return
        }
        let current = this.head
        let str = ""

        while(current){
            str += current.element + " -> "
            current = current.next
        }
        console.log(str);
    }

    
}

let li = new LinkedList()
// li.print()

li.add(3);
li.add(4);
li.add("hii");
li.add(5);

li.print()
li.removeElement(4)
li.print()
/*
 3 4 5 
*/

/*
LinkedList {

    head: Node { element: 3, next: Node { element: 4, next: null } },
   
   
    size: 2
 
}

*/

