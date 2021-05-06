import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    width: 100%;
    border: 2px solid blue;


    .area-title{
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .area-img{
        max-width: 450px;
        width: 100%;
        height: 180px;
        background-color: orange;
    }

    .area-info{
        display: flex;
        width: 100%;
    }

    .area-conteudo{
        display: block; 
        width: 100%;
        word-break: break-all; 
    }

    .area-button{

    }



`;