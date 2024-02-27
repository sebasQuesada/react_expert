// arreglos
// es una coleccion de informacion que se encuentra dentro de una misma variable
//const arreglo = new Array()
const arreglo = [1,2,3,4,5];
//arreglo.push(1) no es recomendable usar el push porque modifica el objeto principal se ua otro operador
// se utiliza el operador spread


/// el operador spread "... + objeto"
 let arreglo2 = [...arreglo,6]
const arreglo3 = arreglo2.map(function(numero) {
   return numero * 2 
});



console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)


