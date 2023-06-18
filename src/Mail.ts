export class Mail {
    _tipo:string;
    _direccion:string;

    constructor(tipo: string, direccion: string) {
        this._tipo = tipo;
        this._direccion = direccion;

    }
    get tipo() {
        return this._tipo;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }

    get direccion() {
        return this._direccion;
    }

    set direccion(direccion: string) {
        this._direccion = direccion;
    }



    toString() {
        return `Email: \n\t\t\t Tipo: ${this._tipo} \n\t\t\t Dirección: ${this._direccion}`
    }

}