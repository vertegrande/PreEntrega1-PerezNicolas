function saludar() {
    let nombre = "";
    while (nombre === "") {
      nombre = prompt("Por favor, ingrese su nombre:");
      if (nombre === null) {
        alert("El ingreso ha sido cancelado.");
        break;
      }
    }
    if (nombre !== "") {
      console.log("Nombre ingresado: " + nombre);
    } else {
      console.log("No se proporcionó un nombre válido.");
    }
  }
  //  Mostrar Nombre
  saludar();
  //  Solicitar DNI
let intentos = 3;
let dni;
while (intentos > 0) {
  const dniInput = prompt(`Por favor, ingrese su número de DNI (${intentos} intentos restantes):`);
    // Verificar si se ingresa un dato
  if (dniInput === null) {
    alert("Se acabaron tus intentos, vuelve cuando los chanchos vuelen");
    break;
  }
    // convertir dato en Nº entero
  dni = parseInt(dniInput, 10);
// verifico dato y si DNI es válido
  if (!isNaN(dni) && dni >= 1000000 && dni <= 99999999) {
// Si DNI es válido, salimos del bucle
    alert("DNI válido: " + dni);
    break;
  } else {
// Si el DNI no es válido, mostramos  error
    alert("El DNI ingresado no es válido. Si no eres un Terminator, debes ser un número entre 1,000,000 y 99,999,999.");
    intentos--;
  }
}
//verificar si el número de intentos  ha llegado a cero
if (intentos === 0) {
  alert("Se agotaron los intentos.");
}
console.log (dni);
 //Solicito al usuario informacion de ingresos
 //parseFloat para convertir una cadena en un Numero decimal
 //parseInt  para convertir una cadena en un número entero
const ingresoMensual = parseFloat(prompt("Ingrese salario Neto Mensual:"))
const montoPrestamo = parseFloat(prompt("Ingrese monto de Prestamo a solicitar:"))
const cantidadCuotas = parseInt(prompt ("Ingrese el plazo del préstamo en meses:"))
const tasaAnual = parseFloat (prompt ("Ingrese la tasa de interés anual (porcentaje):"))
// verifico que usuario sea apto con los ingresos para el préstamo
if (ingresoMensual >= 100000 && montoPrestamo <= 900000)
{
// Calcular la tasa de interés mensual
const tasaMensual = tasaAnual / 12 / 100;
  // Calcular el pago mensual utilizando la fórmula del préstamo
const pagoMensual = (montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -cantidadCuotas));
 // Mostrar el resultado
alert(`Su pago mensual será de: $${pagoMensual.toFixed(2)} pronto nos comunicaremos contigo`);
console.log(`Su pago mensual será de: $${pagoMensual.toFixed(2)}`);
} else {
 alert("Lo sentimos, sus ingresos no cumplen con los requisitos para obtener el préstamo.");
 console.log("Ingresos Netos" + "" + "$" + ingresoMensual + " " + "No apto para prestamo"   );
}


