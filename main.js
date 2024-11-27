// funcion parq saber si un numero par o impar 
function verificarParImpar() {
    // ingrese un número
    let numero = prompt("ingresa un número:");

    // transformar el input a un número
    numero = Number(numero);

    // Verificar el input si es un número válido
    if (isNaN(numero)) {
        alert("ingresa un número válido.");
    } else {
        // Determinar si el número es par o impar
        if (numero % 2 === 0) {
            alert("El número " + numero + " es par.");
        } else {
            alert("El número " + numero + " es impar.");
        }
    }
}
// Llamar a la función
verificarParImpar();