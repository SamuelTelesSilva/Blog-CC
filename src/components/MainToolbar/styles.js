import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    grid-area: BM;
    width: 100%;
    height: 30px;
    justify-content: center;
    
    span{
        font-family: Righteous;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        color: #8257E6;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: 0px 0px 0px 20px
    }


    @media screen and (max-width: 768px){
        span{
            margin-left: 5px;
        }
    }


`;