import React from 'react'
import { 
    Container,
    List,
    ListArea,
    ListItem,
    ListTitle,
    
} from './movieRow'



export default function MovieRow(props){
    return(
        <Container>
            <ListTitle>{props.title}</ListTitle>
            <ListArea>
                <List>
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