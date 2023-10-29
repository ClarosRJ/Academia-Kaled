// Botón para generar números del 1 al 10
var button1 = document.querySelector(".btn-success");
var button2 = document.querySelector(".btn-warning");
var button3 = document.querySelector(".btn-danger");
// Variable para almacenar el estado del botón
var button1State = true;
var button2State = true;
var button3State = true;

// Agregamos un evento de clic al botón
button1.addEventListener("click", function () {
  if (button1State) {
    document.querySelector(".flex-container").innerHTML = "";
    var j;
    // Generamos los números del 1 al 10
    for (j = 1; j <= 10; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box");
      div.textContent = j;
      document.querySelector(".flex-container").appendChild(div);

      // Agregamos un oyente de eventos mouseover al div
      div.addEventListener("mouseover", function () {
        // Cambiamos el cursor al icono de mano
        this.style.cursor = "pointer";
        var divs = document.querySelectorAll(".flex-box");
        for (var i = 0; i < divs.length; i++) {
          divs[i].addEventListener("click", function () {
            this.classList.add("clicked");
          });
        }
      });
      // Agregamos un oyente de eventos click al div
      div.addEventListener("click", function () {
        const synth = window.speechSynthesis;
        // Mostramos el número del div que fue presionado
        var numberClicked = this.textContent;
        //alert("Presionaste el número " + numberClicked);
        // Obtenemos el número seleccionado
        const utterThis = new SpeechSynthesisUtterance(numberClicked);
        utterThis.lang = "en-US";
        utterThis.rate = 0.5;
        synth.speak(utterThis);
      });
    }
  }
});

// Agregamos un evento de clic al botón2
button2.addEventListener("click", function () {
  if (button1State) {
    document.querySelector(".flex-container").innerHTML = "";
    var j;
    // Generamos los números del 1 al 20
    for (j = 1; j <= 20; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box");
      div.textContent = j;
      document.querySelector(".flex-container").appendChild(div);

      // Agregamos un oyente de eventos mouseover al div
      div.addEventListener("mouseover", function () {
        // Cambiamos el cursor al icono de mano
        this.style.cursor = "pointer";
        var divs = document.querySelectorAll(".flex-box");
        for (var i = 0; i < divs.length; i++) {
          divs[i].addEventListener("click", function () {
            this.classList.add("clicked");
          });
        }
      });
      // Agregamos un oyente de eventos click al div
      div.addEventListener("click", function () {
        const synth = window.speechSynthesis;
        // Mostramos el número del div que fue presionado
        var numberClicked = this.textContent;
        //alert("Presionaste el número " + numberClicked);
        // Obtenemos el número seleccionado
        const utterThis = new SpeechSynthesisUtterance(numberClicked);
        utterThis.lang = "en-US";
        utterThis.rate = 0.5;
        synth.speak(utterThis);
      });
    }
  }
});
// Agregamos un evento de clic al botón3
button3.addEventListener("click", function () {
  if (button1State) {
    document.querySelector(".flex-container").innerHTML = "";
    var j;
    // Generamos los números del 1 al 100
    for (j = 1; j <= 100; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box");
      div.textContent = j;
      document.querySelector(".flex-container").appendChild(div);

      // Agregamos un oyente de eventos mouseover al div
      div.addEventListener("mouseover", function () {
        // Cambiamos el cursor al icono de mano
        this.style.cursor = "pointer";
        var divs = document.querySelectorAll(".flex-box");
        for (var i = 0; i < divs.length; i++) {
          divs[i].addEventListener("click", function () {
            this.classList.add("clicked");
          });
        }
      });
      // Agregamos un oyente de eventos click al div
      div.addEventListener("click", function () {
        const synth = window.speechSynthesis;
        // Mostramos el número del div que fue presionado
        var numberClicked = this.textContent;
        //alert("Presionaste el número " + numberClicked);
        // Obtenemos el número seleccionado
        const utterThis = new SpeechSynthesisUtterance(numberClicked);
        utterThis.lang = "en-US";
        utterThis.rate = 0.5;
        synth.speak(utterThis);
      });
    }
  }
});
