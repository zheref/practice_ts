import Cocoa

var greeting = "Hello, playground"

func isArmstrong(n: Int) -> Bool {
    let nStr: String = "\(n)"
    
    var accumulator = 0
    for digit in nStr {
        let digitNum: Int? = Int(String(digit))
        
        if let unwrappedNum = digitNum {
            let digitPower = pow(Double(unwrappedNum), Double(nStr.count))
            accumulator += Int(digitPower)
        } else {
            fatalError("Error inesperado ha ocurrido. Por alguna razon el parsing falló")
        }
    }
    
    return accumulator == n
}

print("Is Armstrong?")
print(isArmstrong(n: 371))
//print(isArmstrong(n: 372))

//enum Banano: String { case what1 }
//
//let bananoConCascara: Banano? = .what1
//
//// Desenvolver el opcional
//
//if let bananoPelado = bananoConCascara {
//    print(bananoPelado)
//}
//
//bananoPelado
