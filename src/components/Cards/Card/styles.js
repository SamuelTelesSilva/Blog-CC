import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid var(--colorMain);
    border-radius: 5px;
    width: 100%;
    max-width: 900px;
    background-color: #FFFFFF;
    max-height: 200px;

    .card-text-detail{
        display: inline-block;
        display: -webkit-box;
        margin: 29px 5px 5px 0px;
        width: 400px;
        overflow: hidden;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;  
        max-height: 10em;
        
    }

    @media screen and (max-width: 768px){
        
    } 
`;

export const CardMain = styled.div`
    display: block;
    margin: 5px;
    
    .card-title{
        margin-bottom: 5px;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
    }
    .card-img-detail{
        border: 1px solid blue;
        width: 250px;
        height: 150px;
        
    }

    @media screen and (max-width: 768px){
        
    } 
`;

export const CardDetail = styled.div`
    display: block;
    
    width: 135px;
    margin: 5px 0px 5px 85px;
    

    .author-info, .date-info{
        display: flex;
        
        .author, .date{
            display: flex;
            margin-right: 5px; 
            font-family: 'Righteous', cursive;
            color: var(--colorMain);
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
        }

        span{
            font-size: 15px;
        }
    }


    @media screen and (max-width: 768px){
        
    } 
`;

