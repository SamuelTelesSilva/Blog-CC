import styled from 'styled-components';



export const Container = styled.div`
    display: block;
    

    .menu{
        width:70%;
        max-width: 300px;
        height: 100%;
        
        background-color: #190101;
        position: absolute;
        z-index: 200;
        transform: translateX(-100%);
        transition: transform 0.3s ease-out;
        color: white;
        top: 0;
        left: 0;
    }

    .menu.open{
        transform: translateX(0);
    }

    .button-menu{
        width: 35px;
        margin: 11px 0px 10px 2px;
    }
`;

export const Nav = styled.nav`
    display: flex;

    ul{
        display: block;
        width: 100%;
    }

    li{
        display: flex;
        list-style: none;
        font-family: Righteous;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 100%;
        height: 40px;
        justify-content: center;
        align-items:  center;

        :hover{
            cursor: pointer;            
        }

        @media screen and (max-width: 133px){
            font-size: 10px;
        } 
    }

    .li-publicar{
        width: 100%;
        height: 40px;
        justify-content: center;
        align-items:  center;
        border-radius: 6px;

        :hover{
            cursor: pointer;
            background: #603FAC;
        }
    }
`;