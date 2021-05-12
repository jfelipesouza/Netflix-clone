import React, { useState } from 'react'
import { 
    Container,
    List,
    ListArea,
    ListitemMovieLeft,
    ListitemMovieRigth,
    ListItem,
    ListTitle,
    
} from './movieRow'
import {MdNavigateBefore,MdNavigateNext} from 'react-icons/md'


export default function MovieRow(props){

    const [navigation,setNavigation]= useState(0)

    function handleLeftArrow(){
        let x = navigation + Math.round(window.innerWidth/2)
        if(x>0){
            x = 0
        }
        setNavigation(x)
    }

    function handleRightArrow(){
        let x = navigation - Math.round(window.innerWidth/2)
        let listW = props.items.results.length * 150

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 70
        }

        setNavigation(x)
    
    }

    return(
        <Container>
            <ListTitle>{props.title}</ListTitle>

            <ListArea>
                <ListitemMovieLeft className = 'navigate' onClick = {()=>{handleLeftArrow()}}  >
                    <MdNavigateBefore style ={{fontSize:50}}/>
                </ListitemMovieLeft >

                <ListitemMovieRigth className = 'navigate' onClick = {()=>{handleRightArrow()}} >
                    <MdNavigateNext style = {{fontSize:50}}/>
                </ListitemMovieRigth>

                <List style={{marginLeft:navigation,width:props.items.results.length * 150}} >
                    {props.items.results.length > 0 && props.items.results.map((item,key)=>(
                        <ListItem key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt = {item.original_title} />
                        </ListItem>
                    ))}
                </List>
            </ListArea>
        </Container>
    )
}