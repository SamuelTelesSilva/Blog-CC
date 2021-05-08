import React from 'react';
import { Container} from './styles';
import { Link } from 'react-router-dom';
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
                <li>
                    <Link to={`/`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={`/login`}>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to={`/register`}>
                        Cadastro
                    </Link>
                </li>
                <li className="li-publicar">
                    <Link to={`/post`}>
                        Publicar
                    </Link>
                </li>
            </ul>
        </Container>
    );
}
export default NavMenu;
