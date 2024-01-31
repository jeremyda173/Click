// this function is called when the user clicks on the button and the button is clicked again on the button itself and the button is clicked again on the button itself. 


document.getElementById("button-10").addEventListener("click", function () {
  var clickA = document.getElementById("cont-click-10");

  if (clickA.style.display === "none") {
      clickA.style.display = "block";
  } else {
      clickA.style.display = "none";
  }

})

// Obtener referencias a los elementos del DOM
var button = document.getElementById('button-click');
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

// document.getElementById("button-15").addEventListener("click", function () {
//   var clickB = document.getElementById("cont-click-15");

//   if (clickB.style.display === "none") {
//       clickB.style.display = "block";
//   } else {
//       clickB.style.display = "none";
//   }

// })


// document.getElementById("click").addEventListener("click", function() {
//   var seccion = document.getElementById("");

//   if (seccion.style.display === "none") {
//       seccion.style.display = "block";
//   } else {
//       seccion.style.display = "none";
//   }
// });


// let clickCount = 0;

// function incrementCounter() {
//   clickCount++;
//   document.getElementById('counter').innerHTML = clickCount;
// }
