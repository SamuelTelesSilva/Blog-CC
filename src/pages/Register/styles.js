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
    min-height: 500px;


    @media screen and (max-width: 768px){
        justify-content: start;
        align-items: center;
    }
`;

export const FormLogin = styled.div`
    display: block;
    margin-top: 15px;
    width: 700px;


    .input-area {
        display: flex;       
        margin: 3px;

        .input-area-register, .input-area-password{
            display: flex;
            width: 100%;
            justify-content: center;
        }

        input{
            margin: 0px 0px 0px 10px;
            border: 2px solid var(--colorMain);
            border-radius: 5px;
            padding: 12px;
            width: 350px; 
            height: 40px;
        }
        span{
            font-family: Righteous;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            color: #8257E6;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .input-email{
            margin-left: 44px;
        }
        .input-nome{
            margin-left: 52px;
        }
    }
    
    .button-area{
        display: flex;
        margin-top: 40px;
        justify-content: center;


        .button-login, .button-cad{
            margin: 0px 0px 0px 10px;
        }

    }
        
    @media screen and (max-width: 768px){
        margin-top: 10px;
        width: 100%;

        .input-area {
            display: flex;
            margin-left: 0px;
            width: 100%;
            justify-content: center;
            


            .input-area-register, .input-area-password{
                display: block;
                width: 100%;

                input{
                    margin: 0px;
                    min-width: 100%;
                    max-width: 350px;  
                }

                .input-email{
                    margin-left: 0px;
                }

                .area-span-register, .area-span-password{
                    display: flex;
                    justify-content: center;
                    
                }
            }
        }

        .button-area{
            margin: 10px 0px 0px 0px;
            
            .button-login{
                margin: 0px 0px 0px 10px;
            }
        }

    }


`;