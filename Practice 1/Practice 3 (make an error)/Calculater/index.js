
document.getElementById("num1-el").value = num1
document.getElementById("num2-el").value = num2
let total = 0

// Create four functions: add(), subtract(), divide(), multiply()

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
const sum = () => {
    document.getElementById("sum-el").textContent = 'Sum: ' + total;
};
sum();
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
const add = () => {
    total = num1 + num2
    sum();
};
const Subtract = () => {
    total = num1 - num2;
        sum();
};
const Divide = () => {
    total = num1 / num2;
    sum();
};
const Multiply = () => {
    total = num1 * num2
    sum();
};
