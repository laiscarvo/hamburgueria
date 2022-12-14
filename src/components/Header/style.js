import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    min-height: 10vh;
    padding: .3rem 0;
    background: var(--Grey0);
    margin: auto;
    
    .header{
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        @media (min-width: 520px){
            width: 90vw;
            margin: auto;
            flex-direction: row;
            justify-content: space-between;
        }

    }
    .search{
        max-width: 300px;
        max-height: 60px;

        position: relative;

        background: var(--White);
        border: 2px solid var(--Grey20); 
        border-radius: 8px;

        button{
            position: absolute;
            right: 5px;
            top: 5px;
        }
        
    }
    

`