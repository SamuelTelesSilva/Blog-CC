import React from 'react';
import {OpenMenu, CloseMenu} from './styles';

const MenuIcon = (props) => {

    return(
        props.open === 'open' ? <OpenMenu/> : <CloseMenu />
    );
}
export default MenuIcon;
