class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class Stack {
  constructor(maxSize = 10) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxSize = maxSize;

    const sizeValid = typeof maxSize === 'bigint' || isNaN(maxSize) || !isFinite(maxSize);

    if (sizeValid) {
      throw new Error('Check that number is valid or stack oversize');
    };
  };

  push(value){
    if(this.size >= this.maxSize) {
      throw new Error('Stack is full')
    }
    let node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    }
    else {
      let temp = this.first;

      this.first = node;
      this.first.next = temp;
    };

    this.size++;
    return this.size;
  };

  pop(){
    if (!this.first) {
      throw new Error('Stack is empty')
    };

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    };

    this.first = this.first.next;
    this.size--;

    return temp.value;
  };

  peek() {
    if (!this.first) {
      return null;
    };

    return this.first.value; 
  };

  isEmpty() {
    if (this.size === 0) return true;

    return false;
  };

  toArray() {
    const array = [];
    const objects = this.first;

    const iterate = (objects) => {
      Object.keys(objects).forEach(key => {
        if (objects[key] === null) return;

        if (typeof objects[key] === 'object' && objects[key] !== null) {
          iterate(objects[key]);
        }
        else {
          array.push(`${objects[key]}`);
        };
      })
    };

    iterate(objects);

    return array;
  };

  static fromIterable(iterable) {
    const isIterable = (value) => {
      return Symbol.iterator in Object(value);
    };

    if (isIterable(iterable) === false) {
      throw new Error ('Non iterable entity')
    };

    const newStack = new Stack();

    for (let el of iterable) {
      newStack.push(el)
    };

    return newStack;
  };
};

module.exports = { Node };
module.exports = { Stack };