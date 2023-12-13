//Variables de url y recurso para acceder al archivo JSON
const URL_DESTINO = "http://localhost:5500/";
const RECURSO = "datos.json";

//Variables para almacenar los contenedores donde irán ubicados los elementos del formulario
let contenedorT = document.getElementById("contenedorTamaños");
let contenedorI = document.getElementById("contenedorIngredientes");

// Realiza una petición GET al servidor para obtener datos del JSON. 
// Agrega tamaños e ingredientes al formulario al invocar a las funciones correspondientes.

function realizarPeticion() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", URL_DESTINO + RECURSO, true);
  xmlHttp.send();

  xmlHttp.onload = function () {
    añadirTamaños(this.responseText);
    añadirIngredientes(this.responseText);
  };

  xmlHttp.onerror = function () {
    alert("¡ERROR!");
  };
}
window.onload = realizarPeticion();

//Extrae datos del archivo JSON, los almacena en una variable e itera sobre ellos 
//para extraer sus atributos y generar los inputs correspondientes.
//Finalmente agrega los inputs y label al contenedor div correspondiente.
function añadirTamaños(json) {
  let datos = JSON.parse(json);
  let tamaños = datos.Pizzeria.Tamaños;

  for (let tamaño of tamaños) {
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "tamaño";
    input.value = tamaño.Precio;
    input.id = tamaño.Tamaño;

    let label = document.createElement("label");
    label.innerHTML = tamaño.Tamaño + " - " + tamaño.Precio + "€<br>";

    contenedorT.appendChild(input);
    contenedorT.appendChild(label);
  }
}

//Mismo comportamiento que la función anterior. 
//Extrae datos del archivo JSON, los almacena en una variable e itera sobre ellos 
//para extraer sus atributos y generar los inputs correspondientes.
//Finalmente agrega los inputs y label al contenedor div correspondiente.
function añadirIngredientes(json) {
  let datos = JSON.parse(json);
  let ingredientes = datos.Pizzeria.Ingredientes;

  for (let ingred of ingredientes) {
    let input = document.createElement("input");
    input.type = "checkbox";
    input.name = "ingrediente";
    input.value = ingred.Precio;
    input.id = ingred.Nombre;

    let label = document.createElement("label");
    label.innerHTML = ingred.Nombre + " - " + ingred.Precio + "€<br>";

    contenedorI.appendChild(input);
    contenedorI.appendChild(label);
  }
}

//Para el cálculo de precio, usaremos 3 funciones. 
//Esta función itera sobre los elementos del formulario con el name="tamaño".
//Cuando localiza uno "checked", extrae su atributo value y lo almacena.
function precioBase() {
  let precioBase = 0;
  let tam = document.getElementsByName("tamaño");
  for (let i = 0; i < tam.length; i++) {
    if (tam[i].checked) {
      precioBase = parseInt(tam[i].value);
    }
  }

  return precioBase;
}

//Mismo procedimiento que la función anterior
function precioIngredientes() {
  let precioIng = 0;
  let ingred = document.getElementsByName("ingrediente");
  for (let i = 0; i < ingred.length; i++) {
    if (ingred[i].checked) {
      precioIng += parseInt(ingred[i].value);
    }
  }
  return precioIng;
}

//Con los datos almacenados en las variables de las dos funciones anteriores, calculamos el precio final y lo mostramos en alerta.
function calcularPrecio() {
  let precioTotal = parseInt(precioBase()) + parseInt(precioIngredientes());
  alert("El precio total es " + precioTotal + " €");
}

//Botones para validar y refrescar la página
let validar = document.getElementById("validar");
validar.addEventListener("click", calcularPrecio);

//Para refrescar, añadimos un evento al botón que invoque de nuevo la petición al hacer click.
let reload = document.getElementById("refrescar");
reload.addEventListener("click", function () {
  realizarPeticion();
  alert("HE REFRESCADO!");
});
