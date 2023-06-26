export function Soma(num1, num2){
    return (parseFloat(num1) + parseFloat(num2)).toFixed(2);
}

export function Sub(num1, num2){
    return(num1 - num2).toFixed(2)
}

export function Mult(num1, num2){
    return(num1 * num2).toFixed(2)
}

export function Div(num1, num2){
    return(num1 / num2).toFixed(2)
}

export function notANumber(value){
    return isNaN(value) || value == ""
}