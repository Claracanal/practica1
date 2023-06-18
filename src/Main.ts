import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Persona } from "./Persona";
import { Telefono } from "./Telefono";

class Main {
    crearAgenda():Array<Persona> {
        let agenda: Array<Persona> = [];
        let email1: Mail = new Mail("Empresa", "samsung@emailPersonal.com");
        let email2: Mail = new Mail("Empresa", "dev.samsund@emailEmpresa.com");
        let email3: Mail = new Mail("Personal", "samsung-pers@emailPersonal.com");

        let telefono1: Telefono = new Telefono("Fijo", "+34 911111111");
        let telefono2: Telefono = new Telefono("Móvil", "+34 666666666");
        let telefono3: Telefono = new Telefono("FIjo", "+34 912222222");

        let direccion1: Direccion = new Direccion("Calle Oso", 1, 1, "A", 28001, "Madrid", "Madrid");
        let direccion2: Direccion = new Direccion("Calle Gato", 2, 2, "B", 28002, "Madrid", "Madrid");
        let direccion3: Direccion = new Direccion("Calle Perro", 3, 3, "C", 28003, "Madrid", "Madrid");    

        let date1: Date = new Date("1990-01-01");
        let date2: Date = new Date("1991-02-02");
        let date3: Date = new Date("1992-03-03");
    
        let persona1: Persona = new Persona("Juan", "Fernández", 30, "10000000A", date1, "Rojo", "Masculino", [direccion1], [email1], [telefono1], "Brad Pitt");
        let persona2: Persona = new Persona("María Catalanina", "De Todos los Santos", 31, "200000000A", date2, "Verde", "Femenino", [direccion2], [email2], [telefono2], "MarCa");
        let persona3: Persona = new Persona("Jose", "Rodríguez", 41, "300000000A", date3, "Azul", "Masculino", [direccion3], [email3], [telefono3], "Joselito");

        agenda.push(persona1, persona2, persona3);
        return agenda;
    }

    mostrarAgenda(personas: Array<Persona>) {
        let personasString = '';
        let index=1;
        personas.forEach(persona => {
            personasString += (`Persona ${index}: ${persona.toString()} \n`);
            index++;
        });
        console.log(personasString);
    }

    buscarPersonaPorDni(dni: string, personas: Array<Persona>) {
        personas.forEach(persona => {
            if (dni === persona.dni){  
                var mail = new Mail("Personal", "nuevo@emailEmpresa.com");    
                var telefono = new Telefono("Movil", "+39 696969698");          
                var direccion = new Direccion("Calle conejo", 4, 4, "D", 28004, "Bilbao", "Bilbao");

                var listaMails = persona.mails;
                var listaTelefonos = persona.telefonos;
                var listaDirecciones = persona.direcciones;

                listaMails.push(mail);
                listaTelefonos.push(telefono);
                listaDirecciones.push(direccion);

                persona.mails = listaMails;
                persona.telefonos = listaTelefonos;
                persona.direcciones = listaDirecciones;
            }
        });
    }
}

var main: Main = new Main();
var personas: Array<Persona> = main.crearAgenda();
console.log("AGENDA INICIAL");
console.log("--------------");
main.mostrarAgenda(personas);

main.buscarPersonaPorDni("200000000A", personas);
console.log("AGENDA ACTUALIZADA");
console.log("------------------");
main.mostrarAgenda(personas);
