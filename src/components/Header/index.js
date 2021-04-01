import React from 'react';
import {Container} from './styles';
import emblema from '../../assets/emblema1.png';

const Header = () => {
    return(
        <Container>
            <div className="computer-science">
                <div className="txtcomputer">Computer</div>
                <div className="txtscience">
                    S<span>c</span>ien<span>c</span>e
                </div>
            </div>
            <div className="logo">
                <img src={emblema} alt="emblema"/>
           </div>
           
        </Container>
    );
}
export default Header;
