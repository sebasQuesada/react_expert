import heroes, {owners} from '../data/heroes';

//console.log(owners)

/// MANERA DE HACERLO 1 MENOS SIMPLIFICADO
// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });  
// };

// /// MANERA 2 DE HACERLO MAS SIMPLICADO
// const getHeroeById02 = (id) => {
//     //return heroes.find();
//     return heroes.find((heroe)=> heroe.id === id )
// };

/// MANERA 3 DE HACERLO AUN MAS SIMPLICADO
export const getHeroeById03 = (id) =>  heroes.find((heroe)=> heroe.id === id );

// console.log(getHeroeById(1))
// console.log(getHeroeById02(3))
// console.log(getHeroeById03(4))

// usar filter en ves de find 
export const getHeoresByOwner  = (owner) => heroes.filter((heroe)=> heroe.owner == owner );
//console.log(getHeoresByOwner('DC'))

