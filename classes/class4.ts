// Recomposition

// Structured

function primefree(nums: number[]): number[] {
    const newArray: number[] = []

    // Control Structures
    for (let i = 0; i < nums.length; i++) {
        if (!isPrime(nums[i])) {
            newArray.push(nums[i])
        }
    }

    return newArray
}

// Plain Old Java Object (POJO) -> class
// Plain Old Swift Object (POSO) -> struct

// Network Application Layer (HTTP)
// 1. SOAP (XML) (Banks, Microsoft, Oracle, IBM)
// 2. REST (JSON) (Todo lo mas moderno de los ultimos anos) (ASCII -> UTF-8)
// 3. GraphQL (JSON (Depende de REST)) -> (Lo ultimo en tendencia) (Meta)
// X. gRPC (Streaming)
// X. WebSockets

// [C] (POKO) -> JSON (Serialization) (REST: JSON) -> [S]

// JS-TS: Serialization is Free!

const dog1: Dog = { // JSON -> REST
    name: "Maximus",
    breed: "German Shepherd"
}

const dog2 = {
    numeroDePatas: 4,
    colorDeOjos: "marron"
}

// OOP (objects)

// Protypes: We don't care anymore
// function Cat() {}
// Cat.prototype = function (name: any, breed: any) {}

// class Animal {
//     bloodType: string

//     constructor(bloodType: string) {
//         this.bloodType = bloodType
//     }
// }

class Animal {
    constructor(public bloodType: string, private weight: number) {}
}

class WildAnimal extends Animal implements SoundingAnimal {}

interface SoundingAnimal {
    sound(): void
}

interface RunningAnimal {
    run(): void
}

class DomesticAnimal extends Animal implements SoundingAnimal, RunningAnimal {
    constructor(public name: string, bloodType: string, weight: number) {
        super(bloodType, weight)
    }

    sound() {}
    run(): void {
      console.log("Running...")
    }
}

class Cat extends DomesticAnimal {
    constructor(name: string, bloodType: string, weight: number) {
        super(name, bloodType, weight)
    }

    override sound(): void {
      console.log("Miau!")
    }
}

class Dog extends DomesticAnimal { // Abstraction, Constructor
    age: number
    breed: string
    
    constructor(name: string, age: number, breed: string, bloodType: string, weight: number) {
        super(name, bloodType, weight)
        this.age = age
        this.breed = breed
    }

    override sound(): void {
      console.log("Woof!")
    }
}

const maximus: DomesticAnimal = new Dog("Maximus", 5, "German Shepherd", "AB+", 50)
const carbon = new Dog("Carbon", 3, "Criollito", "O+", 30)
const kiara: SoundingAnimal = new Cat("Kiara", "A+", 5)

console.log("Domestic animals make sounds...")
maximus.sound()
kiara.sound()
console.log(maximus.name)
maximus.run()

// Software
// Conceptos Abstractos -> interface
// Funcionamiento -> function() {} (impuras, pero tambien las podemos hacer puras)
// Abstraccion + Funcionamiento = class (impuros)

interface LivingBeing {
    age: number
    species: string
    // deno-lint-ignore no-explicit-any
    [others: string]: any;
}

const servivo1: LivingBeing = {
    age: 7,
    species: "Alga",
    color: "green"
}

const servivofinal: LivingBeing = servivo1

// Sistema -> Problema(a, b, c, d, e, f...) -> Solution

// Importance of Interfaces
// [x] OOP -> class
// Functional (puras, deterministicas) -> function, interfaces

// sqrt(4) = 2
// sqrt(4) = 2
// sqrt(9) = 3
// sqrt(4) = 2
// sqrt(9) = 3
// sqrt(16) = 4

// Functional (functions)

// Yay!


// Unit tests


// Exercises
// 1. Modelar el sistema de registro de una clinica veterinaria considerando que:
// * La clinica atiende a todo tipo de animal domestico
// * Todo animal domestico tiene un tutor
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