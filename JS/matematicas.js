// Botón para generar números del 1 al 10
var button1 = document.querySelector(".btn-success");
var button2 = document.querySelector(".btn-warning");
var button3 = document.querySelector(".btn-primary");
var button4 = document.querySelector(".btn-danger");
// Variable para almacenar el estado del botón
var button1State = true;
var button2State = true;
var button3State = true;
var button4State = true;
// Agregamos un evento de clic al botón
button1.addEventListener("click", function () {
  if (button1State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";
    document.querySelector(".flex-container3").innerHTML = "";
    document.querySelector(".flex-container4").innerHTML = "";
    var flexContainer = document.querySelector(".flex-container");

    flexContainer.innerHTML = "";

    for (j = 0; j <= 9; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box");
      div.textContent = "Suma: " + j;

      div.style.background = getRandomLighterColor(); // Crear una lista desordenada (ul)

      // Crear una lista desordenada (ul)
      var ul = document.createElement("ul");

      for (let k = 1; k <= 9; k++) {
        var li = document.createElement("li");
        var suma = j + k;

        // Crear elementos span para cada parte del texto
        var number1 = document.createElement("span");
        var plus = document.createElement("span");
        var number2 = document.createElement("span");
        var equal = document.createElement("span");
        var result = document.createElement("span");

        // Asignar contenido y clases a cada span
        number1.textContent = j;
        number1.classList.add("number");
        plus.textContent = " + ";
        plus.classList.add("plus");
        number2.textContent = k;
        number2.classList.add("number");
        equal.textContent = " = ";
        equal.classList.add("equal");
        result.textContent = suma;
        result.classList.add("result");

        // Agregar los elementos span al elemento li
        li.appendChild(number1);
        li.appendChild(plus);
        li.appendChild(number2);
        li.appendChild(equal);
        li.appendChild(result);

        li.classList.add("list-item"); // Agregar una clase al elemento li

        ul.appendChild(li);
      }

      // Agregar la lista ul al div
      div.appendChild(ul);

      // Agregar el div al contenedor
      flexContainer.appendChild(div);
    }
  }
});
//Resta
button2.addEventListener("click", function () {
  if (button2State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";
    document.querySelector(".flex-container3").innerHTML = "";
    document.querySelector(".flex-container4").innerHTML = "";
    var flexContainer = document.querySelector(".flex-container2");

    flexContainer.innerHTML = "";

    for (j = 0; j <= 9; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box");
      div.textContent = "Resta: " + j;

      div.style.background = getRandomLighterColor(); // Crear una lista desordenada (ul)

      // Crear una lista desordenada (ul)
      var ul = document.createElement("ul");
      let k = 0;
      for (var i = 0; i <= 9; i++) {
        var li = document.createElement("li");
        var suma = i + j;
        var resta = suma - j;
        // Crear elementos span para cada parte del texto
        var number1 = document.createElement("span");
        var menus = document.createElement("span");
        var number2 = document.createElement("span");
        var equal = document.createElement("span");
        var result = document.createElement("span");

        // Asignar contenido y clases a cada span
        number1.textContent = suma;
        number1.classList.add("number2");
        menus.textContent = " - ";
        menus.classList.add("menus2");
        number2.textContent = j;
        number2.classList.add("number2");
        equal.textContent = " = ";
        equal.classList.add("equal2");
        result.textContent = resta;
        result.classList.add("result2");

        // Agregar los elementos span al elemento li
        li.appendChild(number1);
        li.appendChild(menus);
        li.appendChild(number2);
        li.appendChild(equal);
        li.appendChild(result);

        li.classList.add("list-item"); // Agregar una clase al elemento li
        ul.appendChild(li);
      }

      // Agregar la lista ul al div
      div.appendChild(ul);

      // Agregar el div al contenedor
      flexContainer.appendChild(div);
    }
  }
});
//Multiplicación
button3.addEventListener("click", function () {
  if (button3State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";
    document.querySelector(".flex-container3").innerHTML = "";
    document.querySelector(".flex-container4").innerHTML = "";
    var flexContainer = document.querySelector(".flex-container3");

    flexContainer.innerHTML = "";

    for (j = 1; j <= 10; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box");
      div.textContent = "Multiplicación: " + j;

      div.style.background = getRandomLighterColor(); // Crear una lista desordenada (ul)

      // Crear una lista desordenada (ul)
      var ul = document.createElement("ul");
      for (var i = 1; i <= 10; i++) {
        var li = document.createElement("li");
        var multi = j * i;
        // Crear elementos span para cada parte del texto
        var number1 = document.createElement("span");
        var menus = document.createElement("span");
        var number2 = document.createElement("span");
        var equal = document.createElement("span");
        var result = document.createElement("span");

        // Asignar contenido y clases a cada span
        number1.textContent = j;
        number1.classList.add("number3");
        menus.textContent = " x ";
        menus.classList.add("multi3");
        number2.textContent = i;
        number2.classList.add("number3");
        equal.textContent = " = ";
        equal.classList.add("equal3");
        result.textContent = multi;
        result.classList.add("result3");

        // Agregar los elementos span al elemento li
        li.appendChild(number1);
        li.appendChild(menus);
        li.appendChild(number2);
        li.appendChild(equal);
        li.appendChild(result);

        li.classList.add("list-item"); // Agregar una clase al elemento li
        ul.appendChild(li);
      }

      // Agregar la lista ul al div
      div.appendChild(ul);

      // Agregar el div al contenedor
      flexContainer.appendChild(div);
    }
  }
});
//División
// Función para generar un color RGB aleatorio
function getRandomLighterColor() {
  var r = Math.floor(Math.random() * 156) + 100; // Valores de rojo más altos
  var g = Math.floor(Math.random() * 156) + 100; // Valores de verde más altos
  var b = Math.floor(Math.random() * 156) + 100; // Valores de azul más altos
  return "rgb(" + r + "," + g + "," + b + ")";
}

button4.addEventListener("click", function () {
  if (button4State) {
    document.querySelector(".flex-container").innerHTML = "";
    document.querySelector(".flex-container2").innerHTML = "";
    document.querySelector(".flex-container3").innerHTML = "";
    document.querySelector(".flex-container4").innerHTML = "";
    var flexContainer = document.querySelector(".flex-container4");

    flexContainer.innerHTML = "";
    for (j = 1; j <= 10; j++) {
      var div = document.createElement("div");
      div.classList.add("flex-box");
      div.textContent = "División:  " + j;

      div.style.background = getRandomLighterColor(); // Crear una lista desordenada (ul)

      var ul = document.createElement("ul");
      var cad = 0;
      for (var i = 0; i <= 9; i++) {
        var li = document.createElement("li");
        var division = cad / j;
        // Crear elementos span para cada parte del texto
        var number1 = document.createElement("span");
        var menus = document.createElement("span");
        var number2 = document.createElement("span");
        var equal = document.createElement("span");
        var result = document.createElement("span");

        // Asignar contenido y clases a cada span
        number1.textContent = cad;
        number1.classList.add("number4");
        menus.textContent = " ÷ ";
        menus.classList.add("division4");
        number2.textContent = j;
        number2.classList.add("number4");
        equal.textContent = " = ";
        equal.classList.add("equal4");
        result.textContent = division;
        result.classList.add("result4");

        // Agregar los elementos span al elemento li
        li.appendChild(number1);
        li.appendChild(menus);
        li.appendChild(number2);
        li.appendChild(equal);
        li.appendChild(result);

        li.classList.add("list-item"); // Agregar una clase al elemento li
        ul.appendChild(li);
        cad = cad + j;
      }

      // Agregar la lista ul al div
      div.appendChild(ul);

      // Agregar el div al contenedor
      flexContainer.appendChild(div);
    }
  }
});
