import Cl_vFamilia from "./Cl_vFamilia.js";
import Cl_vBoxCinema from "./Cl_vBoxCinema.js";
import Cl_mFamilia from "./Cl_mFamilia.js";
import Cl_mBoxCinema from "./Cl_mBoxCinema.js";
export default class Cl_controlador {
  constructor() {
    this.mBoxCinema = new Cl_mBoxCinema(this);
    this.vFamilia = new Cl_vFamilia(this);
    this.vBoxCinema = new Cl_vBoxCinema(this);
  }
  mostrarVistaFamilia() {
    this.vBoxCinema.ocultar();
    this.vFamilia.mostrar();
  }
  mostrarVistaBoxCinema() {
    this.vFamilia.ocultar();
    this.vBoxCinema.mostrar();
  }
  agregarFamilia({ nombre, cantidadP, dia }) {
    let familia = new Cl_mFamilia({ nombre, cantidadP, dia });
    this.mBoxCinema.procesarFamilia(familia);
    this.vBoxCinema.reportarFamilia({
      nombre: familia.nombre,
      cantidadP: familia.cantidadP,
      dia: familia.dia,
      montoPagar: familia.montoPagar(),
      devolverAuxNombre: this.mBoxCinema.devolverAuxNombre(),
      promedioPagadoLunes: this.mBoxCinema.promedioPagadoLunes(),
      dineroTotalCaja: this.mBoxCinema.dineroTotalCaja(),
    });
    this.mostrarVistaBoxCinema();
  }

  agregarBoxCinema( {dineroInicial}) {
    this.mBoxCinema.dineroInicial = dineroInicial;
  }
}
