// objetos literales

const persona = {
    nombre : 'Sebas',
    apellido : 'Quesada',
    edad : 28,
    direccion : {
        ciudad: 'Puriscal',
        zip: '1515',
        lat:'-8.0012541',
        lng:'9.21515151'
    }


};
//console.log(persona)

/*  const persona2 = persona
 no es recomendable clonar un objeto con otro objeto de este manera, hay otra manera de hacerlo 
  esto por motivos que si eventualmente se necesite cambiar algun campo del objeto no lo cambie para todos puede dar problema 
  */
const persona2 = {...persona} ;// si queremos clonar el objeto persona con persona2 esta es la mejor manera
persona2.nombre = 'Oscar',

console.log(persona);
console.log(persona2);