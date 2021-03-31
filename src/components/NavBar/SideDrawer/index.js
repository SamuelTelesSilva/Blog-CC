import React, { useState } from 'react';
import { Container} from './styles';
import MenuIcon from '../MenuIcon/index';
import NavMenu from '../NavMenu/index';


const SideDrawer = () => {

    const [drawMenu, setDrawMenu] = useState(false);
    let menuClasses = ["menu"];

    if(drawMenu){
        menuClasses = ["menu", "open"];
    }

    const openMenu = () => drawMenu ? setDrawMenu(false) : setDrawMenu(true);
    
    return(
        <Container>
            <div onClick={openMenu}> 
                <MenuIcon open="open"/>
            </div>
            <div className={menuClasses.join(' ')}>
                <div onClick={openMenu} className="button-menu"> 
                    <MenuIcon open="close"/>
                </div>
                <NavMenu  
                    block="block"
                    widthUl="100%"
                    widthLi="100%"
                    widthLiPublicar="100%"
                    displayNavMenu="flex"
                />
            </div>
        </Container>
    );
}
export default SideDrawer;
