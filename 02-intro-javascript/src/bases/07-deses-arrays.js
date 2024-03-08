// desesetructuracion de arreglos

const personajes = ['Goku','Luffy','CR7']
const [p1,p2,p3] = personajes
console.log(p2,p3,p1)

const retornaArray = () => {
    return ['ABD',123]
};

const [uno,dos] = retornaArray()
console.log(uno,dos)


//test
//1. el primer valor del arr se llamara nombre
//2. se llamara setnombre
console.log('****************************** tareas ************************')
// const useState = (valor) => {
//     return [valor,()=>{console.log('Hola Mundo')}];
// };
// const arr = useState('pp')
// console.log(arr)

// const [nombre,setNombre] = useState('Goku')  
// console.log(nombre,setNombre)

const tarea = (valor) => {
    return [valor,()=>{console.log('Hola Mundo')}];
};
const arr = tarea('pp')
console.log(arr)

const [nombre,setNombre] = tarea('Goku')  
console.log(nombre)
setNombre()