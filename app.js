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

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 48) {
    calculatorDisplay("zero");
  } else if (e.keyCode === 49) {
    calculatorDisplay("one");
  } else if (e.keyCode === 50) {
    calculatorDisplay("two");
  } else if (e.keyCode === 51) {
    calculatorDisplay("three");
  } else if (e.keyCode === 52) {
    calculatorDisplay("four");
  } else if (e.keyCode === 53) {
    calculatorDisplay("five");
  } else if (e.keyCode === 54) {
    calculatorDisplay("six");
  } else if (e.keyCode === 55) {
    calculatorDisplay("seven");
  } else if (e.keyCode === 56) {
    calculatorDisplay("eight");
  } else if (e.keyCode === 57) {
    calculatorDisplay("nine");
  } else if (e.keyCode === 190) {
    calculatorDisplay("decimal");
  } else if (e.keyCode === 8) {
    calculatorDisplay("undo");
  }
});

function removeZeros(str) {
  return Number(str).toString();
}

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
      if (secondNum === "" && value === ".") {
        secondNum += "0.";
      } else {
        secondNum += value;
      }
      if (value === ".") {
        display.innerHTML = secondNum;
      } else {
        display.innerHTML = removeZeros(secondNum);
      }
    } else {
      if (firstNum === "" && value === ".") {
        firstNum += "0.";
      } else {
        firstNum += value;
      }
      if (value === ".") {
        display.innerHTML = firstNum;
      } else {
        display.innerHTML = removeZeros(firstNum);
      }
    }
  }

  function calculate() {
    if (secondNum) {
      output = operate(operator, Number(firstNum), Number(secondNum));
      display.innerHTML = output;
      firstNum = output.toString();
      secondNum = "";
    }
    decimalCount = 0;
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
      display.innerHTML = "0";
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
      if (display.innerHTML.endsWith(".")) {
        decimalCount = 0;
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
