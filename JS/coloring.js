// Botón para generar números del 1 al 10
var button1 = document.querySelector(".btn-success");
var button2 = document.querySelector(".btn-danger");
// Variable para almacenar el estado del botón
var button1State = true;
var button2State = true;

var coloresPrincipales = [
  "blue",
  "fuchsia",
  "red",
  "yellow",
  "lime",
  "aqua",
  "black",
  "white",
  "navy",
  "purple",
  "maroon",
  "olive",
  "green",
  "teal",
  "gray",
  "silver",
];

// Agregamos un evento de clic al botón
button1.addEventListener("click", function () {
  if (button1State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";
    var j;
    // Generamos los números del 1 al 10
    for (var j = 0; j < coloresPrincipales.length; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box");
      var colorNombre = coloresPrincipales[j];
      // Asignar el color como fondo y establecer el atributo 'data-color' para el nombre del color
      div.style.backgroundColor = colorNombre.toLowerCase();
      div.setAttribute("data-color", colorNombre);
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
        var colorNombre = this.getAttribute("data-color");
        decirColor(colorNombre);
      });
    }
  }
});

// Función para decir el nombre del color
function decirColor(nombre) {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(nombre);
  utterThis.lang = "en-US";
  utterThis.rate = 0.6;
  synth.speak(utterThis);
}

// Agregamos un evento de clic al botón

// Agregamos un evento de clic al botón
button2.addEventListener("click", function () {
  if (button2State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";
    var j;
    // Generamos los números del 1 al 10
    for (var j = 0; j < coloresPrincipales.length; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box2");
      var colorNombre = coloresPrincipales[j];
      div.textContent = coloresPrincipales[j];
      // Asignar el color como fondo y establecer el atributo 'data-color' para el nombre del color
      div.style.backgroundColor = colorNombre.toLowerCase();
      div.setAttribute("data-color", colorNombre);
      document.querySelector(".flex-container2").appendChild(div);

      // Agregamos un oyente de eventos mouseover al div
      div.addEventListener("mouseover", function () {
        // Cambiamos el cursor al icono de mano
        this.style.cursor = "pointer";
        var divs = document.querySelectorAll(".flex-box2");
        for (var i = 0; i < divs.length; i++) {
          divs[i].addEventListener("click", function () {
            this.classList.add("clicked");
          });
        }
      });
      // Agregamos un oyente de eventos click al div
      div.addEventListener("click", function () {
        var colorNombre = this.getAttribute("data-color");
        decirColor2(colorNombre);
      });
    }
  }
});
// Función para decir el nombre del color
function decirColor2(nombre) {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(nombre);
  utterThis.lang = "en-US";
  utterThis.rate = 0.6;
  synth.speak(utterThis);
}
