import Totalizador from "./Totalizador.js";

describe("Calculo del precio neto", () => {
  it("deberia multiplicar el precio de items por la cantidad de items", () => {
    expect(Totalizador.calcularPrecioNeto(3, 2)).toEqual(6);
  });

  it("Deberia calcular el precio neto con el estado de CA", () => {
    expect(Totalizador.calcularPrecioNeto(5, 10, "California")).toEqual(54.125);
  });
});


