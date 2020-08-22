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
    return `Can't divide by zero`;
  } else {
    return a / b;
  }
}

//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
  switch (operator) {
    case "add":
      add(a, b);
      break;
    case "subtract":
      subtract(a, b);
      break;
    case "multiply":
      multiply(a, b);
      break;
    case "divide":
      divide(a, b);
      break;
    default:
      console.log("Choose an Operator");
  }
}

const display = document.querySelector(".display");
const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", (e) => calculatorDisplay(button));
});

// Create the functions that populate the display when you click the number buttons…
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.

// put number selected on the display
function calculatorDisplay(value) {
  switch (value) {
    case "zero":
  }
}
