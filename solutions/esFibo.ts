function esFibo(num: number): boolean {
   
    let a = 0;
    let b = 1;
    
    while (a < num) {
        const valor = a;
        a = b;
        b = valor + b;
    }
    
    return a === num;
}

function filtrarFibonacci(numeros: number[]): number[] {
    const fibonacci: number[] = [];
    
    for (let i = 0; i < numeros.length; i++) {
        if (esFibo(numeros[i])) {
            fibonacci.push(numeros[i]); 
        }
    }
    
    return fibonacci;
}

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 21, 34];
const resultado = filtrarFibonacci(arrayNumeros);

console.log(resultado); 