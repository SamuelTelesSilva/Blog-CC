import React from 'react';
import { Container} from './styles';

const NavMenu = (props) => {

    /*aqui estou pegando via props e passando para o component, dentro do container ele pega as props e manda para o styled components*/
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
