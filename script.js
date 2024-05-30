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


let firstNum, secondNum, operator;

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);

        case '-':
            return subtract(firstNum, secondNum);

        case '*':
            return multiply(firstNum, secondNum);

        case '/':
            return divide(firstNum, secondNum);
        default:
            return null;


    }
}

let displayValue = "0";

let display = document.querySelector(".display");

function reset() {
    firstNum = null;
    secondNum = null;
    operator = null;
}

function updateDisplay() {
    display.textContent = displayValue || '0';
}

function clear() {
    displayValue = '';
    reset();
    updateDisplay();
}


//function for numbers
document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        updateDisplay();
    });
});


//function for operators
document.querySelectorAll(".operator").forEach(button => {
    if (firstNum == null) {
        firstNum = parseFloat(displayValue);
    } else {
        secondNum = parseFloat(displayValue);
        displayValue = operate(operator, firstNum, secondNum).toString();
    }
    operator = button.textContent;
    displayValue = "";
    updateDisplay();
});


//function for equal
document.querySelector("#equal").addEventListener("click", () => {
    //check if operator and value is present
    if (operator && displayValue) {
        secondNum = parseFloat(displayValue);
        displayValue = operate(operator, firstNum, secondNum);
        reset();
        updateDisplay();
    }

});


//function for clear
document.querySelector("#clear").addEventListener("click", () => {
    clear();
});


//start the calculator
updateDisplay();