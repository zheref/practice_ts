import { insert } from "../helpers.ts"

function ordenarYFiltrarPorSubcadena(strings: string[], subcadena: string): string[] {
    
    let filtrados: string[] = [];
  
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].indexOf(subcadena) === 0) {
        filtrados.push(strings[i]);
      }
    }
  
    // for (let i = 0; i < filtrados.length; i++) {
    //     return filtrados
    // } 

    //return filtrados.sort((a, b) => a.localeCompare(b))

    let miArrayOrdenadito = [filtrados[0]]

    for (let i = 1; i < filtrados.length; i++) {
      const stringAEvaluar = filtrados[i]
      console.log(`String a evaluar: ${stringAEvaluar}`)

      for(let j = miArrayOrdenadito.length - 1; j >= 0; j--) {
        const comparando = miArrayOrdenadito[j]
        console.log(`>>> Comparando con: ${comparando}`)
        if (comparando > stringAEvaluar) {
          if (j > 0) {
            continue
          }
          console.log(`Colocando '${stringAEvaluar}' en la posicion ${j}`)
          miArrayOrdenadito = insert(stringAEvaluar, miArrayOrdenadito, j)
          break
        } else {
          console.log(`Colocando '${stringAEvaluar}' en la posicion ${j}`)
          miArrayOrdenadito = insert(stringAEvaluar, miArrayOrdenadito, j)
          break
        }        
      }
    }

    return miArrayOrdenadito
  }
  
  const cadenas = ['manzana', 'mango', 'sopa', 'mangostino', 'manta', 'arroz', 'mani'];
  const subcadena = 'man'
  const resultado = ordenarYFiltrarPorSubcadena(cadenas, subcadena);
  console.log(resultado)
  
  