import React from 'react';
import {HeardContainer} from './styled'

export default function Header(props){
    return(
        <HeardContainer bgcolor = {props.bgcolor} >

            <div className={'logo'} >
                <a href="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png' alt = "Netflix" />
                </a>
            </div>
            
            <div className={'user'} >
                <a href="/">
                    <img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt = "User" />
                </a>
            </div>
        </HeardContainer>
    )
}