let screenText = document.querySelector(".screen-text");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const numberButtons = document.querySelectorAll(".btn");
const equalsButton = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");

const calculator = {
  operator: null,
  firstNumber: null,
  secondNumber: null,
  decimal: false,
};

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    screenText.textContent += button.textContent;

    if (calculator.firstNumber !== null && calculator.operator !== null) {
      calculator.secondNumber = screenText.textContent;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator.firstNumber = screenText.textContent;
    calculator.operator = operator.textContent;
    screenText.textContent = "";
  });
});

const add = (a, b) => parseFloat(a) + parseFloat(b);
const subtract = (a, b) => parseFloat(a) - parseFloat(b);
const multiply = (a, b) => parseFloat(a) * parseFloat(b);

const divide = (a, b) => {
  if (a === 0) {
    return 0;
  }
  if (b === 0) {
    return "Error";
  }
  return parseFloat(a) / parseFloat(b);
};

const operate = (operator, num1, num2) => {
  operator = calculator.operator;
  num1 = Number(calculator.firstNumber);
  num2 = Number(calculator.secondNumber);
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      "An error occured.";
  }

  screenText.textContent = `${result}`;
  result = calculator.firstNumber;
};

const clearScreen = () => {
  screenText.textContent = "";
  calculator.firstNumber = null;
  calculator.secondNumber = null;
  calculator.operator = null;
};

clearButton.addEventListener("click", clearScreen);
equalsButton.addEventListener("click", operate);
