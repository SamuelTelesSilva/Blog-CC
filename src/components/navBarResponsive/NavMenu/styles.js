import styled from 'styled-components';


export const Container = styled.nav`
    display: flex;

    ul{
        display: ${props => props.block || "flex"};
	    width: ${props => props.widthUl || "100%"};
        margin-right: ${props => props.mRight || "0px"};
    }

    li{
        display: flex;
        list-style: none;
        margin-left: ${props => props.mLeftLi || "0px"};
        font-family: Righteous;

        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        width: ${props => props.widthLi || "80px"};
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
        
        margin-left: ${props => props.mLeft || "0px"};
        width: ${props => props.widthLiPublicar || "90px"};
        height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;

        :hover{
            cursor: pointer;
            background: #603FAC;
        }
    }

    @media screen and (max-width: 768px){
        display: ${props => props.displayNavMenu || "none"};
    } 

`;


