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
    height: 100%;

    margin: 0px 0px 25px 0px;

    @media screen and (max-width: 768px){
        justify-content: start;
    }
`;

export const PostDetail = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    

    .title-detail{
        display: block;
        width: 100%;
    }

    .area-title{
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 15px 0px 10px 0px;


        span{
            display: block;
            font-family: Righteous;
            font-size: 17px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            word-break: break-all;    
        }
    }

    .area-detalhes{
        display: flex;
        justify-content: space-between;
        width: 100%;
        
        span{
            font-family: Righteous;
            font-size: 15px;
            color: #8257E6;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }

    .img-cont-button{
        display: block;
        width: 100%;
        margin-top: 10px;
    }

    .area-img{
        max-width: ${props => props.width ? props.width-26+"px" : "250px"};
        height: auto;
        width: 100%;

        img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }


    .area-descricao{
        display: block; 
        width: 100%;
        word-break: break-all; 
        margin: 15px 0px 15px 0px;
        font-family: Righteous;
        font-size: 16px;

        div{
            margin: 0px 0px 0px 5px;
        }
    }

    .area-botao{
        display: block;
        margin: 15px 0px 15px 0px;
    }

    .img-cont-button{
        width: 100%;

        /*Estou pegando o tamanho da tela que esta vindo por props*/
        .editor-post{
            display: block;
            max-width: ${props => props.width ? props.width-26+"px" : "250px"};
        }
        
    }



    @media screen and (min-width: 651px){
        max-width: 800px;
        height: 100%;
        border: 1px solid var(--colorMain);
        border-radius: 3px;
        

        .area-img{
            max-width: 800px;
            width: 100%;
            height: auto;
        }

        .area-botao{
            display: flex;
            justify-content: center;
        }

        .editor-post{
            display: flex;
            height: 100%;
            margin: 20px 0px 20px 0px;
            width: 100%;
        }

        .area-detalhes{
            div{
                margin: 0px 10px 0px 10px;
            }
        }

        .area-descricao{
            div{
                margin: 0px 0px 0px 10px;
            }
        }
    }
`;

