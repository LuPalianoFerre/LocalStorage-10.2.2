const miData = document.getElementById("data");

if (localStorage.getItem("miValor")) {
  miData.textContent = localStorage.getItem("miValor");
} else {
  miData.textContent = "No hay valor en Local Storage.";
}