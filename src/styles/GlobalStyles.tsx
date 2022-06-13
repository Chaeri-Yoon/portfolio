import { createGlobalStyle } from "styled-components";
import './reset.css';

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
    a, a:visited{
        color: inherit;
        text-decoration: none;
    }
    button{
        cursor: pointer;
        border: none;
    }
    .underlined{
        padding: 0.25em 0;
        font-size: 1em;
        font-weight: 600;
    }
`;
export default GlobalStyles;