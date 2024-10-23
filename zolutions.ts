function combinationsOf(str: string): string[] {
    const combinations: string[] = []
    for (let i = 0; i < str.length; i++) {
        const subsequent = str
        console.log(`Subsequent is: ${subsequent}`)
        if (subsequent.length > 1) {
            combinationsOf(subsequent).forEach(subcombination => {
                combinations.push(`${str[i]}${subcombination}`)
            })
        } else {
            combinations.push(`${str[i]}${subsequent}`)
        }
    }
    return combinations
}

console.log(combinationsOf("advil").join("\n"))