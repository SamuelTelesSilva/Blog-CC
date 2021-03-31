import React from 'react';
import {Button, Container} from './styles';

import useWindowDimensions from '../../useWindowDimensions/index';
import MenuMobile from '../MenuMobile/index';
import NavMenu from '../NavMenu/index';

const NavBar = () => {
    const { width } = useWindowDimensions();

    const Desktop = (
        <Container>
            <Button>Blog</Button>
            {/*NavMenu esta recebendo como props alguns dados, essas variaveis voce pode ver la no styles do NavMenu*/}
            <NavMenu 
                mRight="20px"
                mLeftLi = "10px"
                mLeft= "40px"
            />
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
