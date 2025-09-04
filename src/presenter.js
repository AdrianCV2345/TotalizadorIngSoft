import Totalizador from "./Totalizador.js";

const form = document.getElementById("totalizar-form");
const cantidadInput = document.getElementById("Cantidad_Item");
const precioInput = document.getElementById("Precio_Item");
const resultadoDiv = document.getElementById("resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precioPorItem = Number.parseFloat(precioInput.value);

  const precioNeto = Totalizador.calcularPrecioNeto(cantidad, precioPorItem);

  resultadoDiv.innerHTML = `
    <div>
      <strong>Cantidad de items:</strong> ${cantidad}<br>
      <strong>Precio por item:</strong> ${precioPorItem}<br>
      <strong>Precio Neto:</strong> ${precioNeto}
    </div>
  `;
});
