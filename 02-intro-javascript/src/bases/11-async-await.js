// la pabra reservado async, es como si fuera una promesa 


/// el "await" nos ayuda a utilizar nuestro codigo como si fuera asincrono , solo se puede usar dentro de una funcion async

// const getImagenPromesa = () => new Promise(resolve => resolve('http://asdjadbjakhsbdabsd.com'))
// getImagenPromesa().then(console.log)

/// para manejar los errores hay que utilizar el try y catch 

const getImagen = async()=>{
    try {
    const apiKey = 'v4F48opn5qNpXgLysyDyNsRvNBA1vGVH';
    /// el await le indica la promesa  espere a que se ejecute el API para seguir con la siguiente linea de codigo ejeciutar 
    const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();

    const{ url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);    
    }catch (err){
        console.log(error)
    }

}
getImagen()







// const apiKey = 'v4F48opn5qNpXgLysyDyNsRvNBA1vGVH';

// const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// httpCall
//     .then(resp => resp.json()) 
//     .then(({data}) =>{     
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);

//     }).catch(console.warn);
