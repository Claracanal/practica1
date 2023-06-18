export class Direccion {
    _calle: string;
    _numero: number;
    _piso: number;
    _letra: string;
    _codigoPostal: number;
    _poblacion: string;
    _provincia: string;

    constructor(calle:string, numero:number, piso:number, letra:string, codigoPostal:number, poblacion:string, provincia:string){
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;

    }
    get calle() {
        return this._calle;
    }

    set calle(calle: string) {
        this._calle = calle;
    }

    get numero() {
        return this._numero;
    }

    set numero(numero: number) {
        this._numero = numero;
    }

    get piso() {
        return this._piso;
    }

    set piso(piso: number) {
        this.piso = piso;
    }

    get letra() {
        return this._letra;
    }

    set letra(letra: string) {
        this._letra = letra;
    }

    get codigoPostal() {
        return this._codigoPostal;
    }

    set codigoPostal(codigoPostal: number) {
        this._codigoPostal = codigoPostal;
    }

    get poblacion() {
        return this._poblacion;
    }

    set poblacion(poblacion: string) {
        this._poblacion = poblacion;
    }

    get provincia() {
        return this._provincia;
    }

    set provincia(provincia: string) {
        this._provincia = provincia;
    }

    toString() {
        return `Direccion: \n\t\t\t Calle: ${this._calle} \n\t\t\t Número: ${this._numero} \n\t\t\t Piso: ${this._piso}
                \n\t\t\t Letra: ${this._letra} \n\t\t\t Código Postal: ${this._codigoPostal} \n\t\t\t Población: ${this._poblacion}
                \n\t\t\t Provincia: ${this._provincia}`
    }

}