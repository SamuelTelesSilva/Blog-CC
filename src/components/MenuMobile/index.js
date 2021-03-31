import React, { useState } from 'react';
import { Container, Nav} from './styles';
import MenuIcon from '../MenuIcon/index';

const MenuMobile = () => {

    const [drawMenu, setDrawMenu] = useState(false);
    let menuClasses = ["menu"];

    if(drawMenu){
        menuClasses = ["menu", "open"];
    }

    /**
        * Esta é uma função que vai chamar o menu
        * esse é só um exemplo de como ducumentar o codigo
        * @example 
        *   exemplo(3, 5); // 8
        * 
        * @param   {Number} obrigatorio   Parametro obrigatório
        * @param   {Number} [opcional]    Parametro ocional. Note os '[ ]'
        * @returns {Number}
    */
    const openMenu = () => drawMenu ? setDrawMenu(false) : setDrawMenu(true);
    
    const navMenu = (
        <Nav>
            <ul>
                <li>Login</li>
                <li>Cadastro</li>
                <li className="li-publicar">Publicar</li>
            </ul>
        </Nav>
    );

    return(
        <Container>
            <div onClick={openMenu}> 
                <MenuIcon open="open"/>
            </div>
            <div className={menuClasses.join(' ')}>
                <div onClick={openMenu} className="button-menu"> 
                    <MenuIcon open="close"/>
                </div>
                { navMenu }
            </div>
        </Container>
    );
}
export default MenuMobile;
