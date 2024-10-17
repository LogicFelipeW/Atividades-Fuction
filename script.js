let valor1 = parseFloat(prompt('Insira o Valor 1: '))
let valor2 = parseFloat(prompt('Isira o valor 2: '))
let valor3 = parseFloat(prompt('Insira o valor3: '))


function notasmedia(v1, v2, v3){
    let media = (valor1 + valor2 + valor3)/3

    return media
}

let media = notasmedia(valor1, valor2, valor3)

console.log(media)