function numbersSequence(step: number, limit: number): number[] {
    const arrayFinal = []
      
    for (let i = step; i <= limit; i+=step) {
        arrayFinal.push(i) 
    }
    return arrayFinal
  }
  
  console.log(numbersSequence(3, 20))






function isPrime(x: number): boolean {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        return false
      }
    }
  
    return true
  }


function arraySinPrimo(arr: []): void {

}