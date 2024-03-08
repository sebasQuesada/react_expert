// funciones en js 


// funcion normal, no es recomendable hacer las funciones asi 
// function saludar(nombre) {
//     return `Hola, ${nombre}`
// }
// const nameNormal = 'Sebas'
// console.log(saludar(nameNormal))



//FUNCION CONSTANTE. ESTA EN LA MEJOR MANERA DE HACER LAS FUNCIONES
// const saludar = function (nombre) {
//     return `Hola, ${nombre}`
// }
// const nameNormal = 'Sebas'
// console.log(saludar(nameNormal))


// funciones lamda, funciones de flecha

const saludar = function (nombre) {
    return `Hola, ${nombre}`
}

const saludar02 = (nombre) => {
    return `Hola, ${nombre}`
}

// es una manera de hacer una funcion de flecha para retornar nada mas usando parametros 
//const saludar03 = (nombre) => `Hola, ${nombre}`;

// esta funciond de flecha no recibe ningun argumento
//const saludar04 = ()  => `Hola, Mundo`

//const nameNormal = 'Sebas'
// console.log(saludar(nameNormal)) 
// console.log(saludar02('vegeta'))
// console.log(saludar03('goku'))
// console.log(saludar04());

/// tema importante de la funciones de flecha 
const getUser = () => {
    //va a retornar un objeto
    return{
        uid:'SQ',
        username: 'squesada'
    }
};


const getUser02 = () => ({
    //va a retornar un objeto, al ponerlo entre parentecis tambien es como si le indicamos que retorne despues de la flecha    
    // A ESTO SE LE LLAMA RETORNAR UN OBJETO IMPLICITO
        uid:'SQ02',
        username: 'squesada02'
    });

const user =getUser();
const user02 =getUser02();
console.log(user);
console.log(user02);
console.log('************  TAREA  **************');
/* tarea 
1. Transformar a una funcion de flecha - lo  cambie 
2. Tiene que retornar un objeto implicito correcto
3. testing
*/

// function getUserActive (name){
// return{
//     uid:'SQ02',
//     username: name
// }
// };

const getUserActive = (name,id ) => ({
    uid: id,
    username: name
});


const userActive = getUserActive('David',1)
const userActive02 = getUserActive('Sebas',2)
console.log(userActive);
console.log(userActive02);