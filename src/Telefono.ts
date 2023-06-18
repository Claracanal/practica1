export class Telefono {
    _tipo:string;
    _numero:string;

    constructor(tipo: string, numero: string) {
        this._tipo = tipo;
        this._numero = numero;

    }
    get tipo() {
        return this._tipo;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }

    get numero() {
        return this._numero;
    }

    set numero(numero: string) {
        this._numero = numero;
    }



    toString() {
        return `Telefono: \n\t\t\t Tipo: ${this._tipo} \n\t\t\t Número: ${this._numero}`;
    }

}