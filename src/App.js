import React, { useEffect,useState } from 'react';
import MovieRow from './components/list';
import Api from './pages/api'


export default function App(){
    const [movieList,setMovieList] = useState([])

    useEffect(()=>{
        const loadAll = async ()=> {
            // Pegando a lista total
            let list = await Api.getHomeList();
            setMovieList(list)
        }
        loadAll()
    },[])

    return(
        <div className = 'page'>
            <section className  > 
                {movieList.map((item,key)=>(
                    <MovieRow key={key} title = {item.title} items={item.items} >

                    </MovieRow>

                ))}
            </section>
        </div>
    )
}