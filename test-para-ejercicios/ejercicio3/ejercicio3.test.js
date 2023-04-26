const searchSentence = require("./ejercicio3");

test('La función devuelve 0 si la oración no contiene la palabra buscada', () => {
    const sentence = 'Esta oración no contiene la palabra buscada.';
    const search = 'banana';

    const result = searchSentence(sentence, search);
    expect(result).toBe(0);

});

test('La función encuentra correctamente la "palabra" buscada, se encuentra dos veces', () => {
    const sentence = 'La palabra es la palabra de si';
    const search = 'palabra';

    const result = searchSentence(sentence, search);
    expect(result).toBe(2);
  });

test('La función maneja correctamente la eliminación de puntuación y mayúsculas/minúsculas', () => {
    const sentence = 'Esta Oración, ConTiene puntuación y MayúsCulas, PERO la palABra buscada NO.';
    const search = 'palabra';

    const result = searchSentence(sentence, search);
    expect(result).toBe(1);
  });

test('La función devuelve un número', () => {
    const sentence = 'Esta es una oración de prueba.';
    const search = 'prueba';

    const result = searchSentence(sentence, search);
    expect(typeof result).toBe('number');
});