import React from 'react'
import {Container, Featured} from './styled'

export default function FeaturedMovie(props){
    
    let firstDate = new Date(props.item.first_air_date)
    let generes = ''
    
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
                            <div className='featue--year'>{firstDate.getFullYear()}</div> 
                            <div className='featue--seasons'>{props.item.number_of_seasons} {props.item.number_of_seasons>1?'temporadas':"temporada"}</div>
                        </div>

                        <div className = 'feature--descrition'>{props.item.overview}</div>
                        
                        <div className = 'Buttons'>
                        
                        </div>
                        
                        <div className = 'feature-genres'>Gêneros:{}</div>
                    
                    </div>
                </div>
                
            </Featured>
        </Container>
    )
}