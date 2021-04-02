import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    border: 2px solid var(--colorMain);
    border-radius: 5px;
    background-color: #FFFFFF;
    height: 340px;
    width: 100%;
    max-width: 500px;

    margin: 10px 0px 10px 0px;
    .cont-main{
        display: flex;
    }

    .detail-card{
        display: block;
        width:100%;
        max-width:200px;
        margin: 0px 5px 0px 5px;

        .title-card{
            
            font-size: 17px;
            font-family: 'Righteous', cursive;
        color: var(--colorMain);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
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
        display: block;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;  
        margin: 5px 0px 0px 5px;
    }
`;