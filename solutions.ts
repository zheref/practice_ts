function numbersSequence(step: number, limit: number): number[] {
    const arrayFinal = []
      
    for (let i = step; i <= limit; i+=step) {
        arrayFinal.push(i) 
    }
    return arrayFinal
  }
  
  console.log(numbersSequence(3, 20))


  function factorial1(num: number): number {
    let var1 = 0

    if (num > 1) {
        var1 = num * factorial1(num - 1)
        //console.log(var1)
        return var1
    }
    else {
        return num      
    }
  }
  console.log(factorial1(15))
  


  function temporalidad(dias: number, horas: number, minutos: number) {
    
    if (dias > 0) {
        let diasDados = dias * 24 * 60 * 60
        let horasDadas = horas * 60 * 60
        let minutosDados = minutos * 60 
        dias = diasDados
        horas = horasDadas
        minutos = minutosDados
        console.log(dias)
        console.log(horas)
        console.log(minutos)

        return dias + horas + minutos
  }
    
}

console.log(temporalidad(2, 5, 20))



function isPrime(x: number): boolean {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        return false
      }
    }
  
    return true
  }


function arraySinPrimo(arr: []): number {

}

function raizCuadrada(num: number): number {
    let resultado = 0
    let numNegativo = 0
    if(num < 0) {
        numNegativo = Math.abs(num)
        resultado = Math.sqrt(numNegativo)
    } else
    resultado = Math.sqrt(num)
    return resultado   
}
  
console.log(raizCuadrada(-49))