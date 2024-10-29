class Clinica {
    constructor(private pacientes: Paciente[] = [], private servicios: Servicio[] = [], private medicos: Medico[] = []) {}

    registrarAnimal(nombre: string, especie: Especie, tutor: Tutor): Paciente {
        const paciente = new Paciente(nombre, especie, tutor);
        this.pacientes.push(paciente);
        return paciente;
    }

    agendarConsulta(paciente: Paciente, fecha: Date, costo: number): Consulta {
        const consulta = new Consulta(paciente, fecha, costo);
        this.servicios.push(consulta);
        return consulta;
    }

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

enum Genero {
    MASCULINO = "masculino",
    FEMENINO = "femenino"
}


const miClinica = new Clinica();
const tutor = new Tutor('Alicia', Genero.FEMENINO);
const perrito = new Especie('Perro', Genero.MASCULINO);
const lorito = new Especie('Loro', Genero.FEMENINO);

const animal1 = miClinica.registrarAnimal('Carbon', perrito, tutor);
const animal2 = miClinica.registrarAnimal('Rosita', lorito, tutor);

miClinica.agendarConsulta(animal1, new Date('2024-11-01'), 100000);
miClinica.agendarExamen(animal2, new Date('2024-11-02'), 150000);

console.log('Total a pagar:', miClinica.calcularFacturacion());
console.log('Citas próximas:', miClinica.citasProximas());

