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
