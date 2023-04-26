const oddNumber = require("./ejercicio7");

test('Devuelve 0 cuando los dos números son iguales', () => {
    const result = oddNumber(2, 2);
    expect(result).toBe(0);
});

test('Devuelve 0 cuando el primer número es mayor que el segundo número', () => {
    const result = oddNumber(10, 1);
    expect(result).toBe(0);
});

test('Devuelve el número correcto de números impares', () => {
    const result = oddNumber(1, 10);
    expect(result).toBe(5);
});