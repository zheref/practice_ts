function ordenamiento(numeros: number[]): number[] {
  let sinDuplicados: number[] = [];
  
  for (let i = 0; i < numeros.length; i++) {
    if (!sinDuplicados.includes(numeros[i])) {
      sinDuplicados.push(numeros[i])
    }
  }

  sinDuplicados.sort((a, b) => a - b)

  return sinDuplicados
}

const numeros = [1, 3, 9, 3, 7, 10, 1, 14]
const resultado = ordenamiento(numeros)
console.log(resultado) 
