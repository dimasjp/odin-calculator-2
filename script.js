const display = document.querySelector(".display");
const displayLast = document.querySelector(".display-last");
const displayCurrent = document.querySelector(".display-current");
const btnNumber = document.querySelectorAll(".button-number");
const btnOperator = document.querySelectorAll(".button-operator");
const btnClear = document.querySelector(".button-clear");

let firstInput = 0;
let secondInput = 0;
let currentOperator = null;

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
    firstInput = Number(firstInput);
    secondInput = Number(secondInput);

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

btnOperator.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            calculate();
        } else {
            setOperation(button.textContent);
        }
    })
})

function setOperation(operator) {
    firstInput = displayCurrent.textContent;
    currentOperator = operator;
    displayLast.text = `${firstInput} ${currentOperator}`;
    displayCurrent.textContent = '';
}

function calculate() {
    secondInput = displayCurrent.textContent;
    displayCurrent.textContent = operate(firstInput, secondInput, currentOperator);
    displayLast.textContent = `${firstInput} ${currentOperator} ${secondInput} =`;
    currentOperator = null;
}