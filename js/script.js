import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { Soma, Sub, Mult, Div, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputNum1 = document.querySelector('#n1')
const inputNum2 = document.querySelector('#n2')

const selectOperador = document.querySelector('#operador')

form.onsubmit = function (event) {
    event.preventDefault()

    const num1 = inputNum1.value
    const num2 = inputNum2.value
    const operador = selectOperador.value

    const num1OrNum2IsNotANumber = notANumber(num1) || notANumber(num2)

    if (num1OrNum2IsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    if (operador === "+") {
        const result = Soma(num1, num2)
        displayResultMessage(result)
        cleanInput(inputNum1, inputNum2)
    } else if (operador === "-") {
        const result = Sub(num1, num2)
        displayResultMessage(result)
        cleanInput(inputNum1, inputNum2)
    } else if (operador === "*") {
        const result = Mult(num1, num2)
        displayResultMessage(result)
        cleanInput(inputNum1, inputNum2)
    } else if (operador === "/") {
        const result = Div(num1, num2)
        displayResultMessage(result)
        cleanInput(inputNum1, inputNum2)
    }
}

form.oninput = () => AlertError.close()

function displayResultMessage(result){
    const message = `O resultado do seu cálculo é: ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function cleanInput (inputNum1, inputNum2){
    inputNum1.value = ''
    inputNum2.value = ''
}