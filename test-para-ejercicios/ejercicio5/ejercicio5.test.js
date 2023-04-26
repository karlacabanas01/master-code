const xForX = require("./ejercicio5");

test('Debería devolver si está correcoto, 50', () => {
    const number = 200
    const percent = 25 

    const result = xForX(number, percent);
    expect(result).toEqual(50);
});

test('Debería devolver 0 si el SEGUNDO parámetro es 0', () => {
    const result = xForX(100, 0);
    expect(result).toEqual(0);
});

test('Debería devolver 0 si el PRIMER parámetro es 0', () => {
    const result = xForX(0, 50);
    expect(result).toEqual(0);
});