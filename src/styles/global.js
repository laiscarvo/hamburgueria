import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{

        --White: #FFFFFF;
        --DarkGreen: #27AE60;
        --Green: #93D7AF;
        --Pink: #EB5757;
        --Grey100: #333333;
        --Grey50: #828282;
        --Grey20: #E0E0E0;
        --Grey4: #BDBDBD;
        --Grey0: #F5F5F5;
    }
    button{
        cursor: pointer;
        border: 0;
        background: transparent;
    }
    ol, li, ul{
        list-style: none;

        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    img{
        max-width: 100%;
    }
    div, aside{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    body{
        background: var(--White);
    }
`

export const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 1rem;

`
