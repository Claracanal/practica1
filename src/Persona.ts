import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
    _nombre:string;
    _apellidos:string;
    _edad:number;
    _dni:string;
    _cumpleanos:Date;
    _colorFavorito:string;
    _sexo:string;
    _direcciones:Direccion[];
    _mails:Mail[];
    _telefonos:Telefono[];
    _notas:string;


    constructor(nombre: string, apellidos: string, edad:number, dni:string, cumpleanos:Date, color:string, sexo:string, direcciones:Direccion[], mails:Mail[], telefonos:Telefono[],notas:string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = color;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;

    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    get apellidos() {
        return this._apellidos;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    get edad() {
        return this._edad;
    }

    set dni(dni: string) {
        this._dni = dni;
    }

    get dni() {
        return this._dni;
    }

    set cumpleanos(cumpleanos: Date) {
        this._cumpleanos = cumpleanos;
    }

    get cumpleanos() {
        return this._cumpleanos;
    }

    set colorFavorito(colorFavorito: string) {
        this._colorFavorito = colorFavorito;
    }

    get colorFavorito() {
        return this._colorFavorito;
    }

    set sexo(sexo: string) {
        this._sexo = sexo;
    }

    get sexo() {
        return this._sexo;
    }

    set direcciones(direcciones: Direccion[]) {
        this._direcciones = direcciones;
    }

    get direcciones() {
        return this._direcciones;
    }

    set mails(mails: Mail[]) {
        this._mails = mails;
    }

    get mails() {
        return this._mails;
    }

    set telefonos(telefonos: Telefono[]) {
        this._telefonos = telefonos;
    }

    get telefonos() {
        return this._telefonos;
    }

    set notas(notas: string) {
        this._notas = notas;
    }

    get notas() {
        return this._notas;
    }


    mostrarDirecciones(){
        let direcciones = '';
        this._direcciones.forEach(direccion => {
            direcciones += `\t${direccion.toString()} \n\t`;
        });
        return direcciones
    }
    mostrarMails(){
        let mails = '';
        this._mails.forEach(mail => {
            mails += `\t${mail.toString()} \n\t`;
        });
        return mails;
    }
    mostrarTelefonos(){
        let telefonos = '';
        this._telefonos.forEach(telefono => {
            telefonos += `\t${telefono.toString()} \n\t`;
        });
        return telefonos;
    }

    toString() {
        return `\n\tNombre: ${this._nombre} \n\t
        Apellidos: ${this.apellidos} \n\tEdad: ${this.edad} \n\t
        DNI: ${this.dni} \n\tCumpleaños: ${this.cumpleanos} \n\t
        Color favorito: ${this._colorFavorito} \n\tSexo: ${this.sexo} \n\t
        Direcciones: \n\t${this.mostrarDirecciones()} \n\t
        Mails: \n\t${this.mostrarMails()} \n\t
        Teléfonos: \n\t${this.mostrarTelefonos()} \n\t
        Notas: ${this.notas} \n\t`
    }
}