function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0 || isNaN(b)) {
    throw new Error('Divide by zero Error');
  }
  return a / b;
}

//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
  switch (operator) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      console.log('Choose an Operator');
  }
}

const display = document.querySelector('.display');
const btns = document.querySelectorAll('.calculator button');

btns.forEach((button) => {
  button.addEventListener('click', (e) =>
    calculatorDisplay(button.textContent)
  );
});

const keyCodeToOp = {
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  190: '.',
  8: 'backspace',
};
window.addEventListener('keydown', (e) => {
  calculatorDisplay(keyCodeToOp[e.keyCode]);
});

function removeZeros(str) {
  return Number(str).toString();
}

let firstNum = '';
let secondNum = '';
let operator;
let output;
let decimalCount = true;

function calculatorDisplay(value) {
  function addDigit(value) {
    if (operator) {
      if (secondNum === '' && value === '.') {
        secondNum = '0';
      }
      secondNum += value;
      if (value === '.') {
        display.innerHTML = secondNum;
      } else {
        display.innerHTML = removeZeros(secondNum);
      }
    } else {
      if (firstNum === '' && value === '.') {
        firstNum = '0';
      }
      firstNum += value;
      if (value === '.') {
        display.innerHTML = firstNum;
      } else {
        display.innerHTML = removeZeros(firstNum);
      }
    }
  }

  function calculate() {
    try {
      if (secondNum) {
        output = operate(operator, Number(firstNum), Number(secondNum));
        display.innerHTML = output;
        firstNum = output.toString();
        secondNum = '';
      }
      decimalCount = true;
    } catch (err) {
      display.innerHTML = 'Error';
      firstNum = '';
      secondNum = '';
      operator = undefined;
    }
  }

  if (value.match(/^[0-9.]$/)) {
    if (value === '.' && decimalCount) {
      decimalCount = false;
      addDigit(value);
    } else if (value !== '.') {
      addDigit(value);
    }
  } else {
    switch (value) {
      case 'C':
        display.innerHTML = '0';
        firstNum = '';
        secondNum = '';
        operator = undefined;
        decimalCount = true;
        break;
      case 'backspace':
        if (display.innerHTML.endsWith('.')) {
          decimalCount = true;
        }
        display.innerHTML = display.innerHTML.slice(0, -1);
        if (operator) {
          secondNum = secondNum.slice(0, -1);
        } else {
          firstNum = firstNum.slice(0, -1);
        }
        break;
      case '-':
        calculate(operator);
        operator = 'subtract';
        break;
      case '+':
        calculate(operator);
        operator = 'add';
        break;
      case 'x':
        calculate(operator);
        operator = 'multiply';
        break;
      case '÷':
        calculate(operator);
        operator = 'divide';
        break;
      case '=':
        calculate();
        break;
    }
  }
}
