// Buen Intento -> :)

// Permisos que se nos olvidan
// 1. Podemos crear tantos tipos como necesitemos
// 2. Podemos crear tantas variables o constantes como necesitemos (pilas con la redundancia -> bugs, redundancia -> mejor rendimiento!)
// 3. Propiedades automaticas (con constructor)
// 4. Las fechas existen en JavaScript (no tenemos que crear un nuevo tipo para ello)

// A estudiar:
// 1. Arrays
// 2. `this`
// 3. Mejor comprension entre argumentos y parametros

// Abordajes:
// 1. Analizar el codigo y mejorarlo.
// 2. Escrbir todo el codigo de nuevo y luego contrastarlo.
// 3. Proveer solucion a un ejercicio diferente para tener mejor guia y mejorar este.

// Exercises
// 1. Modelar el sistema de registro de una `clinica veterinaria` considerando que:
// * La clinica atiende a todo tipo de `animal domestico`
// * Todo animal domestico tiene un `tutor`
// * Queremos llevar registro de consultas, examenes y prescripciones medicas de cada animalito
// * Queremos calcular la facturacion de cada una de las consultas, examenes y prescripciones
// * El sistema tambien deberia poder representar las citas proximas de cada animalito
// Representar esto, utilizando todos los conceptos de OOP. Nada funcional, todo debe ser OOP.
// Por tanto debe tener: Abstraccion, Encapsulamiento, Polimorfismo y Herencia
// Proveer solucion en archivo completamente independiente.
// Requerimientos:
// - Registro inicial.
// - Agendar cita.
// - Facturar.
// - Calcular valor a pagar.
// - Completar cita (consulta).
// Pista: Todo se encapsula dentro de una unica clase.
// const miClinica = new Clinica(...)
// miClinica.registrCliente(...)
// ......

// Modelado

// **Objetos** (extraer sustantivos)
// Clinica
// Animal Domestico
// Tutor
// Consulta
// Examen
// Prescripcion Medica
// Cita
// Medico (veterinario)

// **Operaciones** (extraer verbos [requerimientos])
// Registrar (paciente)
// Agendar cita
// Facturar (listar y calcular)
// Concretar (cita -> consulta) -> Prescripcion

// ----------------------
// Conexiones (Estereotipos: modelo, operacional, coordinador, manager, adapter) -> 1 RESPONSABILIDAD
// A) Composicion (modelos)
// ClinicaApp (operacional) -> Clinica (modelo)
// Clinica => Animal (pacientes) -> Tutor
// Animal => Consulta -> Medico
// Animal => Examen
// Animal => Prescripcion
// Animal => Cita -> Medico
// Cita -> Consulta

// B) Responsabilidad
// Tipos [classes, interfaces, enums, alias] (entidades/modelos) (modelo de negocio / dominio)
// Tipos [classes, interfaces, enums, alias] (operacionales) (APLICACION)
// [✓] App -> Registrar (paciente)
// [✓] App -> Agendar cita
// [✓] App -> Facturar (listar y calcular)
// [✓] App -> Concretar (cita -> consulta) -> Prescripcion

// Implementacion
// 1. Escribir relaciones de datos
// 2. Proyectar operaciones (requerimientos)


/**
 * Y (Habilidades de Codigo) (Programador)
 * |         .
 * |        /
 * |       /
 * |      /
 * |     /
 * |    /
 * |   /
 * |  /
 * | /
 * |/_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ X (Habilidades Transversales) (Ingeniero)
 */

// Practicas Transversales
// 1. [✓] [0] Versioning -> IDE (Terminal) -> Codigo
// 2. [✓] [1] Unit Documenting -> IDE (Terminal) -> Codigo
// 3. [x] [2] Unit Testing -> IDE (Editor) (Terminal) -> Codigo
// 4. [x] [4] Localizing -> IDE (Editor) -> Codigo
// 5. [x] [6] Component Documenting -> IDE (Editor) -> Codigo -> Storybook (Component Driven Design) (UI)
// 6. [x] [5] Distributing (Deployment/Publishing) -> IDE (Editor) (Terminal) -> Codigo
// 7. [✓] [3] Debugging -> IDE (Editor) -> Analisis de Codigo

// Recapitulacion
// 1. S - Single Principle
// 2. Estereotipos
// 3. Como traducir conceptos de sustantivos de negocio para un modelado basico
// 4. Como traducir requerimientos a mi modelado basico
// 5. Como asignar resposabilidades dentro de mi codigo

interface Cita {
    animal: Paciente,
    fecha: Date,
    medico: Medico,
    tipo: TipoDeCita
}

enum TipoDeCita {
    CONSULTA, EXAMEN, TRATAMIENTO
}

class ClinicaApp {
    costoDeConsulta = 90
    costoDeExamen = 120
    costoDeTratamiento = 200

    constructor(private clinica: Clinica) {}

    registrarCliente(cliente: Paciente) {
        this.clinica.pacientes.push(cliente)
    }

    agendarCita(cita: Cita) {
        this.clinica.citas.push(cita)
    }

    concretarCita(cita: Cita) {
        if (cita.tipo === TipoDeCita.CONSULTA) {   
            const consulta = new Consulta(cita.animal, cita.fecha, this.costoDeConsulta)
            this.clinica.servicios.push(consulta)
        } else if (cita.tipo === TipoDeCita.EXAMEN) {
            const examen = new Examen(cita.animal, cita.fecha, this.costoDeExamen)
            this.clinica.servicios.push(examen)
        } else if (cita.tipo === TipoDeCita.TRATAMIENTO) {
            const tratamiento = new Tratamiento(cita.animal, cita.fecha, this.costoDeTratamiento)
            this.clinica.servicios.push(tratamiento)
        }
    }

    // extends, implements (abstracciones mas generalizadas)
    
    /**
     * Calcula el valor total a facturar a una persona dados
     * los servicios que fueron TOMADOS por el cliente.
     * @method
     * @param {Servicio[]} servicios Los servicios tomados por el cliente.
     * @returns {number} El valor total a pagar por el cliente.
     */
    facturar(servicios: Servicio[]): Factura {
        let valorTotal = 0
        for (let i = 0; i < servicios.length; i++) {
            const servicio = servicios[i]
            valorTotal += servicio.costo
        }
        return {
            costoTotal: valorTotal
        }
    }
}

interface Factura {
    costoTotal: number
}

class Clinica { // Modelo, Operacional (controller, viewmodels, interactor) (2 responsabilidades :/ )
    constructor(public pacientes: Paciente[] = [], public citas: Cita[] = [], public servicios: Servicio[] = [], private medicos: Medico[] = []) {}

    // [✓]
    registrarAnimal(nombre: string, especie: Especie, tutor: Tutor): Paciente {
        const paciente = new Paciente(nombre, especie, tutor);
        this.pacientes.push(paciente);
        return paciente;
    }

    // [✓] // Que son servicios?
    agendarConsulta(paciente: Paciente, fecha: Date, costo: number): Consulta {
        const consulta = new Consulta(paciente, fecha, costo);
        this.servicios.push(consulta);
        return consulta;
    }

    // [✓] // Que son servicios?
    agendarExamen(paciente: Paciente, fecha: Date, costo: number): Examen {
        const examen = new Examen(paciente, fecha, costo);
        this.servicios.push(examen);
        return examen;
    }

    calcularFacturacion(): number {
        let total = 0;
        for (let i = 0; i < this.servicios.length; i++) {
            total = this.servicios[i].costo;
        }
        return total;
    }

    citasProximas(): Servicio[] {
        const proximas: Servicio[] = [];
        const ahora = new Date();
        for (let i = 0; i < this.servicios.length; i++) {
            if (this.servicios[i].fecha > ahora) {
                proximas.push(this.servicios[i]);
            }
        }
        return proximas;
    }
}

class Especie {
    constructor(private nombre: string, private genero: Genero) {}
}

class Tutor {
    constructor(private nombre: string, private genero: Genero) {}
}

class Medico {
    constructor(private nombre: string, private identidad: number) {}
}

class Paciente {
    constructor(private nombre: string, private especie: Especie, private tutor: Tutor) {}
 }

class Servicio {
    constructor(private paciente: Paciente, public fecha: Date, public costo: number) {}
}

class Consulta extends Servicio {}
class Examen extends Servicio {}
class Tratamiento extends Servicio {}

enum Genero {
    MASCULINO = "masculino",
    FEMENINO = "femenino"
}


const miClinica = new Clinica([], [], []);
const tutor = new Tutor('Alicia', Genero.FEMENINO);
const perrito = new Especie('Perro', Genero.MASCULINO);
const lorito = new Especie('Loro', Genero.FEMENINO);

const animal1 = miClinica.registrarAnimal('Carbon', perrito, tutor);
const animal2 = miClinica.registrarAnimal('Rosita', lorito, tutor);

miClinica.agendarConsulta(animal1, new Date('2024-11-01'), 100000);
miClinica.agendarExamen(animal2, new Date('2024-11-02'), 150000);

console.log('Total a pagar:', miClinica.calcularFacturacion());
console.log('Citas próximas:', miClinica.citasProximas());


// ---------------------------
const app = new ClinicaApp(new Clinica())

function pressButton() {
    const paciente = new Paciente("Kika", new Especie("Loro", Genero.FEMENINO), new Tutor("Mary", Genero.FEMENINO))
    app.registrarCliente(paciente)
}