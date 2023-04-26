const elementCommon = require("./ejercicio9");

test('Debe devolver un array', () => {
    const result = elementCommon([1, 2, 3], [2, 3, 4]);
    expect(Array.isArray(result)).toBe(true);
});

test('Debe devolver un array vacío si no hay elementos comunes', () => {
    const result = elementCommon([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([]);
});

test('Debe devolver un array con los elementos comunes de dos arrays de cadenas de texto', () => {
    const array1 = ['Hola', 'Mundo', 'JavaScript'];
    const array2 = ['Adiós', 'Mundo', 'TypeScript'];
    const result = elementCommon(array1, array2);
    expect(result).toEqual(['Mundo']);
  });