document.getElementById('calculate').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const result = document.getElementById('result');

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Invalid input. Please enter valid numbers.";
        return;
    }

    let output;

    // Perform calculation
    if (operation === '+') {
        output = num1 + num2;
    } else if (operation === '-') {
        output = num1 - num2;
    } else if (operation === '*') {
        output = num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            result.textContent = "Error: Division by zero is not allowed.";
            return;
        }
        output = num1 / num2;
    } else {
        result.textContent = "Invalid operation. Please use +, -, *, or /.";
        return;
    }

    result.textContent = `Result: ${output}`;
});
