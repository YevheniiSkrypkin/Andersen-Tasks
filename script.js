function concatStrings (arg1, ...separator) {
  if (typeof separator[0] !== 'string') {
    separator.splice(0,1);
  };

  return function(arg2) {
    if (typeof arg2 !== 'string') {
      return console.log(arg1);
    };

    if (arg2) {
      return concatStrings(arg1+separator+arg2+separator, separator);
    };

    return console.log(arg1);
  };
};

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    const toNum1 = typeof num1 === 'bigint' || isNaN(num1) || !isFinite(num1);
    const toNum2 = typeof num2 === 'bigint' || isNaN(num2) || !isFinite(num2);

    if(toNum1 || toNum2) {
      throw new Error('Check that numbers are valid');
    };
  };

  setX(num1) {
    if(typeof num1 === 'bigint' || isNaN(num1) || !isFinite(num1)) {
      throw new Error('Num1 is not valid');
    };

    return this.num1 = num1;
  };

  setY(num2) {
    if(typeof num2 === 'bigint' || isNaN(num2) || !isFinite(num2))  {
      throw new Error('Num2 is not valid');
    };

    return this.num2 = num2;
  };

  logSum() {
    return this.num1 + this.num2;
  };

  logMul() {
    return this.num1 * this.num2;
  };

  logSub() {
    return this.num1 - this.num2;
  };

  logDiv() {
    if(this.num2 === 0) {
      throw new Error('second num is 0');
    };

    return this.num1 / this.num2;
  };
};