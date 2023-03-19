function addition (inputOne, inputTwo)  {
    return inputOne + inputTwo
}

function subtraction (inputOne, inputTwo)   {
    return inputOne - inputTwo
}

function multiply(inputOne, inputTwo) {
    return inputOne * inputTwo
}

function divide (inputOne,inputTwo) {
    return inputOne / inputTwo
}

function operate(operator, numOne, numTwo) {
    if(operator === '+')
    {
        return addition(numOne,numTwo)
    }

    else if (operator === '-')
    {
        return subtraction(numOne,numTwo)
    }

    else if (operator === '*')
    {
        return multiply(numOne,numTwo)
    }

    else if (operator === '/')
    {
        return divide(numOne,numTwo)
    }
}

console.log(operate('/',4,2));








