function DivideNumbers() {
  let num1 = parseInt(prompt("Enter First Number"), 10);
  let num2 = parseInt(prompt("Enter Second Number"), 10);

  try {
    if (num2 === 0) {
      document.write("Division by zero is not allowed.");
    }
    let result = num1 / num2;
    alert(`The result of dividing ${num1} by ${num2} is ${result}`);
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}
DivideNumbers();
