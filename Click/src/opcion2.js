// this function is called when the user clicks on the button and the button is clicked again on the button itself and the button is clicked again on the button itself. 


document.getElementById("button-15").addEventListener("click", function () {
    var clickA = document.getElementById("cont-click-15");
  
    if (clickA.style.display === "none") {
        clickA.style.display = "block";
    } else {
        clickA.style.display = "none";
    }
  });
  
  var button = document.getElementById('button-click-2');
  var counter = document.getElementById('counter-2');
  var resetButton = document.getElementById('button-reset-2');
  var secondsCounter = document.getElementById('contador-segs-2');
  
  var count = 0;
  var secondsCountValue = 0;
  var interval;
  
  var isCounterActive = false;
  
  button.addEventListener('click', function() {
    if (!isCounterActive) {
      isCounterActive = true;
      iniciarConteo();
    }
    
    if (secondsCountValue < 15) {
      count++;
      counter.textContent = count;
    }
  });
  
  resetButton.addEventListener('click', function () {
    clearInterval(interval);
    isCounterActive = false;
    count = 0;
    secondsCountValue = 0;
    counter.textContent = count;
    secondsCounter.textContent = secondsCountValue;
  });
  
  function iniciarConteo() {
    count = 0;
    secondsCountValue = 0;
  
    interval = setInterval(function(){
      secondsCountValue++;
      secondsCounter.textContent = secondsCountValue;
  
      if (secondsCountValue === 15){
        clearInterval(interval);
        alert('¡Has completado el desafío! Has tardado ' + secondsCountValue + ' segundos en hacer ' + count + ' clic(s) en el botón.');
        resetButton.click(); // Reiniciar el contador después de mostrar la alerta
      }
    }, 1000);
  }
  
  
  
  // let contadorSegundos = 0
  // let intervalo;
  
  // function contadorSegundos() { 
  //  intervalo = setInterval(function(){
  //   contadorSegundos++
  //   actualizarSegundos()
  //  }, 1000)
  // }
  
  // function segundos(){
  //     let fecha = new Date()
  //     let horaActual = fecha.getHours() + ':'+ fecha.getMinutes() + ':' + fecha.getSeconds();
  //     document.write(horaActual)
  // }
  
  
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
  