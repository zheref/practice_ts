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
      return false
    }
  }

  return true
}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(7))

function getFirstPrimes(n: number): number[] {
  const nums: number[] = []

  let x = 1
  do {
    if (isPrime(x)) {
      nums.push(x)
    }
    x++
  } while(nums.length < n)

  return nums
}

console.log("The first 100 prime numbers are:")
console.log(getFirstPrimes(100).join(", "))

// 2. Factorial
// 3. Palindroma
// 4. Calculate Area
// 5. Fibonacci