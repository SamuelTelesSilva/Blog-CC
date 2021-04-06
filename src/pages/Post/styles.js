import styled from 'styled-components';

/*
    NB = NavBar
    H = Header
    BM = Barra que vem antes do Main
    M = Main
    F = Footer da pagina
*/

export const Grid =  styled.div`
   display: grid;
   grid-template-rows: 53px 500px 30px auto 80px;

   grid-template-areas:
    'NB'
    'H'
    'BM'
    'M'
    'F';

    height:100%;

    @media screen and (max-width: 768px){
        grid-template-rows: 53px 150px 30px auto 80px;
    }
`;

export const Main = styled.div`
    grid-area: M;
    display: flex;
    width: 100%;
    
    justify-content: center;


    .cont-editor-post{
        display: block;
        margin-top: 25px;
        
        width: 90%;

        .cont-editor-title,.cont-editor-autor{

            span{
                font-family: Righteous;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                color: #8257E6;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }

            .input-editor-title, .input-editor-autor{
                border: 2px solid var(--colorMain);
                border-radius: 5px;
                padding: 12px;
                min-width: 60%;
                max-width: 350px; 
                height: 40px;
            }

        }

        .editor-post{
            display: flex;
            margin: 20px 0px 20px 0px;
            width: 100%;
            max-height: 1000px;
            border: 2px solid var(--colorMain);
        }
    }
    
    @media screen and (max-width: 768px){
        justify-content: start;
        align-items: center;

        .cont-editor-post{
            width: 100%;

            .editor-post{
                width: 95%;
            }
        }

        
        

    }
`;