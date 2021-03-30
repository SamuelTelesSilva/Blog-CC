import React from 'react';
import {Button, Container, Nav} from './styles';
import useWindowDimensions from '../useWindowDimensions/index';

import MenuIcon from '@material-ui/icons/Menu';
const NavBarMobile = () => {


    return(
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
}
export default NavBarMobile;
