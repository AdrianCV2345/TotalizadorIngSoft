export default class Totalizador {
  static calcularPrecioNeto(cantidad, precioPorItem , estado = "") {
    let precioNeto = cantidad * precioPorItem;

    if (estado === "California") {
      precioNeto *= 1.0825;
    }

    return precioNeto;
  }
}
