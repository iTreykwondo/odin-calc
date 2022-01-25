const add = (a, b) => parseFloat(a) + parseFloat(b);

const subtract = (a, b) => parseFloat(a) - parseFloat(b);

const multiply = (a, b) => parseFloat(a) * parseFloat(b);

const divide = (a, b) => {
  if (b === 0) {
    return "Error";
  } else {
    parseFloat(a) / parseFloat(b);
  }
};
