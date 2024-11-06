function invertirCadena(cadena: string): string {
    let invertida = ''
    
    for (let i = cadena.length - 1; i >= 0; i--) {
      invertida += cadena[i]
    }
  
    return invertida
  }
  
  const resultado = invertirCadena('holaMundo')
  console.log(resultado)
  
  