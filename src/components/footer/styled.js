import styled,{keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FooterContainer = styled.footer`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:50px 0;
    padding:0px;

    p {
        display:flex;
        flex-direction:row;
        font-size:18px;
        
    }

    
`;
export const ReactIcon = styled.span`
    font-size:25px;
    color:blue;
    margin-left: 30px;
    animation: ${rotate} 2s infinite ;
    background-color:white;
    
`;