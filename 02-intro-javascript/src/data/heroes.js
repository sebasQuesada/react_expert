const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
// aqui exportamos un objeto independiente
export const owners =['DC','MARVEL']
// aqui exportamos el objeto principal
export default heroes;

// otra manera de exportar las 2 o varias 
// export{
//     heroes as default,
//     owners
// }

