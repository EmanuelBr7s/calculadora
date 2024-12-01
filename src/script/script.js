// Paso 1: Declaración de variables
let num1, num2, operacion;

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: División por cero no permitida.";
        }
        return num1 / num2;
    } else {
        return "Operación inválida. Por favor, elija entre suma, resta, multiplicacion o division.";
    }
}

// Paso 4: Bucle para realizar múltiples operaciones
while (true) {
    // Simulación de entrada del usuario
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division o salir):").toLowerCase();

    if (operacion === "salir") {
        alert("¡Gracias por usar la calculadora! Hasta pronto.");
        break;
    }

    // Realizar la operación y mostrar el resultado
    const resultado = realizarOperacion(num1, num2, operacion);
    alert(`El resultado de la operación es: ${resultado}`);
}