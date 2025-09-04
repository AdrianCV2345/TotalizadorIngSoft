import Totalizador from "./Totalizador.js";

describe("Calculo del precio neto", () => {
  it("deberia multiplicar el precio de items por la cantidad de items", () => {
    expect(Totalizador.calcularPrecioNeto(3, 2)).toEqual(6);
  });
});


