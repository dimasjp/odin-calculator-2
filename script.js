const display = document.querySelector(".display");
const displayLast = document.querySelector(".display-last");
const displayCurrent = document.querySelector(".display-current");
const btnNumber = document.querySelectorAll(".button-number");
const btnOperator = document.querySelectorAll(".button-operator");
const btnClear = document.querySelector(".button-clear");

let firstInput = "";
let secondInput = "";
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
        resetDisplay()
    }
    displayCurrent.textContent += number;
}

function resetDisplay() {
    displayCurrent.textContent = "";
    shouldResetDisplay = false;
}

btnOperator.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            calculate();
        } else if (button.textContent === ".") {
            appendPoint();
        } else {
            setOperation(button.textContent)
        }
    })
})

function setOperation(operator) {
    if (currentOperator !== null) calculate();
    firstInput = displayCurrent.textContent;
    currentOperator = operator;
    displayLast.textContent = `${firstInput} ${currentOperator}`;
    shouldResetDisplay = true;
}

function appendPoint() {
    if (shouldResetDisplay) resetDisplay()
    if (displayCurrent.textContent === "") {
        displayCurrent.textContent = "0";
    }
    if (displayCurrent.textContent.includes(".")) return
    displayCurrent.textContent += ".";
}

function calculate() {
    if (currentOperator === null || shouldResetDisplay) return;

    secondInput = displayCurrent.textContent;
    displayCurrent.textContent = Math.round((operate(firstInput, secondInput, currentOperator)) * 1000) / 1000;
    displayLast.textContent = `${firstInput} ${currentOperator} ${secondInput} =`;
    
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