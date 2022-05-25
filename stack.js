class Stack {
  constructor(size = 10) {
    this.count = 0;
    this.storage = {};
    this.size = size;

    const sizeValid = typeof size === 'bigint' || isNaN(size) || !isFinite(size);

    if (sizeValid) {
      throw new Error('Check that number is valid or stack oversize');
    };
  };

  push(value) {
    if (this.count >= this.size) {
      throw new Error ('Stack is full');
    };
    
    this.storage[this.count] = value;
    this.count++;
  } 
      
  pop() {
    if (this.count === 0) throw new Error('Stack is empty');
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    if (this.size === 0 ) {
      return null;
    };
    return this.storage[this.count - 1];
  };

  isEmpty() {
    return this.count === 0 ? true : false;
  };

  toArray() {
    const array = [];

    const iterate = (object) => {
      Object.keys(object).forEach(key => {
        if (object[key] === null) return;

        if (typeof object[key] === 'object' && object[key] !== null) {
          iterate(object[key]);
        }
        else {
          array.push(`${object[key]}`);
        };
      })        
    };
    
    iterate(this.storage);

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
      newStack.push(el);
    };

    return newStack;
  };
};

module.exports = { Stack };
