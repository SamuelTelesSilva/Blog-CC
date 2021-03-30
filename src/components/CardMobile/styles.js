import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    border: 2px solid var(--colorMain);
    border-radius: 5px;
    background-color: #FFFFFF;

    .cont-main{
        display: flex;
    }

    .detail-card{
        display: block;
        width:100%;
        max-width:200px;
        margin: 0px 5px 0px 5px;

        .title-card{
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 23px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .img-card{
            width:100%;
            max-width:200px;
            height: 150px;
            border: 1px solid black;
            border-radius: 5px;
        }
    }

    .author-date{
        display: block;
        width: 50%;
        margin: 21px 0px 0px 0px;
        font-size: 15px;

        span{
            font-family: 'Righteous', cursive;
            color: var(--colorMain);
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
        }

        .button-detail{
            display: flex;
            margin-top: 70px;
        }

    }

    .desc-card{
        display: inline-block;
        display: -webkit-box;
        margin-top: 5px;
        overflow: hidden;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;  
        max-height: 9em;
        margin: 5px;
    }
`;