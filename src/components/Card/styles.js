import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    width: 100%;
    border: 2px solid #8257E6;
    border-radius: 5px;
    background: #FFFFFF;


    .area-title{
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 10px 0px 10px 0px;

        font-family: Roboto;
        font-size: 16px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .area-img{
        max-width: 450px;
        width: 100%;
        height: 180px;
        background-color: orange;
        border-radius: 10px;
    }

    .area-info{
        display: block;
        width: 100%;
        margin: 10px 0px 10px 0px;

        span{
            font-family: Righteous;
            font-size: 15px;
            color: #8257E6;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }

    .area-conteudo{
        display: block; 
        width: 100%;
        word-break: break-all; 
        margin: 10px 0px 10px 0px;
    }

    .area-button{
        display: block; 
        width: 100%;
        margin: 10px 0px 10px 0px;
    }



    @media screen and (min-width: 450px){
        display: grid;
        grid-template-columns: 350px 200px 150px;
        grid-template-rows: 30px 50px auto;

        width: 730px;

        grid-template-areas:
            "titulo titulo titulo"
            "imagem conteudo detalhes"
            "imagem conteudo botao"
        ;
        
        gap: 10px;

        .area-title{
            grid-area: titulo;
            align-items: center;
            justify-content: start;
            margin: 0px;
            margin-left: 5px;
        }

        .area-img{
            grid-area: imagem;
            border-radius: 0px;
            margin-left: 5px;

        }
        .area-conteudo{
            grid-area: conteudo;
            margin: 0px;
            
        }

        .area-info{
            grid-area: detalhes;
            margin: 0px;
           
        }
        .area-button{
            grid-area: botao;
            margin-top: 50%; 
            
        }
    } 

`;