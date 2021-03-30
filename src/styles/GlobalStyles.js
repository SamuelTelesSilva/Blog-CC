import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%; 
        background: #E9E9E9;  
    }

    *{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --colorMain: #8257E6;
        
    }
  
`;