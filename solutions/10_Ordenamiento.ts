/**
 * Ordena un array de numeros eliminando duplicados
 * @param numeros Array de numeros con potenciales duplicados
 * @returns Array de numeros ordenados sin duplicados
 */
function ordenamiento(numeros: number[]): number[] {
  // Preparamos un array vacio
  let sinDuplicados: number[] = []
  
  // Eliminamos duplicados
  for (let i = 0; i < numeros.length; i++) {
    if (!sinDuplicados.includes(numeros[i])) {
      sinDuplicados.push(numeros[i])
    }
  }

  // Ordenamos el nuevo array
  sinDuplicados.sort((a, b) => a - b)

  return sinDuplicados
}

const numeros = [1, 3, 9, 3, 7, 10, 1, 14]
const resultado = ordenamiento(numeros)
console.log(resultado) 
