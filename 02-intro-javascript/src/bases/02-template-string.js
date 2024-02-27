const nombre = 'sebastian'
const apellido = 'Quesada'

//template string 
// codigo js ${nombre} asi se peude concatenar strings o variables
const nombreCompleto = `${nombre} 
${apellido}
${1+1}
`;
// puede poner lo que guste, hasta resultados de funciones
console.log(nombreCompleto);

function getSaludo(nombre) {
    const name = 'Hola Mundo ' + nombre
    return name 
}
console.log(`Este es un texto: ${getSaludo('pene feo')}`);
