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
        margin: 25px 0px 25px 0px;
        
        width: 800px;

        .cont-editor-title,.cont-editor-autor, .cont-editor-data, .cont-editor-desc{

            span{
                font-family: Righteous;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                color: #8257E6;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }

            .input-editor-title, .input-editor-autor, .input-editor-data, .input-editor-desc{
                border: 2px solid var(--colorMain);
                border-radius: 5px;
                padding: 12px;
                min-width:100%;
                max-width: 350px; 
                height: 40px;
            }

            .input-editor-desc{
                height: 60px;
            }

        }

        .editor-post{
            display: block;
            margin: 20px 0px 20px 0px;
            width: 100%;
            max-height: 1000px;
            background-color: #FAFAFA;
            border: 2px solid var(--colorMain);
        }

        .cont-button{
            display: flex;
            justify-content: center;
        }

        .button-input{
            display: flex;
            width: 200px;
            height: 40px;
            background: var(--colorMain);
            color: white;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            font-size: 16px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            
            :hover{
                cursor: pointer;
            }
        }

        .input-file{
            max-width: 200px;
            min-width:100%;
            border: 2px solid var(--colorMain);
            border-radius: 5px; 
            margin-top: 10px;      
        }
    }
    
    @media screen and (max-width: 768px){
        justify-content: start;
        

        .cont-editor-post{
            width: 100%;

            /*Estou pegando o tamanho da tela que esta vindo por props*/
            .editor-post{
                display: flex;
                justify-content: center;
                max-width: ${props => props.width ? props.width+"px" : "250px"};
            }

            .cont-editor{
                width: 80%;
            }
        }
    }
`;