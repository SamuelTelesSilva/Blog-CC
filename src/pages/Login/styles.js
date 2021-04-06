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
`;

export const FormLogin = styled.div`
    display: block;
    margin-top: 15px;

    .input-area {
        display: flex;
        margin: 3px;

        input{
            margin: 0px 0px 0px 10px;
            border: 2px solid var(--colorMain);
            border-radius: 5px;
            padding: 12px;
            width: 250px; 
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
            margin-left: 52px;
        }

    }
    
    .button-area{
        display: flex;
        margin-top: 40px;

        .button-login{
            margin: 0px 20px 0px 113px;
        }

        .button-cad{
            
        }
    }


`;