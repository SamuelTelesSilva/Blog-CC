import React from 'react';
import {Container} from './styles';

const Footer = () => {
    return(
        <Container>
            <div className="copyright">
                <div className="uninove"><span>Uninove</span></div>
                <div className="copyright-info">
                    2021 - 2021 © All rights reserved - by <span>Samuel Teles</span>
                </div>
            </div>
        </Container>
    );
}
export default Footer;