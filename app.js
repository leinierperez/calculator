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

// put number selected on the display
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.innerHTML += button.innerText;
  });
});
