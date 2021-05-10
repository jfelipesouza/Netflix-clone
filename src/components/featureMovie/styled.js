import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Featured = styled.section`
    height: 100vh;
    
    .feature--vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }
    .feature--vertical .feature--horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%,transparent 70%);
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

`;

export const FeaturedButton = styled.div`
    a{
     
    }
`;