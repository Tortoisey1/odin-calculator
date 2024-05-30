let firstNum, secondNum, operator;

let display = document.querySelector(".display");
let displayValue ='';

let waitForSecondNum = false;

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
        if (waitForSecondNum) {
            displayValue = button.textContent;
            waitForSecondNum = false;
        } else {
            displayValue += button.textContent;
        }
        updateDisplay();
    });
});


//function for operators
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (firstNum == null) {
            firstNum = parseFloat(displayValue);
        } else if (!waitForSecondNum) {
            secondNum = parseFloat(displayValue);
            firstNum = operate(operator, firstNum, secondNum);
            displayValue = firstNum.toString();
        }
        operator = button.textContent;
        waitForSecondNum = true;
        updateDisplay();
    });
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