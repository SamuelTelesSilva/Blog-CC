import React from 'react';
import {Container} from './styles';
import Button from '../Button/index';
import { Link } from 'react-router-dom';

const Card = (props) => {

    let descricao = props.descricao;
    


    return (
        <Container>
            <div className="area-title">{props.titulo}</div>
            
                <div className="area-img">img</div>
                <div className="area-info">
                    <div><span>Autor:</span> {props.autor}</div>
                    <div><span>Data:</span> {props.data}</div>
                </div>
                <div className="area-conteudo">
                    { descricao.slice(0,60) + '...' }
                    
                </div>
                <div className="area-button">
                    <Link to={`/post/${props.postId}`} style={{ textDecoration: 'none'}}>
                        <Button title="Abrir"/>
                    </Link>
                </div>
            
        </Container>
    );
};
export default Card;