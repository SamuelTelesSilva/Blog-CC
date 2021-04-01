import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;


    .computer-science{
        display: block;
    }

    .txtcomputer{
        margin: 0px 0px -50px 180px;
        font-size: 80px;
    }

    .txtscience{
        font-size: 150px;
    }

    .txtscience, .txtcomputer, span{
        font-family: Righteous;
        font-style: normal;
        font-weight: normal;
        color: #8257E6;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    span{
        color: white;
    }

    .logo{
        max-width: 550px;
        max-height: 550px;
        margin-left: 20px;

        img{
            width: 100%;
        }
    }

    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        max-width: 100%;

        .computer-science{
            display: block;
            max-width: 100%;
        }

        .txtcomputer{
            margin: 0px 0px -20px 70px;
            font-size: 40px;
        }

        .txtscience{
            font-size: 80px;
        }

        .txtscience, .txtcomputer, span{
            display: flex;
            max-width: 100%;

            font-family: Righteous;
            font-style: normal;
            font-weight: normal;
            color: #8257E6;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        span{
            color: white;
        }

        .logo{
            display: none;
        }
    }

    @media screen and (max-width: 300px){
        .txtcomputer{
            font-size: 30px;
        }

        .txtscience{
            font-size: 60px;
        }
    }
`;