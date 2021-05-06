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

export const Main =  styled.div`
    grid-area: M;
    display: flex;
    width: 100%;
    justify-content: center;


    .aux-card{
        margin-bottom: 10px;
    }
`;