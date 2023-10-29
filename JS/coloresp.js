// Botón para generar números del 1 al 10
var button1 = document.querySelector(".btn-success");
var button2 = document.querySelector(".btn-danger");
// Variable para almacenar el estado del botón
var button1State = true;
var button2State = true;

var coloresEnEspanol = {
  blue: "azul",
  fuchsia: "fucsia",
  red: "rojo",
  yellow: "amarillo",
  lime: "lima",
  aqua: "agua",
  black: "negro",
  white: "blanco",
  navy: "azul marino",
  purple: "morado",
  maroon: "marron",
  olive: "verde oliva",
  green: "verde",
  teal: "verde azulado",
  gray: "gris",
  silver: "plateado",
};

// Agregamos un evento de clic al botón
button1.addEventListener("click", function () {
  if (button1State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";
    var j;
    // Generamos los números del 1 al 10
    for (var color in coloresEnEspanol) {
      if (coloresEnEspanol.hasOwnProperty(color)) {
        var div = document.createElement("div");
        div.classList.add("flex-box");

        // El valor (nombre del color en español) se obtiene usando coloresEnEspanol[color]
        var colorNombre = coloresEnEspanol[color];

        // Asignar el color como fondo y establecer el atributo 'data-color' para el nombre del color
        div.style.backgroundColor = color.toLowerCase();
        div.setAttribute("data-color", colorNombre);

        document.querySelector(".flex-container").appendChild(div);

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
  }
});

// Función para decir el nombre del color
function decirColor(nombre) {
  switch (nombre) {
    case "blue":
    case "fuchsia":
    case "red":
    case "yellow":
    case "lime":
    case "aqua":
    case "black":
    case "white":
    case "navy":
    case "purple":
    case "maroon":
    case "olive":
    case "green":
    case "teal":
    case "gray":
    case "silver":
      nombre = coloresEnEspanol[nombre]; // Reemplaza el nombre del color en inglés con el equivalente en español
      break;
    default:
      // Manejar el caso en el que no se encuentra el color
      console.log("Color no encontrado en la lista.");
  }

  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(nombre);
  utterThis.lang = "es-BO";
  utterThis.rate = 0.5;
  synth.speak(utterThis);
}
// Agregamos un evento de clic al botón
button2.addEventListener("click", function () {
  if (button2State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";

    var j;
    // Generamos los números del 1 al 10
    for (var color in coloresEnEspanol) {
      if (coloresEnEspanol.hasOwnProperty(color)) {
        var div = document.createElement("div");
        div.classList.add("flex-box2");

        // El valor (nombre del color en español) se obtiene usando coloresEnEspanol[color]
        var colorNombre = coloresEnEspanol[color];

        // Asignar el color como fondo y establecer el atributo 'data-color' para el nombre del color
        div.style.backgroundColor = color.toLowerCase();
        div.setAttribute("data-color", colorNombre);
        // Agregar el nombre del color como texto dentro del div
        div.textContent = colorNombre;
        document.querySelector(".flex-container2").appendChild(div);

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
          decirColor(colorNombre);
        });
      }
    }
  }
});
