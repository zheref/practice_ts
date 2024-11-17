// A revisar
function calcularSegundos(dias: number, horas: number, minutos: number): number {
    // Guards -> Early Exit
    if (dias < 0 || horas < 0 || minutos < 0) {
        throw new Error("Time units are not meant to be negative")
    }

    const segundosPorDia = 24 * 60 * 60
    const segundosPorHora = 60 * 60
    const segundosPorMinuto = 60

    const totalSegundos = (dias * segundosPorDia) + (horas * segundosPorHora) + (minutos * segundosPorMinuto)
    return totalSegundos
}

// Version Optimizada
/**
 * Convierte un numero de dias, horas y/o minutos en la cantidad de segundos
 * contenida en ellos
 * @param dias Numero de dias a considerar
 * @param horas Numero de horas a considerar
 * @param minutos Numero de minutos a considerar
 * @returns Cantidad de segundos anadidos dentro de las unidades consideradas
 * @throws Error si alguna de las unidades a considerar es menor a cero
 */
function calcularSegundos2(dias: number, horas: number, minutos: number): number {
    if (dias < 0 || horas < 0 || minutos < 0) {
        throw new Error("Time units are not meant to be negative")
    }

    const segundosPorMinuto = 60
    const segundosPorHora = 60 * segundosPorMinuto
    const segundosPorDia = 24 * segundosPorHora

    return (dias * segundosPorDia) + (horas * segundosPorHora) + (minutos * segundosPorMinuto)
}

// Ideal Path (1, 2, 3)
// Edge Cases (1...20...30)

try {
    const totalSegundos = calcularSegundos(2, 20, -1)
    console.log(`Total de segundos: ${totalSegundos}`)
} catch(e) {
    if (e instanceof Error) {
        console.error(`Error: ${e.message}`)
    }
}












// function temporalidad(dias: number, horas: number, minutos: number): number { // Pilas!
//     if (dias > 0) {
//         let diasDados = dias * 24 * 60 * 60
//         let horasDadas = horas * 60 * 60
//         let minutosDados = minutos * 60 
//         dias = diasDados
//         horas = horasDadas
//         minutos = minutosDados

//         return dias + horas + minutos
//     }

//     // Pilas!
//     return 0 // ?
// }

// console.log(temporalidad(0, 1, 0))
//console.log(temporalidad(2, 5, 20))