//Creamos todas las variables a utillizar.
//Se usaran bucles for, ya que en caso de modificar el formulario y añadir o retirar opciones, este script seguirá operativo sin modificaciones

const boton = document.getElementById("botonValidar"); //Boton de envío

let inputs1 = document.getElementsByTagName("input"); //Extraemos todos los inputs
let textInputs = []; //Creamos un array para filtrar los inputs de tipo texto

let tamaño = document.getElementsByName("tamaño"); //Por nombre extraemos los inputs de tipo radio
let seleccionado = false; //Variable para comprobar si un radio está seleccionado

let inputs2 = document.getElementsByName("ingredientes"); //Extraemos todos los checkbox por nombre
let checkInputs = []; //Array para almacenar y poder recorrer todos los checkbox
let seleccionado2 = false; //Variable para comprobar si un checkbox está marcado

//Estas 3 variables se usarán para la función de calculo de precio
let peq = document.getElementById("pequeña");
let med = document.getElementById("mediana");
let gra = document.getElementById("grande");

function validar() {
  for (const input of inputs1) {
    if (input.type == "text") {
      textInputs.push(input);
    }
  } //Filtramos todos los inputs de tipo texto y los añadimos a un array para poder recorrerlos

  for (const input of inputs2) {
    if (input.type == "checkbox") {
      checkInputs.push(input);
    }
  } //Filtramos todos los inputs de tipo checkbox y los añadimos a un array para poder recorrerlos

  for (const input of textInputs) {
    if (input.value.trim() == "") {
      alert("Debes rellenar el campo " + input.id);
      return false;
    }
  } //Comprobamos si cada input de tipo texto tiene datos. Si un campo está vacio, genera una alerta.

  for (let i = 0; i < tamaño.length; i++) {
    if (tamaño[i].checked) {
      seleccionado = true;
      break;
    }
  } //Comprobamos si alguno de los tipo radio está marcado.
  //Con la variable "tamaño" extraemos cada tipo radio que exista en el formulario con el mismo nombre que le asignamos.

  if (!seleccionado) {
    alert("Por favor, selecciona un tamaño de pizza");
    return false;
  } //Si no hay algún radio seleccionado, generamos una alerta.

  for (const input of checkInputs) {
    if (input.checked) {
      seleccionado2 = true;
      break;
    }
  } //Recorremos el array de checkbox y comprobamos si hay alguno seleccionado con la condicion true de la variable "seleccionado".

  if (!seleccionado2) {
    alert("Seleccione al menos un ingrediente");
    return false;
  } //Si tras recorrer el array no hay algún checkbox seleccionado, generamos una alerta.

  return true;
}

function precioTotal() {

  // Sumamos el precio del tamaño de la pizza
  if (peq.checked) {
    precioBase = 5;
  } else if (med.checked) {
    precioBase = 10;
  } else if (gra.checked) {
    precioBase = 15;
  }

  //Recorremos los ingredientes añadiendo 1 en caso de que este el checkbox seleccionado
  let ingredientes = document.getElementsByName("ingredientes");
  let precioIng = 0;

  for (let i = 0; i < ingredientes.length; i++) {
    if (ingredientes[i].checked) {
      precioIng += 1;
    }
  }

  let precioTotal = precioBase + precioIng;

  alert("El precio total es de " + precioTotal + " €");
}

boton.onclick = function () {
  let correcto = validar();
  if (correcto) {
    precioTotal();
  }
};
