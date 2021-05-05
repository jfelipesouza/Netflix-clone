import React from 'react'
import { Container, ListArea, ListTitle, } from './movieRow'



export default function MovieRow(props){
    return(
        <Container>
            <ListTitle>{props.title}</ListTitle>
            <ListArea>
                {props.items.results.length > 0 && props.items.results.map((item,key)=>(
                    <img src="" />
                ))}
            </ListArea>
        </Container>
    )
}