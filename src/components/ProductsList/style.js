import styled from 'styled-components'

export const StyleSection = styled.section`
    width: 98vw;
    overflow-y: scroll;
    max-width: 1100px;
    @media (min-width: 687px){
        overflow-y: inherit;
    }
    @media (min-width: 1070px) {
        position: relative;
        top: 100px;
    }

`


export const StyledUl = styled.ul`
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 1000px;

    @media (min-width: 520px){
        flex-wrap: wrap;
    }


    width: 98vw;
`