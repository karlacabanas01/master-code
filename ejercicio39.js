function comprobarEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
console.log(
    "¿Es un email?",
    comprobarEmail("victor@victor.com")
);