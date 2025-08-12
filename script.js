const display = document.querySelector(".display");
const displayLast = document.querySelector(".display-last");
const displayCurrent = document.querySelector(".display-current");
const btnNumber = document.querySelectorAll(".button-number");
const btnOperator = document.querySelectorAll(".button-operator");
const btnClear = document.querySelector(".button-clear");

let firstInput = 0;
let secondInput = 0;
let operator = null;

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
    return a / b;
}

function operate(firstInput, secondInput, operator) {
    switch (operator) {
        case "+":
            return add(firstInput, secondInput);
        case "-":
            return subtract(firstInput, secondInput);
        case "*":
            return multiply(firstInput, secondInput);
        case "/":
            return divide(firstInput, secondInput);
        default:
            return null;
    }
}



btnNumber.forEach((button) => {
    button.addEventListener("click", () => {
        displayNumber(button.textContent);
    })
})

function displayNumber(number) {
    displayCurrent.textContent += number;
}

// btnOperator.forEach((button) => {
//     button.addEventListener("click", () => {
//         if (button.textContent === "=") {
//             secondInput = display.textContent;
//             operate(firstInput, secondInput, operator);
//         } else {
//             firstInput = display.textContent;
//             operator = button.textContent;
//             display.textContent = "";
//         }
//     })
// })
