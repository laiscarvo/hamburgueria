import styled from 'styled-components'

export const StyledProduct = styled.li`

    padding: .5rem 0; 
    margin: 1rem 0;

    box-sizing: border-box;
    
    .productCard{
        
        width: 300px;
        height: 346px;
        
        gap: 20px;

        border: 2px solid var(--Grey20);
        border-radius: 5px;
    }
    img{
        width: 177px;

    }

    .img{
        max-width: 300px;
        max-height: 150px;

        align-items: center;
        justify-content: center;

        background: var(--Grey0);

        
    }
    .description{
        gap: 10px;
        padding: .4rem .8rem;
    }
    .price{
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        color: var(--DarkGreen);
    }
    
`