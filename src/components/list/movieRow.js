import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom:10px;
`;

export const ListTitle = styled.h2`
    margin:0px 0px 0px 30px;
`;

export const ListArea = styled.div`
    overflow-x:hidden;
    padding-left:30px;
    
    &:hover .navigate{
        opacity:1;
    }
`;

export const List = styled.div`
    transition: all 0.55s ease;
`;

export const ListItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.15s;
    }
    img:hover{
        transform: scale(1);
    }
`;

export const ListitemMovieLeft = styled.div `
    position:absolute;
    width: 35px;
    height: 225px ;
    left:0;
    z-index: 99;
    display:flex;
    align-items:center;
    justify-content:center;
    overFlow: hidden;
    background-color:rgba(0,0,0,.6);
    cursor: pointer;
    opacity:0;
    transition: all 0.85s ease;
    
`
export const ListitemMovieRigth = styled.div `
    position:absolute;
    width: 35px;
    height: 225px ;
    right:0;
    z-index: 99;
    display:flex;
    align-items:center;
    justify-content:center;
    overFlow:hidden;
    background-color:rgba(0,0,0,.6);
    cursor: pointer;
    opacity:0;
    transition: all 0.85s ease;
    
`