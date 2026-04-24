// calcu.js

// Importing math.js library
import { create, all } from 'mathjs';

const math = create(all, {
    // Custom configuration if needed
});

// Function to validate input
function validateInput(input) {
    // simple regex to allow only numbers, operators, and parentheses
    const regex = /^[0-9+\-*/().]+$/;
    return regex.test(input);
}

// Main function to perform calculations
function calculate(input) {
    if (!validateInput(input)) {
        throw new Error('Invalid input!');
    }
    // Replace eval with math.js evaluation
    return math.evaluate(input);
}

// Example usage of the calculate function
console.log(calculate('3 + 5 * (2 - 8)'));

// Support for keyboard input (this part is pseudo-code for a web environment)
document.addEventListener('keypress', function(event) {
    const key = event.key;
    // captures number and operators being pressed
    if (/^[0-9+\-*/()]$/.test(key)) {
        // Add key to the input (assuming an input field exists)
        document.getElementById('calcInput').value += key;
    } else if (key === 'Enter') {
        try {
            const result = calculate(document.getElementById('calcInput').value);
            console.log('Result:', result);
            // display result in the UI
        } catch (error) {
            console.error(error.message);
        }
    }
});
