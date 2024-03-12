//rafc short para crear componente 

import {Fragment} from 'react'


const getName = () =>{
   const obj =  { 
                    name:'SEBASTIAN',
                    lastName : 'QUESADA',
                    age: 28                    
                 };
    return obj;
};

// los fragmentos son funciones de react que nos ayuda a poder usar codigo html si en este caso voy a usar n h1 y p u otro para que no me de error, hay  2 manera de hacerlo, <fragment></fragment>
// o usando <></> y adentro del codigo 
// es un agrupador de otros elementos html, jsx, siempre se ocupa un nodo padre y dentro pueden ir cualquier cantidad de elementos

const newMesssage = {
    message:'Hola mundo',
    title : 'Fernando'
};

export const FirstApp = () => {
  return (
    <> {/*estio es un fragmento*/}

        {/* <h1>First App mi primer componente, creado por sebastian </h1> */}
        {/*asi llamamos una constante y mostramos un objeto en nuestro fragmento*/}
        {/* <code> { JSON.stringify(newMesssage) }  </code> */}

        {/* vamos a mostrar el valor de retorno de una funcion */}
        <h3>{ JSON.stringify( getName()) }</h3>
        

        <p>Soy un subtitulo</p>

    </>
  )
}


