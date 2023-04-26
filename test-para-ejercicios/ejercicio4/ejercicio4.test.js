const invertSentence =  require("./ejercicio4");

test('La función devuelve un string', () => {
    const text = 'Esta es una oración de prueba.';

    const result = invertSentence(text);
    expect(typeof result).toBe('string');
});

test("El texto se puede invertir", () => {
    const text = "holacomo";

    const result = invertSentence(text);
    expect(result).toBe('omocaloh');
});

module.exports = invertSentence;