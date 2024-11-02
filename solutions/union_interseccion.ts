function union(arr1: number[], arr2: number[]): number[] {
    const resultado: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!resultado.includes(arr1[i])) {
            resultado.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!resultado.includes(arr2[i])) {
            resultado.push(arr2[i]);
        }
    }

    return resultado;
}

function intersection(arr1: number[], arr2: number[]): number[] {
    const resultado: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !resultado.includes(arr1[i])) {
            resultado.push(arr1[i]);
        }
    }

    return resultado;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const resultadoUnion = union(array1, array2);
const resultadoInterseccion = intersection(array1, array2);

console.log('Unión:', resultadoUnion); 
console.log('Intersección:', resultadoInterseccion); 