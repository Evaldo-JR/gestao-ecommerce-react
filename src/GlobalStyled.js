import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-family: 'Poppins', sans-serif;
        font-size: 62.5% /* Tamanho padrão -> 10px */;
        background-color: #f7f7f7;
    }
`;
