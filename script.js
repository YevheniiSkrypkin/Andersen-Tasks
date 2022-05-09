const ORIGIN = {
    name: 'John',
    surname: 'Smith',
    age: 20,
    passport: {
        serial: 'AA',
        number: '12345'
    }
}

function makeObjectDeepCopy(obj){
    let copy = Object.assign({}, obj);
    Object.keys(copy).forEach(
      key => (copy[key] = typeof obj[key] === 'object' ? makeObjectDeepCopy(obj[key]) : obj[key])
    );
    if(Array.isArray(obj)) {
        return (copy.length = obj.length) && Array.from(copy);
    }
    else {
        return copy;
    };
};
makeObjectDeepCopy(ORIGIN);


function selectFromInterval(array, num1, num2) {
    const arrToReturn = [];
    if(!Array.isArray(array)){
        throw new Error('Not an array');
    };
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error('Interval is NaN');
    };
    if(num1 < num2) {
        for(let value of array) {
            if(num1 <= value && value <= num2) {
                arrToReturn.push(value);
            }
        }
    };
    if (num1 > num2) {
        for(let value of array) {
            if(num2 <= value && value <= num1) {
                arrToReturn.push(value)
            }
        }
    };
    return arrToReturn;
};
selectFromInterval([1,3,4,5,7], 5, 3);
selectFromInterval([1,3,4,5,7], 3, 5);

const myIterable = {
    from: 1, 
    to: 4,
    [Symbol.iterator] : function() {
        return {
            current: this.from,
            last: this.to,
            next() {
              if (this.current <= this.last) {
                return {done: false, value: this.current++};
              } 
              else {
                return {done: true};
              }
            }
        }
    }
};