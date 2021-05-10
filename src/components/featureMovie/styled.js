import styled from 'styled-components';

export const Container = styled.div`
`;

export const Featured = styled.section`
    height: 90vh;
    
    .feature--vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }
    .feature--horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%,transparent 70%);
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding-left:30px
    }
    .feature--name{
        font-size:60px;
        font-weight:bold;
    }
    .feature--info{
        font-size:18px;
        font-weight: bold;
        margin-top:15px;
        
    }
    .feature--points,.feature--seasons,.feature--year{
        display:inline-block;
        margin-right:15px;
    
    }
    .feature--points{
        color: #46d369;
    }

    .feature--description{
        margin-top:15px;
        font-size:20px;
        color:#999999;
        max-width:40%
    }

    .feature--genres{
        margin-top:15px;
        font-size:18px;
        color:#f8f8f8;
    }

`;

export const FeaturedButton = styled.div`
    margin-top:15px;


    .watchButton,.myListButton{
        display: inline-block;
        font-size:20px;
        font-weight:bold;
        padding: 12px 25px;
        border-radius:5px;
        text-decoration:none;
        margin-right:10px;
        opacity:1;
        transition: all ease-in-out 0.2s
    }
    .watchButton:hover,.myListButton:hover{
        opacity:0.7;
    }
    .watchButton{
        background-color:#FFF;
        color:#000
    }

    .myListButton{
        background-color:#333;
        color:#FFF;
    }
`;