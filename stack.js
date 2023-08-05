// FILO - First in Last Out

/*
 Stack - push, pop , peak , isEmpty , length
 */

class Stack {
  constructor(length) {
    this.stack = [];
    this.length = length;
  }

  push(ele) {
    if ( this.stack.length < this.length) {
      this.stack.push(ele);
    } else {
      console.log("Stack is full");
    }
  }
  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    } else {
      console.log("Stack is empty");
    }
  }
  isEmpty() {
    if (this.stack.length == 0) {
    //   console.log("stack is Empty");
      return true;
    }
  }
  size() {
    return this.stack.length;
  }
  peak() {
    if (this.stack.length > 0) {
      return this.stack.at(-1)
    }
  }
}

// const stack = new Stack(5)
// stack.push(1)
// stack.push(2)
// stack.push(4)
// stack.push(10)
// console.log(stack)
// stack.peak()
// stack.pop()
// stack.size()
// console.log(stack)

export default Stack