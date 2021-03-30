import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    .menu{
        width: 300px;
        height: 800px;
        background-color: #190101;
        z-index: 200;
        transform: translateX(-100%);
        transition: transform 0.3s ease-out;
        color: white;
        box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
        
        top: 0;
        left: 0;
    }

    .menu.open{
        transform: translateX(0);
    }

    .button{
        :hover{
            cursor: pointer;
        }
    }
`;
