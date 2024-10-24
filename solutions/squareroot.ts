function raizCuadrada(num: number): number {
    let resultado = 0
    let numNegativo = 0
    if(num < 0) {
        numNegativo = Math.abs(num)
        resultado = Math.sqrt(numNegativo)
    } else {
        resultado = Math.sqrt(num)
    }
    return resultado   
}

// Optimized Version
function weirdSquareRoot(num: number): number {
    return Math.sqrt(Math.abs(num))
}

// Lambda version
((num: number) => Math.sqrt(Math.abs(num)))(49)

console.log(`Square root of 49 is ${raizCuadrada(49)}`)
console.log(`Square root of -64 is ${raizCuadrada(-64)}`)