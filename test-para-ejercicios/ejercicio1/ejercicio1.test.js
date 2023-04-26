const tableMultiplication = require("./ejercicio1");

test('La función debe retornar la tabla de multiplicación correcta, si se le proporciona el número 7', () => {
  expect(tableMultiplication(7))
  .toBe("Table of 7 \n1 x 7 = 7 \n2 x 7 = 14 \n3 x 7 = 21 \n4 x 7 = 28 \n5 x 7 = 35 \n6 x 7 = 42 \n7 x 7 = 49 \n8 x 7 = 56 \n9 x 7 = 63 \n10 x 7 = 70 \n");
});

test('La función debe retornar la tabla de multiplicación correcta, si se le proporciona el número 5', () => {
    expect(tableMultiplication(5))
    .toBe("Table of 5 \n1 x 5 = 5 \n2 x 5 = 10 \n3 x 5 = 15 \n4 x 5 = 20 \n5 x 5 = 25 \n6 x 5 = 30 \n7 x 5 = 35 \n8 x 5 = 40 \n9 x 5 = 45 \n10 x 5 = 50 \n");
  });

  test('La función debe retornar una cadena de texto', () => {
    expect(typeof tableMultiplication(7)).toBe('string');
  });

  // test('La función no debe retornar nada cuando no se proporciona un argumento', () => {
  //   expect(tableMultiplication()).toBeUndefined();
  // });

  
  