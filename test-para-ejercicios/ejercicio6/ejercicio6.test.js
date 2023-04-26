const side = require("./ejercicio6");

test('debería devolver una cadena de asteriscos de la longitud dada', () => {
    const result = side(5);

    expect(result).toHaveLength(5);
    expect(result).toMatch(/\*{5}/);
    expect(result).not.toContain(' ');
});

test('Devuelve un string', () => {

    const result = side(5);
    expect(typeof result).toBe('string');

});

test('Debe devolver un cuadrado con un solo asterisco si se pasa 1 como parámetro', () => {
    const result = side(1);
    expect(result).toEqual('*');
  });