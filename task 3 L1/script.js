// Get the display elements
const display = document.getElementById('display');
const operationDisplay = document.getElementById('operation-display');

// Initialize variables
let firstNumber = '';
let operator = '';
let secondNumber = '';
let shouldResetDisplay = false;
let lastResult = '';

// Add click event listeners to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Handle number buttons
        if (button.classList.contains('number')) {
            handleNumber(value);
        }
        // Handle operator buttons
        else if (button.classList.contains('operator')) {
            handleOperator(value);
        }
        // Handle equals button
        else if (button.classList.contains('equals')) {
            calculate();
        }
        // Handle clear button
        else if (button.classList.contains('clear')) {
            clear();
        }
        // Handle decimal button
        else if (button.classList.contains('decimal')) {
            handleDecimal();
        }
    });
});

// Handle number input
function handleNumber(num) {
    if (shouldResetDisplay) {
        display.value = num;
        shouldResetDisplay = false;
    } else {
        if (display.value === '0') {
            display.value = num;
        } else {
            display.value += num;
        }
    }
}

// Handle operator input
function handleOperator(op) {
    if (firstNumber && operator && !shouldResetDisplay) {
        calculate();
    }
    
    firstNumber = display.value;
    operator = op;
    shouldResetDisplay = true;
    updateOperationDisplay();
}

// Handle decimal point
function handleDecimal() {
    if (shouldResetDisplay) {
        display.value = '0.';
        shouldResetDisplay = false;
    } else if (!display.value.includes('.')) {
        display.value += '.';
    }
}

// Update operation display
function updateOperationDisplay() {
    operationDisplay.textContent = `${firstNumber} ${operator}`;
}

// Calculate result
function calculate() {
    if (!operator || !firstNumber) return;

    secondNumber = display.value;
    let result;

    // Convert strings to numbers
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    // Perform calculation based on operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error';
                operationDisplay.textContent = '';
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    // Format result to avoid long decimals
    result = parseFloat(result.toFixed(8));
    
    // Display result
    display.value = result;
    lastResult = result;
    
    // Update operation display
    operationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    
    // Reset variables
    firstNumber = result.toString();
    operator = '';
    secondNumber = '';
    shouldResetDisplay = true;
}

// Clear calculator
function clear() {
    display.value = '0';
    operationDisplay.textContent = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    lastResult = '';
    shouldResetDisplay = false;
} 