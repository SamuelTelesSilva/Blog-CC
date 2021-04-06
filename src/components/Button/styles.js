import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Button = styled.div`
    display: flex;
    width: 116px;
    height: 31px;
    background: var(--colorMain);
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 6px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :hover{
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        width: 80px;
    } 
`;