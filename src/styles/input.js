import styled, {css} from 'styled-components'

export const ThemeInput = styled.input`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: .3s;
    ${(props) => {
        switch(props.InputSize){
            case 'lg':
                return css`
                    padding: 0 1rem;
                    width: 150px;
                    height: 50px;
                
                `;
            case 'md':
                return css`
                    padding: 0 2rem;
                    height: 40px;
                
                `;
            case 'sm':
                return css`
                    padding: 0 1rem;
                    height: 15px;
                
                `;
            default:
                return false;
        }
    }}

    ${(props) => {
        switch(props.InputStyle){
            case 'solid':
                return css`
                box-sizing: border-box;
                color: var(--Grey20);
                background: var(--White);
                border: transparent;
                border-radius: 8px;
                &:hover{
                    color: var(--Grey50);
                }
                &:focus{
                    box-shadow: 0 0 0 0;
                    outline: 0;
                }
                `;
            case 'outline':
                return css`
                color: var(--Grey50);
                background: var(--Grey20);
                border: 2px solid var(--Grey20);
                &:hover{
                    background: var(--Grey50);
                    color: var(--Grey20)
                }
                `
            default:
                return false;
        }
    }}

`