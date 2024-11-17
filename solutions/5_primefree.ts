
function isPrime(x: number): boolean {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false
        }
    }
    return true
}

function primefree(nums: number[]): number[] {
    const newArray: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if (!isPrime(nums[i])) {
            newArray.push(nums[i])
        }
    }

    return newArray
}



// // Forma funcional (no optimo)
// function primefree2(nums: number[]): number[] {
//     const mapper = (n: number) => isPrime(n) ? undefined : n
//     return nums
//         .map(mapper)
//         .filter(n => n != undefined) as number[]
// }

// // Ejemplo de mapping para transformar elementos en un array
// [1, 2, 3, 4]
//     .map(n => `${n}`) // ['1', '2', '3', '4']

// // Forma lambda
// const primefree3 = (nums: number[]) => nums.filter((num) => !isPrime(num))

// // Arrays, Streams (Observables, Publishers, Flows)
// // Filter (select), ForEach, Reduce (agregate), Sort (order), Map (?), CompactMap, FlatMap