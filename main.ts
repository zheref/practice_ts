export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

// Desde aqui comenzamos

// 1. Numeros Primos

function isPrime(x: number): boolean {
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));

function getFirstPrimes(n: number): number[] {
  const nums: number[] = [];

  let x = 1;
  do {
    if (isPrime(x)) {
      nums.push(x);
    }
    x++;
  } while (nums.length < n);

  return nums;
}

//console.log("The first 100 prime numbers are:")
//console.log(getFirstPrimes(100).join(", "))

// 2. Factorial

function factorial(n: number): number {
  /*
  se debe iterar n y luego multiplicar entre ellos
  */
  let numObj: number = 1;
  for (let i = 1; i <= n; i++) {
    console.log(numObj);
    numObj = numObj * i;
  }
  return numObj;
}

//console.log(factorial(5))

// 3. Palindroma
// 4. Calculate Area

// 5. Fibonacci
/*
0, 1, 1, 2, 3, 5, ... Infinite
*/

// 1. Usa tantas variables como necesites
// 2. Evita la redundancia. La redundancia de datos es peligrosa
// 3.

// Version no perfecta
function fibonacci1(amount: number): number[] {
  let fibos: number[] = [];
  let left = 0;
  let right = 1;
  fibos.push(right);

  while (fibos.length < amount) {
    const newNum = left + right;
    fibos.push(newNum);
    left = right;
    right = newNum;
  }

  return fibos;
}

function fibonacci2(amount: number): number[] {
  let fibos: number[] = [1, 1];

  while (fibos.length < amount) {
    const newNum = fibos[fibos.length - 2] + fibos[fibos.length - 1];
    fibos = [...fibos, newNum];
  }

  return fibos;
}

function getLast(arr: number[]): number {
  return arr[arr.length - 1];
}
function getAlmostLast(arr: number[]): number {
  return arr[arr.length - 2];
}

function fibonacci3(amount: number): number[] {
  const fibos = (previous: number[], remainingAmount: number): number[] => [
    getLast(previous),
    ...(remainingAmount > 0
      ? nextFibos(
          getAlmostLast(previous),
          getLast(previous),
          remainingAmount - 1,
        )
      : []),
  ];

  const nextFibos = (
    left: number,
    right: number,
    remainingAmount: number,
  ): number[] =>
    remainingAmount > 0
      ? fibos([right, left + right], remainingAmount)
      : [left + right];

  return [1, ...(amount > 1 ? nextFibos(0, 1, amount - 1) : [])];
}

console.log("Fibonaccis");
//console.log(fibonacci1(100).join(", "))
//console.log(fibonacci2(100).join(", "))
console.log(fibonacci3(100).join(", "));

// 1. Algoritmia Matematica (semana 1)
// 2. Algoritmia con Strings, Arrays y Objetos (semana 1)
// 3. Orientacion a Objetos (semana 2)
// 4. Algoritmia con Orientacion a Objetos (semana 2)
// 5. Patrones con Orientacion a Objetos (semana 3)
// 6. SOLID con Orientacion a Objetos (semana 3)
// 7. Programacion Funcional (Principios) (semana 4)
// 8. Algoritmia con Programacion Funcional (semana 4)
// 9. Mejores practicas con Programacion Funcional (semana 5)
// 10. Programacion Asincronica (semana 5)

function isArmstrong(n: number): boolean {
  const nStr: string = `${n}`;

  let accumulator = 0;
  for (let i = 0; i < nStr.length; i++) {
    const digit: string = nStr.charAt(i);
    const digitNum: number = parseInt(digit, 10);
    const digitPower = Math.pow(digitNum, nStr.length);
    accumulator += digitPower;
  }

  if (accumulator == n) {
    return true;
  } else {
    return false;
  }
}

// Simplified version
function isArmstrong2(n: number): boolean {
  const nStr: string = `${n}`;
  let accumulator = 0;
  for (let i = 0; i < nStr.length; i++) {
    accumulator += Math.pow(parseInt(nStr.charAt(i), 10), nStr.length);
  }
  return accumulator == n;
}

// TODO: Write functional version
// 1. No loops
// 2. Use reduce instead of accumulation
// 3. Never mutate anything

console.log("Is Armstrong?");
console.log(isArmstrong(372));

function areAnagrams(word1: string, word2: string): boolean {
  // true: Earth = Heart
  // true: Silent = Listen
  // false: Visa != Savvy
  // false: Arm != Rama

  if (word1.length != word2.length) {
    return false;
  }

  const characters1 = word1.split("").sort();
  const characters2 = word2.split("").sort();

  return characters1.join("") == characters2.join("");
}

console.log("Are anagrams?");
console.log(areAnagrams("earth", "heart"));
console.log(areAnagrams("arm", "rama"));
console.log(areAnagrams("roma", "ramo"));

// Order is NOT relevant
function union(set1: number[], set2: number[]): number[] {
  // Union: [1, 2, 3] U [6, 5, 4] = [1, 2, 3, 6, 5, 4]
  // Union: [3, 4, 5] U [7, 3, 9] = [3, 4, 5, 7, 9]
  // Resolve
}

function intersection(set1: number[], set2: number[]): number[] {
  // Intersection: [1, 2, 3] I [6, 5, 4] = []
  // Intersection: [3, 4, 5] I [7, 3, 9] = [3]
  // Resolve
}
