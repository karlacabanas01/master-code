const showStaircase = require("./ejercicio10");

test('Debería devolver un string', () => {
    const result = showStaircase(3);
    expect(typeof result).toBe('string');
});

test('Debería devolver una escalera de 1 nivel si se le pasa 1 como parámetro', () => {
    const expected = '[-]\n';
    const result = showStaircase(1);
    expect(result).toEqual(expected);
});

test('Debería devolver una cadena vacía si se le pasa 0 como parámetro', () => {
    const expected = '';
    const result = showStaircase(0);
    expect(result).toEqual(expected);
  });
  