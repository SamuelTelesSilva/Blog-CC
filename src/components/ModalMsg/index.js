import React from 'react';
import {Container} from './styles';
import {useAuth} from '../../providers/auth';

const ModalMsg = () => {

    const {msg} = useAuth();

    return(
        <Container>
            {msg}
        </Container>
    );
}
export default ModalMsg;