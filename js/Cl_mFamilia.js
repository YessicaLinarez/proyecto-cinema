export default class Cl_mFamilia {  
    constructor({nombre, cantidadP, dia}) {
        this.nombre = nombre;
        this.cantidadP = cantidadP;
        this.dia = dia;
    }

set nombre(n){
    this._nombre = n;
}

get nombre(){
    return this._nombre;
}

set cantidadP(c){
    this._cantidadP = +c;
}

get cantidadP(){
    return this._cantidadP;
}

set dia(d){
    this._dia = +d;
}

get dia(){
    return this._dia;
}

entrada(){
    if(this.dia == 1){
        return 1.50;
}
else return 3.00;
}

montoPagar(){
    return this.entrada() * this.cantidadP;
}


}