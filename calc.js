const NUM_BTNS = document.querySelectorAll('[data-num]');
const FUNC_BTNS = document.querySelectorAll('[data-func]');
const EQUAL_BTN = document.querySelector('[data-equals]');
const DELETE_BTN = document.querySelector('[data-del]');
const CLEAR_BTN = document.querySelector('[data-clear]');
const CHANGE_SYM_BTN = document.querySelector('[data-change]');
const PREV_OPERAND_TXT = document.querySelector('[data-previous-operand]');
const CURRENT_OPERAND_TXT = document.querySelector('[data-current-operand]');
const MS_BTN = document.querySelector('[data-ms]');
const MR_BTN = document.querySelector('[data-mr]');
const M_PLUS_BTN = document.querySelector('[data-mplus]');
const M_MINUS_BTN = document.querySelector('[data-mminus]');
const M_CLEAR_BTN = document.querySelector('[data-mclear]');

// console.log(NUM_BTNS)

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.PREV_OPERAND_TXT = previousOperandTextElement;
    this.CURRENT_OPERAND_TXT = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (this.currentOperand.toString().length > 11) {
      return;
    }
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
    this.updateDisplay();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;

    if (this.previousOperand !== '') {
      this.compute();
    };

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  };

  changeSymbol() {
    this.currentOperand = this.currentOperand - (this.currentOperand * 2);
  };

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current
        break;
      case '-':
        computation = prev - current
        break;
      case '*':
        computation = prev * current
        break;
      case '÷':
        computation = prev / current
        break;
      default:
        return;
    }

    if (computation % 1 != 0) {
      this.currentOperand = computation.toFixed(8);
    }
    else {this.currentOperand = computation};
    this.operation = undefined;
    this.previousOperand = '';
  }
    
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } 
    else {
      integerDisplay = integerDigits.toLocaleString('ru', { maximumFractionDigits: 0 });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } 
    else {return integerDisplay};
  };
  
  updateDisplay() {
    if(sessionStorage.getItem('call')) {
      this.currentOperand = this.currentOperand.substring(this.currentOperand.length-1);
      sessionStorage.removeItem('call');
    }

    this.CURRENT_OPERAND_TXT.innerText = this.getDisplayNumber(this.currentOperand);

    if (this.operation != null) {
      this.PREV_OPERAND_TXT.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } 
    else {this.PREV_OPERAND_TXT.innerText = ''}
  };
    
  memorySave() {
    sessionStorage.setItem('Saved value', this.CURRENT_OPERAND_TXT.innerText)
  };

  memoryRead() {
    if (!sessionStorage.getItem('Saved value')) {
      throw new Error('Memory is empty');
    };
      this.currentOperand = sessionStorage.getItem('Saved value');
    };

    memoryPlus() {
      const savedVal = sessionStorage.getItem('Saved value');
      sessionStorage.setItem('Saved value',  Number(savedVal)+Number(this.currentOperand));
    };

    memoryMinus() {
      const savedVal = sessionStorage.getItem('Saved value');
      sessionStorage.setItem('Saved value',  Number(savedVal)-Number(this.currentOperand));
    };

    memoryClear() {
      sessionStorage.removeItem('Saved value');
    };
};


NUM_BTNS.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    })
  }
)

FUNC_BTNS.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    })
  })
  
EQUAL_BTN.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
    sessionStorage.setItem('call', true);
})
  
CLEAR_BTN.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})
  
DELETE_BTN.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

CHANGE_SYM_BTN.addEventListener('click', () => {
  calculator.changeSymbol();
  calculator.updateDisplay();
})

MS_BTN.addEventListener('click', () => {
  calculator.memorySave();
})

MR_BTN.addEventListener('click', () => {
  calculator.memoryRead();
  calculator.updateDisplay();
})

M_PLUS_BTN.addEventListener('click', () => {
  calculator.memoryPlus();
})

M_MINUS_BTN.addEventListener('click', () => {
  calculator.memoryMinus();
})

M_CLEAR_BTN.addEventListener('click', () => {
  calculator.memoryClear();
})

const calculator = new Calculator(PREV_OPERAND_TXT, CURRENT_OPERAND_TXT)