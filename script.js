const display = document.querySelector(".display");
const displayLast = document.querySelector(".display-last");
const displayCurrent = document.querySelector(".display-current");
const btnNumber = document.querySelectorAll(".button-number");
const btnOperator = document.querySelectorAll(".button-operator");
const btnClear = document.querySelector(".button-clear");

let firstInput = 0;
let secondInput = 0;
let currentOperator = null;
let shouldResetDisplay = false;

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
            if (secondInput === 0) return null;
            else return divide(firstInput, secondInput);
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
    if (displayCurrent.textContent === "0" || shouldResetDisplay) {
        displayCurrent.textContent = "";
        shouldResetDisplay = false;
    }
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
    if (currentOperator !== null) calculate();
    firstInput = displayCurrent.textContent;
    currentOperator = operator;
    displayLast.textContent = `${firstInput} ${currentOperator}`;
    displayCurrent.textContent = '';
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperator === null || firstInput === "") return;
    if (displayCurrent.textContent === "") return;

    secondInput = displayCurrent.textContent;
    const result = Math.round((operate(firstInput, secondInput, currentOperator) * 1000 ) / 1000);
    displayCurrent.textContent = result;
    displayLast.textContent = `${firstInput} ${currentOperator} ${secondInput} =`;
    
    firstInput = result;
    currentOperator = null;
    shouldResetDisplay = true;
}

btnClear.addEventListener("click", clear);

function clear() {
    displayCurrent.textContent = "0";
    displayLast.textContent = "";
    firstInput = 0;
    secondInput = 0;
    currentOperator = null;
}