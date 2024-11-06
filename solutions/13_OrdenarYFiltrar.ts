function ordenarYFiltrarPorSubcadena(strings: string[], subcadena: string): string[] {
    
    let filtrados: string[] = [];
  
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].indexOf(subcadena) === 0) {
        filtrados.push(strings[i]);
      }
    }
  
    for (let i = 0; i < filtrados.length; i++) {
        return filtrados
    } 
  }
  
  const cadenas = ['manzana', 'mango', 'sopa', 'mangostino', 'manta', 'arroz', 'mani'];
  const subcadena = 'man'
  const resultado = ordenarYFiltrarPorSubcadena(cadenas, subcadena);
  console.log(resultado)
  
  