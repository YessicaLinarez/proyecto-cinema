export default class Cl_vFamilia {

constructor(controlador) {
    this.vista = document.getElementById("familiaForm");
    this.inNombre = document.getElementById("familiaForm_inNombre");
    this.inCantidadP = document.getElementById("familiaForm_inCantidadP");
    this.inDia = document.getElementById("familiaForm_inDia");
    this.btAceptar = document.getElementById("familiaForm_btAceptar");
    this.btAceptar.onclick = () =>
      controlador.agregarFamilia({
       nombre: this.inNombre.value,
        cantidadP: this.inCantidadP.value,
        dia: this.inDia.value,
    });
    this.ocultar();
}

mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
}