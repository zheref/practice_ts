// A revisar

function temporalidad(dias: number, horas: number, minutos: number): number { // Pilas!
    if (dias > 0) {
        let diasDados = dias * 24 * 60 * 60
        let horasDadas = horas * 60 * 60
        let minutosDados = minutos * 60 
        dias = diasDados
        horas = horasDadas
        minutos = minutosDados

        return dias + horas + minutos
    }

    // Pilas!
    return 0 // ?
}

console.log(temporalidad(0, 1, 0))
//console.log(temporalidad(2, 5, 20))