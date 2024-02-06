// var clickCount = 0;
// var secondsCount = 0;
// var timerInterval;

// function showContainer() {
//     var container = document.getElementById('result-container');
//     container.style.display = 'block';
// }

// function resetCounters() {
//     clickCount = 0;
//     var clickCountSpan = document.getElementById('click-count');
//     clickCountSpan.textContent = clickCount;

//     var cpsSpan = document.getElementById('cps');
//     cpsSpan.textContent = '0.00';
// }

// function incrementClicks() {
//     clickCount++;
//     var clickCountSpan = document.getElementById('click-count');
//     clickCountSpan.textContent = clickCount;

//     // Calcular CPS (Clics por segundo)
//     var cps = (clickCount / (secondsCount - secondsCount % 60)).toFixed(2);
//     var cpsSpan = document.getElementById('cps');
//     cpsSpan.textContent = cps;
// }

// function showAlert() {
//     alert('¡Has completado el desafío! Has tardado ' + (secondsCount) + ' segundos en hacer ' + clickCount + ' clic(s) en el botón.');
// }

// function startChallenge(seconds) {
//     showContainer();
//     resetCounters();
//     secondsCount = seconds;

//     // Iniciar temporizador
//     timerInterval = setInterval(function () {
//         if (secondsCount > 0) {
//             secondsCount--;
//             var timeSpan = document.getElementById('time');
//             timeSpan.textContent = secondsCount;
//         } else {
//             clearInterval(timerInterval);
//             // Después de que el temporizador llega a cero, muestra la alerta
//             showAlert();
//             // Reiniciar todo
//             resetCounters();
//             var clickArea = document.getElementById('click-area-container');
//             clickArea.removeEventListener('click', incrementClicks);
//         }
//     }, 1000);

//     // Adjuntar el evento de clic al área designada
//     var clickArea = document.getElementById('click-area-container');
//     clickArea.addEventListener('click', incrementClicks);
// }


//






// Variables para el temporizador y el contador de clics





// Variables para el temporizador y el contador de clics





// Variables para el temporizador y el contador de clics

console.log("Hola chat");

// Variables para el temporizador y el contador de clics
let timer;
let clickCount = 0;
let challengeInProgress = false; // Variable para verificar si un desafío está en progreso

// Función para iniciar un desafío con la duración específica en segundos
function startChallenge(seconds) {
    // Detener el temporizador actual, si existe
    stopTimer();

    // Reiniciar contadores
    clickCount = 0;
    document.getElementById('click-count').textContent = clickCount;
    document.getElementById('cps').textContent = 0;

    // Establecer el temporizador y marcar que un desafío está en progreso
    let timeRemaining = seconds;
    document.getElementById('time').textContent = timeRemaining;
    challengeInProgress = true;

    // Actualizar el temporizador cada segundo
    timer = setInterval(function () {
        timeRemaining--;
        document.getElementById('time').textContent = timeRemaining;

        if (timeRemaining === 0) {
            // El desafío ha terminado, detener el temporizador
            stopTimer();

            // Calcular y mostrar CPS al final del desafío
            const cps = clickCount / seconds;
            document.getElementById('cps').textContent = cps.toFixed(2);
        }
    }, 1000);
}

// Función para detener el temporizador
function stopTimer() {
    clearInterval(timer);
    challengeInProgress = false;
}

// Función para incrementar el contador de clics
function incrementClicks() {
    if (challengeInProgress) {
        // Solo incrementar si un desafío está en progreso
        clickCount++;
        document.getElementById('click-count').textContent = clickCount;
    } else {
        // Si el desafío no está en progreso, iniciar uno al hacer clic en el área designada
        startChallenge(10); // Puedes cambiar el número según tus necesidades
    }
}

// Función para iniciar el cronómetro al hacer clic en el área de clics
document.getElementById('click-area-container').addEventListener('click', function() {
    if (!challengeInProgress) {
        startChallenge(10); // Puedes cambiar el número según tus necesidades
    }
});







// function incrementClicks() {
//   // Obtener el elemento del contador
//   const clickCountElement = document.getElementById('click-count');

//   // Obtener el valor actual del contador y convertirlo a un número
//   let currentCount = parseInt(clickCountElement.textContent);

//   // Incrementar el contador
//   currentCount++;

//   // Actualizar el contenido del contador en la interfaz
//   clickCountElement.textContent = currentCount;
// }


// function initTimer() {
//     // Inicializar el contador de segundos en cero y llamar a la función para mostrarlo por pantalla
//     var secondsCount = 0;
//     actualizarSegundo();
// }

