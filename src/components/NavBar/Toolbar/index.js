import React from 'react';
import {Button, Container} from './styles';
import {Link} from 'react-router-dom';
import useWindowDimensions from '../../useWindowDimensions/index';
import SideDrawer from '../SideDrawer/index';
import NavMenu from '../NavMenu/index';

const Toolbar = () => {
    const { width } = useWindowDimensions();

    const Desktop = (
        <Container>

            <Link to={`/`} style={{textDecoration:'none'}}>
                <Button>Blog</Button>
            </Link>

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
