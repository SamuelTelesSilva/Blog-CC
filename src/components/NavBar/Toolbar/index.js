import React from 'react';
import {Button, Container} from './styles';

import useWindowDimensions from '../../useWindowDimensions/index';
import SideDrawer from '../SideDrawer/index';
import NavMenu from '../NavMenu/index';

const Toolbar = () => {
    const { width } = useWindowDimensions();

    const Desktop = (
        <Container>
            <Button>Blog</Button>
            <NavMenu 
                mRight="20px"
                mLeftLi = "10px"
                mLeft= "40px"
            />
        </Container>
    );

    const Mobile = (
        <Container>
            <SideDrawer/>  
        </Container>
    );

    return(
        width <= 768 ? Mobile : Desktop
    );
}
export default Toolbar;
