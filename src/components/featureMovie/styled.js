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
`;

export const FeaturedButton = styled.div`
    justify-content:space-between;
`;