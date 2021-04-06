import React from 'react';
import {Button, Container} from './styles';

const ButtonCard = (props) => {
    return(
        <Container>
            <Button>
                {props.title}
            </Button>
        </Container> 
    );
}
export default ButtonCard;
