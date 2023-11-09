const PRECIO = 400000;
let numero = 0;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = PRECIO;

const cantidad = document.querySelector(".cantidad");
const btnincrementar = document.getElementById("incrementar");
const btndecrementar = document.getElementById("decrementar");
const resultado = document.querySelector(".valor-total");

btnincrementar.addEventListener("click", function () {
  numero += 1;
  cantidad.textContent = numero;
  const result = numero * PRECIO;
  resultado.textContent = result;
});
btndecrementar.addEventListener("click", function () {
  numero -= 1;
  cantidad.textContent = numero;
  const result = numero * PRECIO;
  resultado.textContent = result;
});
