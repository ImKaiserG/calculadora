let pantalla = document.getElementById('pantalla');
let operacionActual = '';
let operador = '';
let valorAnterior = '';

const agregarNumero = (numero) => {
    operacionActual += numero;
    pantalla.value = operacionActual;
};

const operar = (op) => {
    valorAnterior = operacionActual;
    operador = op;
    operacionActual = '';
};

const limpiar = () => {
    operacionActual = '';
    operador = '';
    valorAnterior = '';
    pantalla.value = '';
};

const calcular = () => {
    let resultado;
    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(operacionActual);

    switch (operador) {
        case '+':
            resultado = `${num1 + num2}`;
            break;
        case '-':
            resultado = `${num1 - num2}`;
            break;
        case '*':
            resultado = `${num1 * num2}`;
            break;
        case '/':
            resultado = num2 !== 0 ? `${num1 / num2}` : 'Error';
            break;
        default:
            resultado = 'Error';
    }

    pantalla.value = resultado;
    operacionActual = resultado;
    operador = '';
};
