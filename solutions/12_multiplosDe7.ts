function multiplesDeSiete(numeros: number[]): number[] {

    const multiplosDeSiete = numeros.filter(num => num % 7 === 0);
    
    multiplosDeSiete.sort((a, b) => b - a);
    
    return multiplosDeSiete;
}

const arrayNumeros = [14, 3, 21, 28, 7, 9, 49, 70, 10, 35];
const resultado = multiplesDeSiete(arrayNumeros);

console.log(resultado); 
