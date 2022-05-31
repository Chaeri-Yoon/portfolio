import { createGlobalStyle } from "styled-components";
import './reset.css';
import './variables.css';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body, #root{
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    body{
        padding: var(--body-padding);
    }
    a, a:visited{
        color: inherit;
        text-decoration: none;
    }
    button{
        cursor: pointer;
        border: none;
    }
`;
export default GlobalStyles;