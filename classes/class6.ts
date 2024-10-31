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

// Homework: -----------------------------------
/**
 * 7. Airline Reservation System
Classes: Flight, Passenger, Ticket, Seat, Reservation
Concepts: Composition, association, methods
Requirements:
Flight has Seats, and each Passenger can reserve a Seat through a Reservation.
A Ticket class includes details like ticket number, flight, seat, and passenger.
Reservation manages seat availability and booking processes.
8. Hospital Management System
Classes: Doctor, Patient, Appointment, Prescription, MedicalRecord
Concepts: Association, composition, polymorphism
Requirements:
Doctor and Patient are associated via Appointments, which track consultation details.
Each Patient has a MedicalRecord with a list of Prescriptions.
A Doctor can issue Prescriptions, and each Appointment is associated with a specific doctor and patient.
9. E-Learning Platform
Classes: Course, Instructor, Student, Quiz, Lesson
Concepts: Inheritance, encapsulation, composition
Requirements:
Course includes multiple Lessons and Quizes.
Instructors create courses, while Students enroll in them and complete quizzes.
Each Quiz has questions and an evaluation method that tracks a student’s performance.
10. Movie Rental Store
Classes: Movie, Customer, Rental, Payment
Concepts: Encapsulation, polymorphism, inheritance
Requirements:
Movie has details like title, genre, and availability.
Customer can rent a Movie via a Rental class, which tracks rental dates and fees.
Payment handles transactions, and Rental can have methods for late fees.
11. Hotel Booking System
Classes: Hotel, Room, Customer, Booking, Payment
Concepts: Composition, aggregation, methods
Requirements:
Hotel has a list of Rooms with details like type and availability.
Customer can make a Booking, which ties a room to the customer for specific dates.
Payment processes booking fees, and methods check room availability.
12. Employee Management System
Classes: Employee, Manager, Department, Project
Concepts: Inheritance, polymorphism, aggregation
Requirements:
Employee is a base class with subclasses like Manager.
Department includes a list of Employees, and Project tracks who works on what.
Manager manages projects, and Employee can have methods for tasks.
 */