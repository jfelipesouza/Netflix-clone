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
        font-size:15px;
        align-items:center;
        
    }
    #Netflix{
        color:red;
        margin-left:10px
    }

    
`;
export const ReactIcon = styled.span`
    font-size:18px;
    color:#61dbfb;
    margin-left: 10px;
    animation: ${rotate} infinite 10s linear ;
    
    
`;