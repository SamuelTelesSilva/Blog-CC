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
    align-items: center;
    min-height: 500px;
    
    @media screen and (max-width: 768px){
        justify-content: start;  
        min-height: auto;
    }
`;

export const FormRegister = styled.div`
    display: block;
    width: 600px;
    
    .area-input{

        .area-title-input{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .title-input{
            font-family: Righteous;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 20px;
            color: #8257E6;
        }

        input{
            width:100%;
            height: 35px;
            border-radius: 5px;
            border: 2px solid #8257E6;
            padding: 0px 0px 0px 10px;
        }
    }

    .area-button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;

        .button-login{
            margin-right: 10px;
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

    }

    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 10%;

        .area-input{
            input{
                width:100%;
            }
        }

        .area-button{
            display: block;
            height: auto;

            .button-login{
                margin: 20px 0px 0px 0px;
            }
            .button-register{
                margin-top: 5px;
            }

            .button-input{
                width: 100%;
                height: 35px;
            }
        }
        
    }
`;