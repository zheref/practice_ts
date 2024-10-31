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


// Homework: ------------------------------
/**
 * 1. Bookstore
Classes: Book, Customer, Order, Author
Concepts: Classes, inheritance, composition, encapsulation
Requirements:
Each Book has properties like title, author, genre, and price.
An Order includes multiple books and tracks quantities and customer details.
Author contains information about the writer, and each book has an author assigned.
2. Library System
Classes: Library, Member, Book, Loan
Concepts: Association, aggregation, encapsulation, methods
Requirements:
A Library has a list of Books and Members.
Members can borrow books, creating a Loan record with due dates.
A Loan is tied to a Book and a Member and has methods for returning and renewing books.
3. Food Delivery Service
Classes: Restaurant, MenuItem, Order, Customer, DeliveryDriver
Concepts: Polymorphism, inheritance, composition
Requirements:
Each Restaurant has a list of MenuItems and a method for taking Orders.
Order includes details about the Customer, delivery address, and items ordered.
DeliveryDriver is assigned to each order, and orders are tracked by status.
4. Banking System
Classes: BankAccount, Customer, Transaction, SavingsAccount, CheckingAccount
Concepts: Inheritance, encapsulation, polymorphism
Requirements:
BankAccount is a base class with deposit and withdraw methods.
SavingsAccount and CheckingAccount extend BankAccount with unique rules (like overdraft for checking).
Transaction keeps track of each account’s activities, and Customer holds account details.
5. Online Marketplace
Classes: Marketplace, Seller, Product, Customer, Order
Concepts: Composition, aggregation, inheritance, interfaces
Requirements:
Marketplace has lists of Sellers and Products.
Seller has a product catalog, while Customer can browse and place Orders.
Each Order links a Customer to Products, with methods for calculating total and processing payment.
6. University Course Registration System
Classes: Course, Student, Professor, Enrollment
Concepts: Relationships, composition, association, encapsulation
Requirements:
Course has details like course code, title, professor, and enrolled students.
Student and Professor are associated with Courses.
An Enrollment class links Student and Course with enrollment dates and grades.
 */