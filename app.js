let screenText = document.querySelector(".screen-text");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const numberButtons = document.querySelectorAll(".btn");
const equalsButton = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");

const add = (a, b) => parseFloat(a) + parseFloat(b);

const subtract = (a, b) => parseFloat(a) - parseFloat(b);

const multiply = (a, b) => parseFloat(a) * parseFloat(b);

const divide = (a, b) => {
  if (a === 0) {
    return 0;
  }

  if (b === 0) {
    return "Error";
  } else {
    parseFloat(a) / parseFloat(b);
  }
};

const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      "An error occured.";
  }
};

// 1. Add event listener to all operator buttons
// 2. set the caclulator.operator = operator button's text content
