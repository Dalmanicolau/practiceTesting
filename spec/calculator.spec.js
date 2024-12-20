const {suma, rest, mult, div, raizConExponente, percent} = require("../src/calculator")

describe("Pruebas para la calculadora", () => {
    it("La funcion debe sumar dos numeros correctamente", () => {
        expect(suma(2, 2)).toEqual(4);
        expect(suma(3, 5)).toEqual(8);
        expect(suma(-10, 3)).toEqual(-7);
    })

    it("La funcion debe restar dos numeros correctamente", () => {
        expect(rest(5, 3)).toEqual(2);
        expect(rest(20, 45)).toEqual(-25);
        expect(rest(-3, -3)).toEqual(0);
    })

    it("La funcion debe multiplicar dos numeros correctamente", () => {
        expect(mult(5, 3)).toEqual(15);
        expect(mult(2, 45)).toEqual(90);
        expect(mult(-3, -3)).toEqual(9);
    })

    it("La funcion debe dividir dos numeros correctamente", () => {
        expect(div(9, 3)).toEqual(3);
        expect(div(5, 2)).toEqual(2.5);
        expect(div(-15, 3)).toEqual(-5);
    })

    it("La funcion debe calcular la raiz dos numeros correctamente", () => {
        expect(raizConExponente(9, 2)).toEqual(3);
        expect(raizConExponente(27, 3)).toEqual(3);
        expect(raizConExponente(16, 4)).toEqual(2);
    })

    it("La funcion debe calcular el porcentaje de dos numeros correctamente", () => {
        expect(percent(1000, 20)).toEqual(200);
        expect(percent(45, 30)).toEqual(13.5);
        expect(percent(160, 40)).toEqual(64);
    })
});