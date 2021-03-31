import React from 'react';
import {Button, Container, Nav} from './styles';
import useWindowDimensions from '../useWindowDimensions/index';
import MenuMobile from '../MenuMobile/index';


const NavBar = () => {
    const { width } = useWindowDimensions();

    const navMenu = (
        <Nav>
            <ul>
                <li>Login</li>
                <li>Cadastro</li>
                <li className="li-publicar">Publicar</li>
            </ul>
        </Nav>
    );

    const Desktop = (
        <Container>
            <Button>Blog</Button>
            { navMenu }
        </Container>
    );

    const Mobile = (
        <Container>
            <MenuMobile/>  
        </Container>
    );

    return(
        width <= 768 ? Mobile : Desktop
    );
}
export default NavBar;
