// Obtener referencias a los elementos del DOM
var button = document.getElementById('myButton');
var counter = document.getElementById('counter');

// Variable para almacenar la cantidad de clics
var count = 0;

// Función para manejar el evento de clic
function handleClick() {
  // Incrementar el contador en 1
  count++;
  // Actualizar el contenido del elemento "counter" con el valor del contador
  counter.textContent = count;
}

// Asociar la función de clic al evento de clic del botón
button.addEventListener('click', handleClick);