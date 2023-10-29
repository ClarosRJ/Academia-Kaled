// Botón para generar números del 1 al 10
var button1 = document.querySelector(".btn-success");
var button2 = document.querySelector(".btn-danger");
// Variable para almacenar el estado del botón
var button1State = true;
var button2State = true;

var animales = {
  perro: "perro",
  gato: "gato",
  cerdo: "cerdo",
  gallina: "gallina",
  oveja: "oveja",
  cocodrilo: "cocodrilo",
  ratón: "ratón",
  mapache: "mapache",
  pato: "pato",
  hipopótamo: "hipopótamo",
  camello: "camello",
  pescado: "pescado",
  abeja: "abeja",
  loro: "loro",
  león: "león",
  elefante: "elefante",
  jirafa: "jirafa",
  caballo: "caballo",
  oso: "oso",
  tigre: "tigre",
  cebra: "cebra",
  koala: "koala",
  delfín: "delfín",
  tortuga: "tortuga",
  serpiente: "serpiente",
  pingüino: "pingüino",
  águila: "águila",
  búho: "búho",
  ballena: "ballena",
  mono: "mono",
  tiburón: "tiburón",
  lobo: "lobo",
};

// Agregamos un evento de clic al botón
button1.addEventListener("click", function () {
  if (button1State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";

    for (var animal in animales) {
      if (animales.hasOwnProperty(animal)) {
        var div = document.createElement("div");
        div.classList.add("flex-box");

        var colorNombre = animales[animal];

        div.setAttribute("data-color", colorNombre);

        var imagenDiv = document.createElement("img");
        imagenDiv.src = "../images/animales/" + animal + ".jpg";
        div.appendChild(imagenDiv);

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
          var nombre = this.getAttribute("data-color");

          // Obtener palabras correspondientes a la letra
          var palabrasCorrespondientes = animales[nombre] || [
            "Palabra no encontrada",
          ];

          // Seleccionar una palabra aleatoria
          var ruidoanimal =
            palabrasCorrespondientes[
              Math.floor(Math.random() * palabrasCorrespondientes.length)
            ];
          decirNombre(nombre);
        });
      }
    }
  }
});

// Función para decir el nombre del color
function decirNombre(nombre) {
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

    for (var animal in animales) {
      if (animales.hasOwnProperty(animal)) {
        var div = document.createElement("div");
        div.classList.add("flex-box2");

        var colorNombre = animales[animal];
        div.textContent = animal;

        div.setAttribute("data-color", colorNombre);

        var imagenDiv = document.createElement("img");
        imagenDiv.src = "../images/animales/" + animal + ".jpg";
        div.appendChild(imagenDiv);

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
          var nombreAnimal = this.getAttribute("data-color"); // Supongamos que esto es el nombre del animal
          decirNombre(nombreAnimal); // Decir el nombre del animal al mismo tiempo
          setTimeout(function () {
            var sonidoAnimal = new Audio(
              "../Styles/sounds/" + nombreAnimal + ".mp3"
            ); // Ruta correcta al sonido del animal
            reproducirAudioPorTiempo(sonidoAnimal); // Reproducir durante 5 segundos después de decir el nombre
          }, 1500);
        });
      }
    }
  }
});
function reproducirAudioPorTiempo(sonidoAnimal) {
  sonidoAnimal.play();

  // Detener la reproducción después de la duración especificada
  setTimeout(function () {
    sonidoAnimal.pause();
    sonidoAnimal.currentTime = 0; // Reiniciar el tiempo de reproducción al inicio
  }, 2500); // 1000 milisegundos (1 segundo)
}
