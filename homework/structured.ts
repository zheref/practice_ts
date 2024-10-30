import expect from "./expect.ts"

function assert(arg0: boolean, arg1: string) {
    if (arg1 != undefined) throw new Error(`Assertion failed: ${arg1}`)
    else throw new Error("Assertion Failed")
}

function assertEqual(arg0: any, arg1: any, arg2: string) {
    if (arg0 != arg1) throw new Error(`Assertion failed: ${arg2}`)
}

// 1. Escribir una funcion que reciba un array de numeros y retorne la suma de los numeros en el array.
function sumArray(array: number[]): number { return array.reduce((acc, curr) => acc + curr, 0) }

expect(sumArray([1, 2, 3, 4, 5])).toBe(15)
expect(sumArray([-1, -2, -3, -4, -5])).toBe(-15)
expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55)
expect(sumArray([])).toBe(0)
expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(120)
expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])).toBe(210)
expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])).toBe(325)

// 2. Escribir una funcion que reciba un array de numeros y retorne el numero mas grande del array.
function maxArray(array: number[]): number { return array.length > 0 ? Math.max(...array) : 0 }

expect(maxArray([1, 2, 3, 4, 5])).toBe(5)
expect(maxArray([-1, -2, -3, -4, -5])).toBe(-1)
expect(maxArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10)
expect(maxArray([])).toBe(0)
expect(maxArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(15)
expect(maxArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])).toBe(20)
expect(maxArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])).toBe(25)

// 3. Escribir una funcion que reciba un array de numeros y retorne el numero mas pequeño del array.
function minArray(array: number[]): number { return array.length > 0 ? Math.min(...array) : 0 }

expect(minArray([1, 2, 3, 4, 5])).toBe(1)
expect(minArray([-1, -2, -3, -4, -5])).toBe(-5)
expect(minArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(1)
expect(minArray([])).toBe(0)
expect(minArray([8, 9, 10, 11, 12, 13, 14, 15])).toBe(8)
expect(minArray([13, 14, 15, 16, 17, 18, 19, 20])).toBe(13)
expect(minArray([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])).toBe(11)

// 4. Escribir una funcion que reciba un array de numeros y retorne el promedio de los numeros en el array.
function averageArray(array: number[]): number { return array.length > 0 ? sumArray(array) / array.length : 0 }

expect(averageArray([1, 2, 3, 4, 5])).toBe(3)
expect(averageArray([-1, -2, -3, -4, -5])).toBe(-3)
expect(averageArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5)
expect(averageArray([])).toBe(0)

// 5. Escribir una funcion que reciba un array de numeros y retorne un array con los numeros que sean multiplos de un numero dado.
function multiplesArray(array: number[], multiple: number): number[] { return array.filter(num => num % multiple === 0) }

expect(multiplesArray([1, 2, 3, 4, 5], 2)).toBe([2, 4])
expect(multiplesArray([1, 2, 3, 4, 5], 3)).toBe([3])
expect(multiplesArray([1, 2, 3, 4, 5], 5)).toBe([5])
expect(multiplesArray([1, 2, 3, 4, 5], 1)).toBe([1, 2, 3, 4, 5])
expect(multiplesArray([1, 2, 3, 4, 5], 0)).toBe([])

// 6. Escribir una funcion que reciba un array de numeros y retorne un array con los numeros ordenados de manera ascendente o descendente.
function sortArray(array: number[], order: "asc" | "desc"): number[] { return array.sort((a, b) => order === "asc" ? a - b : b - a) }

expect(sortArray([1, 2, 3, 4, 5], "asc")).toBe([1, 2, 3, 4, 5])
expect(sortArray([1, 2, 3, 4, 5], "desc")).toBe([5, 4, 3, 2, 1])
expect(sortArray([5, 4, 3, 2, 1], "asc")).toBe([1, 2, 3, 4, 5])
expect(sortArray([5, 4, 3, 2, 1], "desc")).toBe([5, 4, 3, 2, 1])
expect(sortArray([1, 3, 2, 5, 4], "asc")).toBe([1, 2, 3, 4, 5])
expect(sortArray([1, 3, 2, 5, 4], "desc")).toBe([5, 4, 3, 2, 1])
expect(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "asc")).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
expect(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "desc")).toBe([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

// 7. Escribir una funcion que calcule el factorial de un numero.
function factorial(num: number): number { return num === 0 ? 1 : num * factorial(num - 1) }

expect(factorial(0)).toBe(1)
expect(factorial(1)).toBe(1)
expect(factorial(2)).toBe(2)
expect(factorial(3)).toBe(6)
expect(factorial(4)).toBe(24)
expect(factorial(5)).toBe(120)
expect(factorial(6)).toBe(720)
expect(factorial(7)).toBe(5040)
expect(factorial(8)).toBe(40320)
expect(factorial(9)).toBe(362880)
expect(factorial(10)).toBe(3628800)

// 8. Escribir funcion que determine si un numero es primo.
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

expect(isPrime(2)).toBeTrue()
expect(isPrime(3)).toBeTrue()
expect(isPrime(4)).toBeFalse()
expect(isPrime(5)).toBeTrue()
expect(isPrime(6)).toBeFalse()
expect(isPrime(7)).toBeTrue()
expect(isPrime(8)).toBeFalse()
expect(isPrime(9)).toBeFalse()
expect(isPrime(10)).toBeFalse()
expect(isPrime(11)).toBeTrue()
expect(isPrime(12)).toBeFalse()
expect(isPrime(13)).toBeTrue()
expect(isPrime(14)).toBeFalse()
expect(isPrime(15)).toBeFalse()
expect(isPrime(16)).toBeFalse()
expect(isPrime(17)).toBeTrue()
expect(isPrime(18)).toBeFalse()
expect(isPrime(19)).toBeTrue()
expect(isPrime(20)).toBeFalse()

// 9. Escribir una funcion que retorne un array con la cantidad determinada de numeros de la serie de Fibonacci.
function fibonacciZ(num: number): number[] { return Array.from({ length: num }, (_, i) => i === 0 || i === 1 ? i : fibonacci(i - 1)[0] + fibonacci(i - 2)[0]) }
function fibonacci(amount: number): number[] {
    function getLast(arr: number[]): number { return arr[arr.length - 1] }
    function getAlmostLast(arr: number[]): number { return arr[arr.length - 2] }

    const fibos = (previous: number[], remainingAmount: number): number[] => [
      getLast(previous), 
      ...(remainingAmount > 0 ? nextFibos(
          getAlmostLast(previous),
          getLast(previous),
          remainingAmount - 1) : []
        )
      ]
  
    const nextFibos = (left: number, right: number, remainingAmount: number): number[] =>
      remainingAmount > 0 ? fibos([right, left + right], remainingAmount) : [left + right]
  
    const result = [
      1,
      ...(amount > 1 ? nextFibos(0, 1, amount - 1) : [])
    ]

    return result.slice(0, amount)
  }

expect(fibonacci(10)).toBe([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
expect(fibonacci(1)).toBe([1])
expect(fibonacci(3)).toBe([1, 1, 2])
expect(fibonacci(4)).toBe([1, 1, 2, 3])
expect(fibonacci(5)).toBe([1, 1, 2, 3, 5])
expect(fibonacci(6)).toBe([1, 1, 2, 3, 5, 8])
expect(fibonacci(7)).toBe([1, 1, 2, 3, 5, 8, 13])
expect(fibonacci(8)).toBe([1, 1, 2, 3, 5, 8, 13, 21])
expect(fibonacci(9)).toBe([1, 1, 2, 3, 5, 8, 13, 21, 34])
expect(fibonacci(15)).toBe([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610])
expect(fibonacci(20)).toBe([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765])

// 10. Escribir una funcion que retorne un array con los numeros primos dado un limite de numero que no debe superar dentro de los valores generados.
function primeNumbers(limit: number): number[] { return Array.from({ length: limit }, (_, i) => i).filter(isPrime) }

expect(primeNumbers(10)).toBe([2, 3, 5, 7])
expect(primeNumbers(20)).toBe([2, 3, 5, 7, 11, 13, 17, 19])
expect(primeNumbers(30)).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
expect(primeNumbers(40)).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37])
expect(primeNumbers(50)).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47])
expect(primeNumbers(60)).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59])
expect(primeNumbers(70)).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67])
expect(primeNumbers(80)).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79])
expect(primeNumbers(90)).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89])
expect(primeNumbers(100)).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])

// 11. Escribir funcion que determine si un numero es un numero de Armstrong.
function isArmstrong(num: number): boolean {
    return num === Array.from(String(num), (digit: string) => 
        Math.pow(parseInt(digit), String(num).length)
    ).reduce((acc: number, curr: number) => acc + curr, 0);
}

expect(isArmstrong(153)).toBeTrue()
expect(isArmstrong(123)).toBeFalse()
expect(isArmstrong(370)).toBeTrue()
expect(isArmstrong(371)).toBeTrue()
expect(isArmstrong(400)).toBeFalse()
expect(isArmstrong(407)).toBeTrue()
expect(isArmstrong(153)).toBeTrue()
expect(isArmstrong(1634)).toBeTrue()
expect(isArmstrong(8207)).toBeFalse()
expect(isArmstrong(8208)).toBeTrue()
expect(isArmstrong(9474)).toBeTrue()
expect(isArmstrong(9400)).toBeFalse()
expect(isArmstrong(54748)).toBeTrue()
expect(isArmstrong(92727)).toBeTrue()
expect(isArmstrong(93083)).toBeFalse()
expect(isArmstrong(93084)).toBeTrue()
expect(isArmstrong(548834)).toBeTrue()
expect(isArmstrong(9926316)).toBeFalse()

// 12. Escribir una funcion que traduzca un texto a codigo morse.
const morseCode = {
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", 
    "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
    "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
    "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
    "y": "-.--", "z": "--..", "0": "-----", "1": ".----", "2": "..---", 
    "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----.", ".": ".-.-.-", ",": "--..--",
    "?": "..--..", "'": ".----.", "!": "-.-.--", "/": "-..-.",
    "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...",
    ";": "-.-.-.", "=": "-...-", " ": "/"
}

function toMorse(text: string): string { return text.split("").map(char => morseCode[char.toLowerCase()]).join(" ") }

expect(toMorse("Hello, world!")).toBe(".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--")
expect(toMorse("This is a test.")).toBe("- .... .. ... / .. ... / .- / - . ... - .-.-.-")
expect(toMorse("1234567890")).toBe(".---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----")
expect(toMorse("The quick brown fox jumps over the lazy dog.")).toBe("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --. .-.-.-")

// 13. Escribir una funcion que cuente el numero de palabras en un texto.
function countWords(text: string): number { return text.split(" ").length }

expect(countWords("Hello, world!")).toBe(2)
expect(countWords("This is a test.")).toBe(4)
expect(countWords("One, two, three, four, five.")).toBe(5)
expect(countWords("The quick brown fox jumps over the lazy dog.")).toBe(9)
expect(countWords("1234567890")).toBe(1)

// 14. Escribir una funcion que determine si una palabra es un palindromo.

function cleanWord(word: string): string { return word.split(" ").join("").toLowerCase().replace(/[^a-z0-9]/g, "") }
function isPalindrome(word: string): boolean { return cleanWord(word) === cleanWord(word).split("").reverse().join("") }

expect(isPalindrome("racecar")).toBeTrue()
expect(isPalindrome("hello")).toBeFalse()
expect(isPalindrome("A man a plan a canal Panama")).toBeTrue()
expect(isPalindrome("Madam, I'm Adam")).toBeTrue()
expect(isPalindrome("12321")).toBeTrue()
expect(isPalindrome("1234567890")).toBeFalse()

// 15. Escribir una funcion que retorne un array con los numeros de la serie de Lucas dado un limite.
// La Serie de Lucas es una secuencia de números similar a la serie de Fibonacci,
// pero comienza con los números 2 y 1 en lugar de 0 y 1.
// Cada número siguiente es la suma de los dos números anteriores.
// Los primeros números de la serie son: 2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, ...
function lucasNumbers(limit: number): number[] {
    // Input validation
    if (!Number.isInteger(limit)) {
        throw new Error('Limit must be an integer')
    }
    if (limit < 0) {
        throw new Error('Limit must be non-negative')
    }
    
    // Handle edge cases
    if (limit === 0) return []
    if (limit === 1) return [2]
    if (limit === 2) return [2, 1]
    
    // Initialize the sequence with the first two Lucas numbers
    const sequence: number[] = [2, 1]
    
    // Build the sequence iteratively
    try {
        for (let i = 2; i < limit; i++) {
            // Check for potential overflow
            const nextNum = sequence[i - 1] + sequence[i - 2]
            if (!Number.isSafeInteger(nextNum)) {
                throw new Error('Number overflow occurred')
            }
            sequence.push(nextNum)
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to generate Lucas sequence: ${error.message}`)
        }
        throw error
    }
    
    return sequence
}

expect(lucasNumbers(10)).toBe([2, 1, 3, 4, 7, 11, 18, 29, 47, 76])
expect(lucasNumbers(1)).toBe([2])
expect(lucasNumbers(2)).toBe([2, 1])
expect(lucasNumbers(3)).toBe([2, 1, 3])
expect(lucasNumbers(4)).toBe([2, 1, 3, 4])
expect(lucasNumbers(5)).toBe([2, 1, 3, 4, 7])
expect(lucasNumbers(6)).toBe([2, 1, 3, 4, 7, 11])
expect(lucasNumbers(7)).toBe([2, 1, 3, 4, 7, 11, 18])
expect(lucasNumbers(8)).toBe([2, 1, 3, 4, 7, 11, 18, 29])
expect(lucasNumbers(9)).toBe([2, 1, 3, 4, 7, 11, 18, 29, 47])
expect(lucasNumbers(11)).toBe([2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123])
expect(lucasNumbers(12)).toBe([2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199])
expect(lucasNumbers(13)).toBe([2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322])

// 16. Escribir una funcion que retorne un array con los numeros de la serie de Fibonacci dado un limite, de manera que ningun numero de la serie supere este limite.
function fibonacciLimit(limit: number): number[] {
    if (limit < 0) return []
    if (limit < 1) return [0]
    
    const sequence: number[] = [0, 1]
    
    while (true) {
        const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2]
        if (nextNum > limit) break
        sequence.push(nextNum)
    }
    
    return sequence
}

expect(fibonacciLimit(10)).toBe([0, 1, 1, 2, 3, 5, 8])
expect(fibonacciLimit(1)).toBe([0, 1, 1])
expect(fibonacciLimit(2)).toBe([0, 1, 1, 2])
expect(fibonacciLimit(3)).toBe([0, 1, 1, 2, 3])
expect(fibonacciLimit(4)).toBe([0, 1, 1, 2, 3])
expect(fibonacciLimit(5)).toBe([0, 1, 1, 2, 3, 5])
expect(fibonacciLimit(6)).toBe([0, 1, 1, 2, 3, 5])
expect(fibonacciLimit(7)).toBe([0, 1, 1, 2, 3, 5])

// 17. Escribir una funcion que calcule el numero de digitos de un numero.
// 18. Escribir una funcion que retorne un array con los numeros primos de un array dado.
// 19. Escribir una funcion que retorne un array con los numeros de la serie de Pell dado un limite.
// 20. Escribir una funcion que retorne un array con los numeros de la serie de Jacobsthal dado un limite.
// 21. Escribir una funcion que calcule el numero de segundos que hay en una cantidad determinada de meses, dias, horas, minutos y/o segundos.

console.log("All tests passed!")