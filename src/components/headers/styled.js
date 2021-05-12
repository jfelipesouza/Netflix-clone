import styled from 'styled-components';

export const HeardContainer = styled.header`
    position: fixed;
    z-index: 999;
    top:0;
    left:0;
    right: 0;
    height:65px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    background:${props=>props.bgcolor};
    transition: all ease-in-out 0.5s ;

    .logo{
        height:50px;
        
    }

    .logo img{
        height: 100%;
        margin-left:10px;
    }

    .user{
        height:50px;
    }

    .user img{
        height:100%;
        margin-right:15px;
        border-radius:10px;
    }

`;
