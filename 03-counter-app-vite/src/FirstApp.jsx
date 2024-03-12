//rafc short para crear compoente 

import {Fragment} from 'react'


// los fragmentos son funciones de react que nos ayuda a poder usar codigo html si en este caso voy a usar n h1 y p u otro para que no me de error, hay  2 manera de hacerlo, <fragment></fragment>
// o usando <></> y adentro del codigo 
// es un agrupador de otros elementos html, jsx, siempre se ocupa un nodo padre y dentro pueden ir cualquier cantidad de elementos
export const FirstApp = () => {
  return (

    <> {/*estio es un fragmento*/}
    <h1>First App mi primer componente, creado por sebastian </h1>
    <p>Soy</p>
    </>
  )
}
