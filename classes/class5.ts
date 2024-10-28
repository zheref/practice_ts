// Expansion en OOP

// - Poder hacer
// - Deber hacer

// Todos son objetos?
// 1. Abstraction
// 2. Encapsulamiento
// 3. Herencia
// 4. Polimorfismo

class Building { 
    constructor(public height: number) {}

    numHogaresPorPiso(): number {
        return 0
    }
}
// Herencia
class House extends Building { 
    constructor(public area: number, height: number) { super(height) }
    override numHogaresPorPiso(): number {
      return 1
    }
}

class ResidentialUnit extends Building {
    constructor(public area: number, height: number, private aptsPerFloor: number) { super(height) }

    override numHogaresPorPiso(): number {
      return this.aptsPerFloor
    }
}

const casa1 = new House(30, 100)
console.log(casa1.height)
console.log(casa1.area)

const obj = {
    name: "Victoria",
    age: 21,
    greet: () => { console.log("Hello!") },
    walk: () => { console.log("walking...") }
}

console.log(obj.name)
obj.greet()

const obj2 = {
    name: "Aleja",
    age: 28,
    greet: () => { console.log("Hey!") },
    walk: () => { console.log("walking...") }
}

class Person {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log("Hola.")
    }

    walk() {
        console.log("Walking...")
    }
}

const obj3 = new Person("Sergio", 33)

const people: Person[] = [obj, obj2, obj3]

// | (semantico)    |  (tipo)        | (lenguaje)  | (memoria)
// | Estereotipos   |  Tipado        | Artefactos  | Simbolos
// ===========================================================
// |  Constructor   | (...) => new   | (function)  | (constante)
// |  (initializer) | 

const myfunction = () => { console.log("Hola!") }

// people.push(new Person())