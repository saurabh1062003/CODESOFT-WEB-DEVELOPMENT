let display = document.getElementById('display');
let currentInput = '';
let currentOperator = null;
let firstOperand = null;

function clearDisplay() {
    currentInput = '';
    currentOperator = null;
    firstOperand = null;
    display.innerText = '0';
}

function appendNumber(number) {
    if (currentInput === '' && number === '0') return; // Prevent leading zeros
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperator) {
        firstOperand = performCalculation();
    }
    currentOperator = operator;
    currentInput = '';
}

function performCalculation() {
    const secondOperand = parseFloat(currentInput);
    switch (currentOperator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
    }
    return secondOperand;
}

function calculate() {
    if (currentOperator && currentInput !== '') {
        const result = performCalculation();
        display.innerText = result;
        currentInput = '';
        currentOperator = null;
        firstOperand = result;
    }
}
