import styled, {css} from 'styled-components'

export const ThemeButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: .3s;
    ${(props) => {
        switch(props.buttonSize){
            case 'lg':
                return css`
                    padding: 0 2rem;
                    height: 60px;
                    width: 300px;
                
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
        switch(props.buttonStyle){
            case 'solid':
                return css`
                color: var(--White);
                background: var(--DarkGreen);
                border: 2px solid var(--DarkGreen);
                border-radius: 8px;
                &:hover{
                    background: var(--Green);
                }
                `;
            case 'letter':
                return css`
                color: var(--Grey4);

                font-size: 12px;
                font-family:'Inter', sans-serif  ;
                font-weight: 500;
                line-height: 15px;
                `;
            case 'outline':
                return css`
                color: var(--Grey50);
                background: var(--Grey20);
                border: 2px solid var(--Grey20);
                border-radius: 8px;
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
