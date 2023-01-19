let printTriangle = ''
let triangleSize = prompt('Di el tamaño del triangulo')

if (triangleSize != 0 && triangleSize > 0) {
    for (let i = 0; i < triangleSize; i++) {
        printTriangle += '#'
        console.log(printTriangle);
    }
} else {
    console.log('tamaño automatico de 7')
    for (let i = 0; i < 7; i++) {
        printTriangle += '#'
        console.log(printTriangle);
    }
}
