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


alert(operate("*",5,10))