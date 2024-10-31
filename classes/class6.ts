// Programacion Funcional
// 1. No se basa en clases con la OOP
// 2. Pero si se puede mezclar con la OOP (no tan recomendado)
// 3. Las interfaces se prefieren para representar tipos en vez classes
// 4. Se promueve la composicion y recomposicion en vez de la mutacion
// 5. Las funciones deben ser puras
// 6 Conceptos que se conservan de la OOP:
//      a. Generalizacion (entre interfaces) (OOP: Herencia)
//      b. Composicion (OOP: Encapsulamiento)

interface Cita {
    animal: Paciente,
    fecha: Date,
    medico: Medico,
    tipo: TipoDeCita
}

enum TipoDeCita {
    CONSULTA, EXAMEN, TRATAMIENTO
}

interface Clinica {
    pacientes: Paciente[],
    citas: Cita[],
    servicios: Servicio[],
    medicos: Medico[]
}

interface Servicio {
    paciente: Paciente,
    fecha: Date,
    costo: number
}

interface Consulta extends Servicio { }
interface Examen extends Servicio { }
interface Tratamiento extends Servicio { }

interface Medico {
    nombre: string,
    identidad: string
}

interface Paciente {
    nombre: string,
    especie: string,
    tutor: Tutor
}

enum Genero {
    MASCULINO = "masculino",
    FEMENINO = "femenino"
}

interface Tutor {
    nombre: string,
    genero: Genero
}

interface Factura {
    costoTotal: number
}

// Pure Function -> Control -> Predictability
function clinicaApp(clinica: Clinica) {
    const costoDeConsulta = 90
    const costoDeExamen = 120
    const costoDeTratamiento = 200

    return {
        registrarCliente: (cliente: Paciente) => {
            clinica.pacientes.push(cliente)
        },
        agendarCita: (cita: Cita) => {
            clinica.citas.push(cita)
        },
        concretarCita: (cita: Cita) => {
            if (cita.tipo === TipoDeCita.CONSULTA) {   
                const consulta: Consulta = {
                    paciente: cita.animal,
                    fecha: cita.fecha,
                    costo: costoDeConsulta
                }
                clinica.servicios.push(consulta)
            } else if (cita.tipo === TipoDeCita.EXAMEN) {
                const examen: Examen = {
                    paciente: cita.animal,
                    fecha: cita.fecha,
                    costo: costoDeExamen
                }
                clinica.servicios.push(examen)
            } else if (cita.tipo === TipoDeCita.TRATAMIENTO) {
                const tratamiento: Tratamiento = {
                    paciente: cita.animal,
                    fecha: cita.fecha,
                    costo: costoDeTratamiento
                }
                clinica.servicios.push(tratamiento)
            }
        },
        facturar: (servicios: Servicio[]): Factura => {
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
}

const { registrarCliente, agendarCita, concretarCita, facturar } = clinicaApp({
    pacientes: [],
    citas: [],
    servicios: [],
    medicos: []
})

const paciente = {
    nombre: "Kika",
    especie: "Loro",
    tutor: {
        nombre: "Mary",
        genero: Genero.FEMENINO
    }
}
registrarCliente(paciente)