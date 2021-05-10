import React from 'react'
import {Container, Featured, FeaturedButton} from './styled'

export default function FeaturedMovie(props){
    
    let firstDate = new Date(props.item.first_air_date)
    let generes = []
    
    for(let i in props.item.genres){
        generes.push(props.item.genres[i].name)
    }

    return(
        <Container>
            <Featured 
                style={{
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
                }}
            >
                <div className ={'feature--vertical'} >
                    
                    <div className={'feature--horizontal'}>

                        <div className = 'feature--name'>{props.item.original_name}</div>
                        
                        <div className='feature--info'>
                            
                            <div className='feature--points'>{props.item.vote_average} pontos</div> 
                            <div className='feature--year'>{firstDate.getFullYear()}</div> 
                            <div className='feature--seasons'>{props.item.number_of_seasons} {props.item.number_of_seasons>1?'temporadas':"temporada"}</div>

                        </div>

                        <div className = 'feature--description'>{props.item.overview}</div>
                        
                        <div className = 'feature--genres'>Gêneros: {generes.join(', ')}</div>
                    
                        <FeaturedButton>
                            <a href= {`/watch/${props.item.id}`} className={'watchButton'}> ► Assistir</a>
                            <a href={`/list/add/${props.item.id}`} className={'myListButton'}> + Minha Lista</a>
                        </FeaturedButton>
                        
                    </div>
                </div>
                
            </Featured>
        </Container>
    )
}