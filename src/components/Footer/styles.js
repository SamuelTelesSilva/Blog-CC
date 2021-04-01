import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    grid-area: F;
    width: 100%;
    height: 80px;
    background-color: var(--colorMain);
    justify-content: center;
    align-items: center;


    bottom: 0;

    .copyright{

        display: block;
        font-family: Righteous;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        span{
            color: white;
        }

        @media screen and (max-width: 768px){
            font-size: 14px;
        }

        @media screen and (max-width: 280px){
            .copyright-info{
                font-size: 11px;
            }
        }
    }

    .uninove{
        display: flex;
        justify-content: center;
    }

`;