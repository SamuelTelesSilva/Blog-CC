import React from 'react';
import {Container} from './styles';
import Button from '../Button/index';


const Card = (props) => {

    let conteudo = props.conteudo;
    


    return (
        <Container>
            <div className="area-title">{props.titulo}</div>
            
                <div className="area-img">img</div>
                <div className="area-info">
                    <div><span>Autor:</span> {props.autor}</div>
                    <div><span>Data:</span> {props.data}</div>
                </div>
                <div className="area-conteudo">
                    { conteudo.slice(0,60) + '...' }
                    
                </div>
                <div className="area-button">
                    <Button title="Abrir"/>
                </div>
            
        </Container>
    );
};
export default Card;