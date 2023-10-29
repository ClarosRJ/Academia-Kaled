// Botón para generar números del 1 al 10
var button1 = document.querySelector(".btn-success");
var button2 = document.querySelector(".btn-danger");
// Variable para almacenar el estado del botón
var button1State = true;
var button2State = true;

// Agregamos un evento de clic al botón
button1.addEventListener("click", function () {
  if (button1State) {
    document.querySelector(".flex-container").innerHTML = "";
    var j;
    // Generamos los números del 1 al 10
    for (j = "A"; j <= "Z"; j = String.fromCharCode(j.charCodeAt(0) + 1)) {
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
        utterThis.lang = "es-BO";
        utterThis.rate = 0.5;
        synth.speak(utterThis);
      });
    }
  }
});

var palabrasPorLetra = {
  A: ["Abeja", "Araña"],
  B: ["Ballena", "Bicicleta"],
  C: ["Castillo", "Coche"],
  D: ["Dinosaurio", "Dulce"],
  E: ["Elefante", "Erizo"],
  F: ["Flamenco", "Fútbol"],
  G: ["Gato", "Globo"],
  H: ["Hoja", "Hombre Araña"],
  I: ["Iguana", "Isla"],
  J: ["Jinete", "Juguete"],
  K: ["Kinder", "Koala"],
  L: ["Llama", "Lápiz"],
  M: ["Mariposa", "Mickey Mouse"],
  N: ["Niño", "Naranja"],
  O: ["Oso", "Ojo"],
  P: ["Perro", "Pato"],
  Q: ["Queso", "Quimico"],
  R: ["Rana", "Robot"],
  S: ["Sol", "Sandía"],
  T: ["Tren", "Tortuga"],
  U: ["Uva", "Unicornio"],
  V: ["Vaca", "Volcán"],
  W: ["Whisky", "Washington"],
  X: ["Xilófono", "Xochimilco"],
  Y: ["Yegua", "Yoyo"],
  Z: ["Zorro", "Zapatilla"],
  // Agregar más palabras para otras letras
};

// Agregamos un evento de clic al botón
button2.addEventListener("click", function () {
  if (button2State) {
    document.querySelector(".flex-container").innerHTML = "";
    var j;
    // Generamos los números del 1 al 10
    for (j = "A"; j <= "Z"; j = String.fromCharCode(j.charCodeAt(0) + 1)) {
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
        var letraClicada = this.textContent;

        // Obtener palabras correspondientes a la letra
        var palabrasCorrespondientes = palabrasPorLetra[letraClicada] || [
          "Palabra no encontrada",
        ];

        // Seleccionar una palabra aleatoria
        var palabraAleatoria =
          palabrasCorrespondientes[
            Math.floor(Math.random() * palabrasCorrespondientes.length)
          ];

        const synth = window.speechSynthesis;
        // Mostramos el número del div que fue presionado
        var numberClicked = this.textContent + " dé " + palabraAleatoria;
        // Obtenemos el número seleccionado
        const utterThis = new SpeechSynthesisUtterance(numberClicked);
        utterThis.lang = "es-BO";
        utterThis.rate = 0.5;
        synth.speak(utterThis);
      });
    }
  }
});
