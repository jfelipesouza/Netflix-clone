const API_KEY = '23e2bfe5762cb5f95c6990ee605f2318';
const API_BASE ='https://api.themoviedb.org/3';


const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = req.json()
    return json
}

export default{
    getHomeList: async () =>{
        return[
            {
                slug:'originals',
                title:'Originais da Plataforma',
                items: await basicFetch(``)
            },
            {
                slug:'trending',
                title:'Recomendados',
                items: await basicFetch(``)
            },
            {
                slug:'toprated',
                title:'Em alta',
                items: await basicFetch(``)
            },
            {
                slug:'action',
                title:'Filmes de Ação',
                items: await basicFetch(``)
            },
            {
                slug:'comedy',
                title:'Filmes de Comédia',
                items: await basicFetch(``)
            },
            {
                slug:'horror',
                title:'Filmes de Terror',
                items: await basicFetch(``)
            },
            {
                slug:'romance',
                title:'Filmes de Romance',
                items: await basicFetch(``)
            },
            {
                slug:'documentary',
                title:'Documentarios',
                items: await basicFetch(``)
            },
            
        ]
    }
}