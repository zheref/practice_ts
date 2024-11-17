function numbersSequence(step: number, limit: number): number[] {
    const arrayFinal = []
      
    for (let i = step; i <= limit; i+=step) {
        arrayFinal.push(i) 
    }
    return arrayFinal
  }
  
  console.log(numbersSequence(3, 20))

