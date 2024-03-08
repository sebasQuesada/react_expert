// promesas 
import  { getHeroeById03,getHeoresByOwner } from './bases/08-import-exp'
import heroes from './data/heroes';

// las promesas son asincronas, primero se ejecuta todo el codigo sincrono - secuencial y luego las promesas. todas las primesas caen en memoria de javascript para ejecutarlas al final 
// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const p1 = getHeroeById03(2)
//         //console.log(p1)
//         resolve(p1)
//         //reject(p1)
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('Heroe', heroe)
// })
// .catch(err => console.warn(err))

const getHeroebyIdAsync = (id) => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        const p1 = getHeroeById03(id)
       // console.log(p1)
        p1 ? resolve(p1) : reject('ni picha hay')
    }, 2000);
});
};

getHeroebyIdAsync(20)
        .then( console.log)
        .catch(console.warn)

