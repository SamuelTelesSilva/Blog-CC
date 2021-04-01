import React from 'react';
import {Container} from './styles';

const Footer = (props) => {
    return(
        <Container>
            <span>{props.title}</span>
        </Container>
    );
}
export default Footer;