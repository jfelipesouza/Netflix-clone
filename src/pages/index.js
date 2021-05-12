import React, { useEffect,useState } from 'react';
import MovieRow from '../components/list';
import Api from './api'
import {Container} from './styles'
import FeaturedMovie from '../components/featureMovie'
import Header from '../components/headers';
import Footer from '../components/footer';

export default function Reactflix(){
    const [movieList,setMovieList] = useState([])
    const [featureData,setFeatureData] = useState(null)
    const [headerScroll,setHeaderScroll] = useState('transparent')

    useEffect(()=>{
        const loadAll = async ()=> {
            
            // Pegando a lista total
            
            let list = await Api.getHomeList();
            setMovieList(list)
            
            // Pegando o Feature

            let originals = list.filter(i=>i.slug==='originals')
            let randomChoise = Math.floor(Math.random()*(originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChoise]
            let chosenInfo = await Api.getMovieInfo(chosen.id,'tv')
            
            setFeatureData(chosenInfo)

        }
        loadAll()
    },[]);

    //Monitorando o scroll da pagina
    
    useEffect(()=>{
        const scrollListener = () => {
            if(window.scrollY > 10){
                setHeaderScroll('#111')
            }else{
                setHeaderScroll('transparent')
            }
        }

        window.addEventListener('scroll',scrollListener)
    
        return ()=>{
            window.removeEventListener('scroll',scrollListener)
        }
    },[])


    return(
        <Container >

            <Header bgcolor={headerScroll}/>
            

            {
                featureData
                    &&
                <FeaturedMovie item = {featureData}/>
            }

            <section className='listmovie'  > 
                {movieList.map((item,key)=>(
                    <MovieRow key={key} title = {item.title} items={item.items} >

                    </MovieRow>

                ))}
                <Footer/>
    
            </section>
        

 
        </Container>
    )
}