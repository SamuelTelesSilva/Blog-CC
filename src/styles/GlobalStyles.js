import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        background: #E9E9E9;
    }

    html, body, #root {
        height: 100%;   
    }

    *{
        border: 0;
        outline: 0;
        
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --backMain: #E9E9E9;
        --backSeg: #D3D3D3;
    }
  
`;