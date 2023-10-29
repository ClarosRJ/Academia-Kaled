// Botón para generar números del 1 al 10
var button1 = document.querySelector(".btn-primary");
var button2 = document.querySelector(".btn-danger");
// Variable para almacenar el estado del botón
var button1State = true;
var button2State = true;
var animales = {
  perro: "dog",
  gato: "cat",
  cerdo: "pig",
  gallina: "chicken",
  oveja: "sheep",
  cocodrilo: "crocodile",
  ratón: "mouse",
  mapache: "raccoon",
  pato: "duck",
  hipopótamo: "hippotamus",
  camello: "camel",
  pescado: "fish",
  abeja: "bee",
  loro: "parrot",
  león: "lion",
  elefante: "elephant",
  jirafa: "giraffe",
  caballo: "horse",
  oso: "bear",
  tigre: "tiger",
  cebra: "zebra",
  koala: "koala",
  delfín: "dolphin",
  tortuga: "turtle",
  serpiente: "snake",
  pingüino: "penguin",
  águila: "eagle",
  búho: "owl",
  ballena: "whale",
  mono: "monkey",
  tiburón: "shark",
  lobo: "wolf",
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
  utterThis.lang = "en-US";
  utterThis.rate = 0.5;
  synth.speak(utterThis);
}

var animaless = {
  perro: ["perro", "dog"],
  gato: ["gato", "cat"],
  león: ["león", "lion"],
  elefante: ["elefante", "elephant"],
  jirafa: ["jirafa", "giraffe"],
  caballo: ["caballo", "horse"],
  oso: ["oso", "bear"],
  tigre: ["tigre", "tiger"],
  cebra: ["cebra", "zebra"],
  koala: ["koala", "koala"],
  delfín: ["delfín", "dolphin"],
  tortuga: ["tortuga", "turtle"],
  serpiente: ["serpiente", "snake"],
  pingüino: ["pingüino", "penguin"],
  águila: ["águila", "eagle"],
  búho: ["búho", "owl"],
  ballena: ["ballena", "whale"],
  mono: ["mono", "monkey"],
  tiburón: ["tiburón", "shark"],
  lobo: ["lobo", "wolf"],
  cerdo: ["cerdo", "pig"],
  gallina: ["gallina", "chicken"],
  oveja: ["oveja", "sheep"],
  cocodrilo: ["cocodrilo", "crocodile"],
  ratón: ["ratón", "mouse"],
  mapache: ["mapache", "raccoon"],
  pato: ["pato", "duck"],
  hipopótamo: ["hipopótamo", "hippotamus"],
  camello: ["camello", "camel"],
  pescado: ["pescado", "fish"],
  abeja: ["abeja", "bee"],
  loro: ["loro", "parrot"],
};

// Agregamos un evento de clic al botón
button2.addEventListener("click", function () {
  if (button2State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";

    for (var animal in animaless) {
      if (animaless.hasOwnProperty(animal)) {
        var div = document.createElement("div");
        div.classList.add("flex-box2");

        var nombre = animaless[animal];
        var colorNombre = nombre[1];
        var español = nombre[0];
        div.textContent = nombre[1];

        div.setAttribute("data-color", colorNombre);
        div.setAttribute("data-color2", español);

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
          var nombreAnimal2 = this.getAttribute("data-color2");
          decirNombre(nombreAnimal); // Decir el nombre del animal al mismo tiempo
          setTimeout(function () {
            var sonidoAnimal = new Audio(
              "../Styles/sounds/" + nombreAnimal2 + ".mp3"
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
