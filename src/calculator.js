const suma = (a, b) => {
    return a + b;
};

const rest = (a, b) => {
    return a - b;
};

const mult = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    if (b === 0) {
        throw new Error("No se puede dividir por 0")
    }
    return a / b;
};

const raizConExponente = (num, exponente) => {
    if (num < 0 && exponente % 2 === 0) {
        throw new Error("No se puede calcular la raíz de un número negativo con un exponente par");
    }
    return num ** (1 / exponente);
};

const percent = (a, b) => {
     return a * b / 100;
}


module.exports = {suma, rest, mult, div, raizConExponente, percent};