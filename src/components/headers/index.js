import React from 'react';
import {HeardContainer} from './styled'

export default function Header(props){
    return(
        <HeardContainer>
            <div className={'headers--logo'}>
                <a href="/">
                <img
                    src= {"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"}
                    alt ={'NETFLIX logo'}
                />
                </a>
            </div>
        </HeardContainer>
    )
}