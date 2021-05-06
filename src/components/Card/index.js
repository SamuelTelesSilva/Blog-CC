import React from 'react';
import {Container} from './styles';
import Button from '../Button/index';


const Card = () => {

    let conteudo = "sadasdasdasdadadasdadasdadadsadadadadadadasdadasdaasadadadadadadasdadasdadasdad";
    


    return (
        <Container>
            <div className="area-title">Carros x Carros Alugados</div>
            <div className="area-img">img</div>
            <div className="area-info">
                <div>Autor: WelCido</div>
                <div>Data: 11/03/2021</div>
            </div>
            <div className="area-conteudo">
                { conteudo.slice(0,60) + "..." }
            </div>
            <div className="area-button">
                <Button />
            </div>
        </Container>
    );
};
export default Card;