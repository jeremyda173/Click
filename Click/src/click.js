var clickCount = 0;
var secondsCount = 0;
var timerInterval;

function showContainer(seconds) {
  var container = document.getElementById('result-container');
  var clickAreaContainer = document.getElementById('click-area-container');
  var timeSpan = document.getElementById('time');
  var clickCountSpan = document.getElementById('click-count');

  // Restablecer contadores
  clickCount = 0;
  secondsCount = seconds;

  // Mostrar contenedores
  container.style.display = 'block';
  clickAreaContainer.innerHTML = '<p>¡Haz clic aquí!</p>';
  timeSpan.textContent = seconds;
  clickCountSpan.textContent = clickCount;

  // Iniciar temporizador
  timerInterval = setInterval(function() {
    if (secondsCount > 0) {
      secondsCount--;
      timeSpan.textContent = secondsCount;
    } else {
      clearInterval(timerInterval);
      container.style.display = 'none';
    }
  }, 1000);
}

function incrementClicks() {
  clickCount++;
  var clickCountSpan = document.getElementById('click-count');
  clickCountSpan.textContent = clickCount;

  // Calcular CPS (Clics por segundo)
  var cps = (clickCount / (secondsCount - secondsCount % 60)).toFixed(2);
  var cpsSpan = document.getElementById('cps');
  cpsSpan.textContent = cps;
}

function startChallenge(seconds) {
  showContainer(seconds);
}
