import React from 'react';
import { Container} from './styles';

const NavMenu = (props) => {

    return(
        <Container
            block={props.block}
            widthUl={props.widthUl}
            mRight={props.mRight}
            widthLi={props.widthLi}
            mLeft={props.mLeft}
            widthLiPublicar={props.widthLiPublicar}
            mLeftLi={props.mLeftLi}
            displayNavMenu={props.displayNavMenu}
        >
            <ul>
                <li>Login</li>
                <li>Cadastro</li>
                <li className="li-publicar">Publicar</li>
            </ul>
        </Container>
    );
}
export default NavMenu;
