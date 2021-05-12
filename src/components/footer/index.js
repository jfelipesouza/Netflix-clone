import React from 'react'
import { FooterContainer,ReactIcon } from './styled'
import { FaReact } from "react-icons/fa"
import {SiNetflix} from "react-icons/si"

export default function Footer(props){

    return(
        <FooterContainer>
            <p>
                Direitos de imagem Netflix
            </p>
            <p>
                Feito por João Felipe
                
                <ReactIcon>
                    <FaReact/>
                </ReactIcon>
                
            </p>
            <p>05/2021</p>
            
        </FooterContainer>
    )
}