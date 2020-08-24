// add subtract multiply divide
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
  if (b === 0) {
    return "ERROR";
  } else {
    return a / b;
  }
}

//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      console.log("Choose an Operator");
  }
}

const display = document.querySelector(".display");
const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", (e) => calculatorDisplay(button.id));
});

let firstNum = "";
let secondNum = "";
let operator;
let output;
let decimalCount = 0;
function calculatorDisplay(value) {
  function getData(value) {
    if (
      operator === "subtract" ||
      operator === "add" ||
      operator === "multiply" ||
      operator === "divide"
    ) {
      secondNum += value;
      display.innerHTML = secondNum;
    } else {
      firstNum += value;
      display.innerHTML = firstNum;
    }
  }

  function calculate() {
    if (secondNum) {
      output = operate(operator, Number(firstNum), Number(secondNum));
      display.innerHTML = output;
      firstNum = output.toString();
      secondNum = "";
    }
  }

  switch (value) {
    case "zero":
      getData("0");
      break;
    case "one":
      getData("1");
      break;
    case "two":
      getData("2");
      break;
    case "three":
      getData("3");
      break;
    case "four":
      getData("4");
      break;
    case "five":
      getData("5");
      break;
    case "six":
      getData("6");
      break;
    case "seven":
      getData("7");
      break;
    case "eight":
      getData("8");
      break;
    case "nine":
      getData("9");
      break;
    case "decimal":
      if (decimalCount === 0) {
        getData(".");
        decimalCount++;
      }
      break;
    case "clear":
      display.innerHTML = "";
      firstNum = "";
      secondNum = "";
      operator = undefined;
      decimalCount = 0;
      break;
    case "undo":
      display.innerHTML = display.innerHTML.slice(0, -1);
      if (
        operator === "subtract" ||
        operator === "add" ||
        operator === "multiply" ||
        operator === "divide"
      ) {
        secondNum = secondNum.slice(0, -1);
      } else {
        firstNum = firstNum.slice(0, -1);
      }
      break;
    case "minus":
      calculate(operator);
      operator = "subtract";
      break;
    case "plus":
      calculate(operator);
      operator = "add";
      break;
    case "times":
      calculate(operator);
      operator = "multiply";
      break;
    case "divide":
      calculate(operator);
      operator = "divide";
      break;
    case "equals":
      calculate();
      break;
  }
}
