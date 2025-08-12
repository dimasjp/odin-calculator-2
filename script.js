let firstInput;
let secondInput;
let operator;


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