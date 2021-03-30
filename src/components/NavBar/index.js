import React from 'react';
import {Button, Container, Nav, MenuIconMob} from './styles';
import useWindowDimensions from '../useWindowDimensions/index';


const NavBar = () => {
    const { width } = useWindowDimensions();

    const Desktop = (
        <Container>
            <Button>Blog</Button>
            <Nav>
                <ul>
                    <li>Login</li>
                    <li>Cadastro</li>
                    <li className="li-pu">Publicar</li>
                </ul>
            </Nav>
        </Container>
    );

    const Mobile = (
        <Container>
            <MenuIconMob/>
        </Container>
    );

    return(
        width <= 768 ? Mobile : Desktop
    );
}
export default NavBar;
