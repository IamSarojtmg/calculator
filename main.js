const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equals')
const display = document.querySelector('.display')
const clear = document.querySelector('.clear')
const resultDisplay = document.querySelector('.result')
resultDisplay.textContent = 0

let valOne = '';
let valTwo = '';
let opt = '';
let result = '';

numbers.forEach(num =>{
    num.addEventListener('click', ()=> {
        if(opt === ''){
            valOne += num.textContent
            display.textContent = valOne
        }
        else {
            valTwo += num.textContent
            display.textContent = valOne + opt + valTwo
        }
    })
})

operators.forEach(opts => {
    opts.addEventListener('click', ()=>{
        if(opt === ''&& typeof(result) === 'string'){
            opt = opts.textContent;
            display.textContent = valOne + opt
        } else if (opt === '+'){
            result = addition(valOne,valTwo);
            valOne = result
            opt = opts.textContent
            display.textContent = valOne + opt
            resultDisplay.textContent = valOne
            valTwo = ''
            result = ''

        } else if (opt === '-'){
            result = subtraction(valOne,valTwo)
            valOne = result
            opt = opts.textContent
            display.textContent = valOne + opt
            resultDisplay.textContent = valOne
            valTwo = ''
            result = ''

        } else if(opt === 'x'){
            if(valTwo === ''){
                result = multiply(valOne,1)
                valOne = result
                opt = opts.textContent
                display.textContent = valOne + opt
                resultDisplay.textContent = valOne
                valTwo = ''
                result = ''
            } else {
                result = multiply(valOne,valTwo)
                valOne = result
                opt = opts.textContent
                display.textContent = valOne + opt
                resultDisplay.textContent = valOne
                valTwo = ''
                result = ''
            }
        } else if(opt === '/') {
            if(valTwo === ''){
                result = divide(valOne,1);
                valOne = result
                opt = opts.textContent
                display.textContent = valOne + opt
                resultDisplay.textContent = valOne
                valTwo = ''
                result = ''
            } else {
                result = divide(valOne,valTwo);
                valOne = Number(result).toFixed(2) // converts to 2 decimal points
                opt = opts.textContent
                display.textContent = valOne + opt
                resultDisplay.textContent = valOne
                valTwo = ''
                result = ''
            }
        }
        

    } )
})

equal.addEventListener('click', ()=>{
    if(valTwo === ''){
        display.textContent = valOne
    } else if(opt === '+'){
        result = addition(valOne,valTwo)
        valOne = result
        resultDisplay.textContent = valOne
        valTwo = ''
        result = ''
        display.textContent = valOne
    } else if (opt === '-'){
        result = subtraction(valOne,valTwo)
        valOne = result
        resultDisplay.textContent = valOne
        valTwo = ''
        result = ''
        display.textContent = valOne
        } else if (opt === 'x'){
        result = multiply(valOne,valTwo)
        valOne = result
        resultDisplay.textContent = valOne
        valTwo = ''
        result = ''
        display.textContent = valOne 
        } else {
            result = divide(valOne,valTwo)
            valOne = Number(result).toFixed(2)
            resultDisplay.textContent = valOne
            valTwo = ''
            result = ''
            display.textContent = valOne
        }
    })

function addition (inputOne, inputTwo)  {
    return Number(inputOne) + Number(inputTwo)
}

function subtraction (inputOne, inputTwo)   {
    return Number(inputOne) - Number(inputTwo)
}

function multiply(inputOne, inputTwo) {
    return Number(inputOne) * Number(inputTwo)
}

function divide (inputOne,inputTwo) {
    return Number(inputOne) / Number(inputTwo)
}

clear.addEventListener('click', () => {
    location.reload();
});
