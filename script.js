/* basic math operators */

function add(a, b) {
    return(a+b);
}

function subtract(a, b) {
    return(a-b);
}

function multiply(a,b) {
    return(a * b);
}

function divide(a,b) {
    return(a / b);
}

/* operate function to take an operator and 2 number and call above functions */

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);


    }
}

/* Adding numbers pressed to display */
let displayValue;

function addToDisplay(number) {
    document.getElementById("display").insertAdjacentHTML("beforeend", number);
    displayValue = document.getElementById("display").textContent;
}

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    addToDisplay("1");
}) 
const two = document.querySelector("#two");
two.addEventListener("click", () => {
    addToDisplay("2");
}) 
const three = document.querySelector("#three");
three.addEventListener("click", () => {
    addToDisplay("3");
}) 
const four = document.querySelector("#four");
four.addEventListener("click", () => {
    addToDisplay("4");
}) 
const five = document.querySelector("#five");
five.addEventListener("click", () => {
    addToDisplay("5");
}) 
const six = document.querySelector("#six");
six.addEventListener("click", () => {
    addToDisplay("6");
})
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    addToDisplay("7");
})  
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    addToDisplay("8");
}) 
const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    addToDisplay("9");
}) 

