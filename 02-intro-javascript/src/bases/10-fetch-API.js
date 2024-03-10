/// promesas en cadana y como funciona el fetch API

const apiKey = 'v4F48opn5qNpXgLysyDyNsRvNBA1vGVH';
// ${} esto es un template 
const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
httpCall
    .then(resp => resp.json()) // return explicito de la respuesta json, esto retornar una promesa
    .then(({data}) =>{     // esto son promesas de cadena
        //destructurar la httpcall
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    }).catch(console.warn);
