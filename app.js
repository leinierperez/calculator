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
// put number selected on the display
function calculatorDisplay(value) {
  function getData(value) {
    if (
      display.innerHTML.includes("-") ||
      display.innerHTML.includes("+") ||
      display.innerHTML.includes("x") ||
      display.innerHTML.includes("÷")
    ) {
      secondNum += value;
    } else {
      firstNum += value;
    }
  }

  switch (value) {
    case "zero":
      display.innerHTML += "0";
      getData("0");
      break;
    case "one":
      display.innerHTML += "1";
      getData("1");
      break;
    case "two":
      display.innerHTML += "2";
      getData("2");
      break;
    case "three":
      display.innerHTML += "3";
      getData("3");
      break;
    case "four":
      display.innerHTML += "4";
      getData("4");
      break;
    case "five":
      display.innerHTML += "5";
      getData("5");
      break;
    case "six":
      display.innerHTML += "6";
      getData("6");
      break;
    case "seven":
      display.innerHTML += "7";
      getData("7");
      break;
    case "eight":
      display.innerHTML += "8";
      getData("8");
      break;
    case "nine":
      display.innerHTML += "9";
      getData("9");
      break;
    case "decimal":
      display.innerHTML += ".";
      getData(".");
      break;
    case "clear":
      display.innerHTML = "";
      firstNum = "";
      secondNum = "";
      operator = undefined;
      break;
    case "minus":
      display.innerHTML += "-";
      operator = "subtract";
      break;
    case "plus":
      display.innerHTML += "+";
      operator = "add";
      break;
    case "times":
      display.innerHTML += "x";
      operator = "multiply";
      break;
    case "divide":
      display.innerHTML += "÷";
      operator = "divide";
      break;
    case "equals":
      console.log(firstNum);
      console.log(secondNum);
      display.innerHTML = operate(
        operator,
        Number(firstNum),
        Number(secondNum)
      );
      break;
  }
}
