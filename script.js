const button = document.querySelectorAll("button");
const display = document.querySelector("#display");
const result = document.querySelector("#result");

let firstNumber = 0, secondNumber = 0;
let firstTurn = true, secondTurn = false;
let resultNumber = 0;
let operator;

button.forEach((event) => {
    event.addEventListener("click", (mouseEvent) => handleInput(mouseEvent))
})

function handleInput(mouseEvent) {
    const mouseId = mouseEvent.target.id;
    switch (mouseId) {
        case "ac":
            display.textContent = 0;
            result.textContent = "";
            firstNumber = 0;
            secondNumber = 0;
            firstTurn = true;
            break;
        case "percent":
            display.textContent = `${display.textContent / 100}`;
            if (firstTurn) {
                firstNumber = firstNumber / 100;
            } else {
                secondNumber = secondNumber / 100;
            }
            break;
        case "sign":
            display.textContent = `${-display.textContent}`;
            if (firstTurn) {
                firstNumber = -firstNumber;
            } else {
                secondNumber = -secondNumber;
            }
            break;
        case "divide":
            display.textContent = "/";
            operator = "/";
            firstTurn = false;
            secondTurn = true;
            break;
        case "multiply":
            display.textContent = "*";
            operator = "*";
            firstTurn = false;
            secondTurn = true;
            break;
        case "subtract":
            display.textContent = "-";
            operator = "-";
            firstTurn = false;
            secondTurn = true;
            break;
        case "add":
            display.textContent = "+";
            operator = "+";
            firstTurn = false;
            secondTurn = true;
            break;
        case "dot":
            display.textContent += mouseEvent.target.textContent;

            break;
        case "equal":
            resultNumber = operate(firstNumber, secondNumber, operator);
            result.textContent = resultNumber;
            firstNumber = resultNumber;
            firstTurn = true;
            display.textContent = "";
            break;
        default:
            if (display.textContent == 0 || checkOperator(display.textContent))
                display.textContent = "";

            display.textContent += mouseEvent.target.textContent;
            if (firstTurn) {
                firstNumber = parseFloat(display.textContent);
            } else {
                secondNumber = parseFloat(display.textContent);
            }
    }
}

function operate(firstNumber, secondNumber, operator) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "/":
            if (secondNumber == 0)
                return "Not a number"
            return (firstNumber / secondNumber).toFixed(4);
        case "*":
            return firstNumber * secondNumber;
    }
}

function checkOperator(operator) {
    if (operator == "+" || operator == "-" || operator == "/" || operator == "*")
        return true;
    return false;
}