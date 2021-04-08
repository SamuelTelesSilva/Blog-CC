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
    border: 1px solid black;

    @media screen and (max-width: 768px){
        justify-content: start;
        align-items: center;
    }
`;

export const PostDetail = styled.div`
    display: block;
    width:50%;
    border: 1px solid red;

    .cont-author-date{
        display: flex;
        justify-content: flex-end;
        border: 1px solid blue;

        .author{
            display: flex;
            margin-right: 10px;
        }
        span{
            font-family: Righteous;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            color: #8257E6;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin-right: 5px;
        }
    }
`;