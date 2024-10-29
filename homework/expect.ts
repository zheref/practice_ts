class Expectation {
    private expected: any

    constructor(public actual: any) {}

    toBe(expected: any) {
        if (Array.isArray(this.actual) && Array.isArray(expected)) {
            if (this.actual.length !== expected.length) throw new Error(`Expected array of length ${this.actual.length} to be ${expected.length}`)
            for (let i = 0; i < this.actual.length; i++) {
                if (this.actual[i] !== expected[i]) throw new Error(`Expected ${this.actual} to be ${expected}`)
            }
            return
        }
        
        if (this.actual !== expected) throw new Error(`Expected ${this.actual} to be ${expected}`)
    }

    toBeTrue() {
        if (this.actual !== true) throw new Error(`Expected ${this.actual} to be true`)
    }

    toBeFalse() {
        if (this.actual !== false) throw new Error(`Expected ${this.actual} to be false`)
    }
}

export default function expect(actual: any) {
    return new Expectation(actual)
}
