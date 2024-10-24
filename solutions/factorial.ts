
function factorial(n: number): number {
    /*
    se debe iterar n y luego multiplicar entre ellos 
    */
    let numObj: number = 1

    for (let i = 1; i <= n; i++) {
        console.log(numObj)   
        numObj = numObj * i 
    }

    return numObj
}
  
  //console.log(factorial(5))

function factorial1(num: number): number {
    let var1 = 0

    if (num > 1) {
        var1 = num * factorial1(num - 1)
        return var1
    }
    else {
        return num      
    }
  }

// Version Optimizada
function factorial3(num: number): number {
    // Alternativa Funcional
    return num > 1 ? num * factorial3(num - 1) : num
}

// Lambda version
const factorial4 = (n: number): number => n > 1 ? n * factorial4(n - 1) : n

// Expectativas
//factorial(6) // 720
//factorial(10) // 3628800
//factorial(15) // 1307674368000

console.log(`Factorial de 6 es ${factorial1(6)}`)
console.log(`Factorial de 10 es ${factorial1(10)}`)
console.log(`Factorial de 15 es ${factorial1(15)}`)