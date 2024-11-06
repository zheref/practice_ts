function invertirCadena(cadena: string): string {
  let invertida = ''
  
  for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i]
  }

  return invertida
}
  
const resultado = invertirCadena('holaMundo')
console.log(resultado)
  
  // Arrays
const miArray = [5, 4, 0, 1, 3, 0, 8, 2]
miArray.length // 8
miArray[0] // 5
miArray[6] // 8
miArray[miArray.length] // CRASH!
miArray[miArray.length - 1]