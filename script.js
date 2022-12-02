"use strict";

const userInput = document.getElementById("userInput");
let expression = "";

const press = function (num) {
  expression += num;
  userInput.value = expression;
};

const equal = () => {
  userInput.value = eval(expression);
  expression = "";
};
const erase = () => {
  userInput.value = "";
};
