import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 53px;
    background-color: var(--colorMain);
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    display: flex;
    width: 117px;
    height: 36px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    color: white;
    margin-left: 20px;

    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    background: #603FAC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :hover{
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        display: none;
    } 
`;

export const Nav = styled.nav`
    display: flex;

    ul{
        display: flex;
        margin-right: 20px;
    }

    li{
        display: flex;
        list-style: none;
        margin-left: 10px;
        font-family: Righteous;

        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width:80px;
        height: 40px;
        justify-content: center;
        align-items:  center;

        :hover{
            cursor: pointer;            
        }
    }

    .li-pu{
        margin-left: 40px;
        width:80px;
        height: 40px;
        justify-content: center;
        align-items:  center;
        border-radius: 6px;

        :hover{
            cursor: pointer;
            background: #603FAC;
        }
    }

    @media screen and (max-width: 768px){
        display: none;
    } 

`;
