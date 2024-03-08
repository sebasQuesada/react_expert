// desestructuracion
// asignacion desestructurante

const persona ={
    nombre :'Sebas',
    edad : 28,
    clave : 'Papi2020',
    rengo : 'Dios'

};
// extraiga lo que hay en las llave del objeto persona
const {nombre,edad,clave} = persona;
/*

asi renombramos una variables a nombre02
 const {nombre:nombre02} = persona;

 */

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// console.log(persona.nombre);
// console.log(persona.clave);
//console.log(nombre);


const retornaPersona = ({clave,nombre,edad,rango = 'Capitan'}) =>{
    return{
        nombreClave : nombre,
        anios : edad,
        latlng: {
            lat: 9.8584,
            lng: 84.3489
        }
    }
};
//onst avenger 


const {nombreClave,anios,latlng:{lat,lng}} =  retornaPersona(persona)
console.log(nombreClave,anios);

/* latlng:{lat,lng} al hacer esto al destructurar mi funcion que retornar un objeto,
 pero ese objeto tiene otro objeto llamado latlng asi es como lo destructuro tambien, le indico cual usar */
console.log(lat,lng);


// funcion que retorna un objeto
// const useContext = ({clave,nombre,edad,rango = 'Capitan'}) =>{
//     return{
//         nombreClave : nombre,
//         anios : edad
//     }
// };

//const avenger = useContext( persona );
//console.log(avenger);

