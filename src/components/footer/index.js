import React from 'react'
import { FooterContainer,ReactIcon } from './styled'
import { FaReact } from "react-icons/fa"
import {SiNetflix} from "react-icons/si"

export default function Footer(props){

    return(
        <FooterContainer>
            <p>
                Feito por João Felipe
                
                <ReactIcon>
                    <FaReact/>
                </ReactIcon>
                
            </p>
            <p>05/2021</p>
            <p>
                Direitos de imagem Netflix
                <span id='Netflix'>
                    <SiNetflix/>
                </span> 
            </p>
        </FooterContainer>
    )
}