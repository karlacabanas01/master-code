const reverseNumber = require("./ejercicio8");

test('La función invierte el número correctamente', () => {
    const result = reverseNumber(123);
    expect(result).toBe(321);
});

test('Debe devolver un número', () => {
    const result = reverseNumber(123);
    expect(typeof result).toBe('number');
});

test('Debe devolver NaN si se le pasa una cadena de texto', () => {
    const result = reverseNumber('Hola mundo');
    expect(result).toBeNaN();
});