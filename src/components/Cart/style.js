import styled from 'styled-components'


export const StyledCart = styled.section`

    max-width: 400px;
    
    
    @media (min-width: 1400px) {
        position: relative;
        top: 200px;
        right: 50px; 
    }
    @media (min-width: 1450px){
        position: relative;
        left: 50px; 
    }
    @media (min-width: 1600px){
        position: relative;
        left: 180px;
    }
    
    
    .cart{
        background: var(--Grey0);
        max-width: 320px;
        position: absolute;
        
    }

    .titleCart{
        background: var(--DarkGreen);
        border-radius: 5px 5px 0px 0px;

        align-items: center;
        justify-content: center;

        width: 320px;
        height: 65px;
    }
    .carrinhoVazio{
        align-items: center;
        justify-content: center;

        width: 320px;
        height: 150px;
    }
    .image{
        width: 80px;
        height: 80px;

        align-items: center;

        background: var(--Grey20);
        border-radius: 5px;
    }
    img{
        width: 70px;
        height: 70px;
    }
    .description{
        width: 120px;
        padding: 0 .5rem;
    }
    .remove{
        width: 90px;
        padding: .7rem 0;
    }
    .priceAndTotal{
        display: flex;
        flex-direction: row;

        padding: 1rem 1rem;

        justify-content: space-between;
    }
    .ulCart{
        padding: 1rem 1rem;
        gap: 10px;
        overflow-x: scroll;
        max-height: 200px;

    }
    .price{

        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;

        color: var(--Grey50);
    }
    .buttonRemoveTodos{

        padding: .3rem .6rem;
    }
    li{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: .3rem .3rem;
    }
`