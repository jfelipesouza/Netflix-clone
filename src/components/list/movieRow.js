import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom:30px;
`;

export const ListTitle = styled.h2`
    margin:0px 0px 0px 30px;
`;

export const ListArea = styled.div`
    overflow-x:hidden;
    padding-left:30px;
`;

export const List = styled.div`
    width:9999999999px;
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