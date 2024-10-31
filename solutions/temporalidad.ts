// A revisar
function calcularSegundos(dias: number, horas: number, minutos: number): number {
    const segundosPorDia = 24 * 60 * 60; 
    const segundosPorHora = 60 * 60; 
    const segundosPorMinuto = 60; 

    const totalSegundos = (dias * segundosPorDia) + (horas * segundosPorHora) + (minutos * segundosPorMinuto);
    return totalSegundos;
}

const totalSegundos = calcularSegundos(1, 2, 30);
console.log(`Total de segundos: ${totalSegundos}`);















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