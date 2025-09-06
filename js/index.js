//toma el valor del campo al tocar el botón
const button = document.getElementById("buttonText");

button.addEventListener("click", function () {
  const valor = document.getElementById("inputText").value;
  localStorage.setItem("miValor", valor);
});