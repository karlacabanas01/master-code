const isPalindrome = require("./ejercicio2");

test("Comprobar si la funcion palindromo está definida", () => {
    expect(isPalindrome).toBeDefined();
});

test("Es un palindormo", () => {
    expect(isPalindrome("otto")).toEqual(true);
})

test("NO es un palindormo", () => {
     expect(isPalindrome("victor")).toBe(false);
})