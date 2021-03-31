import React from 'react';
import { Container } from './styles';
import ButtonCard from '../ButtonCard/index';

const CardMobile = () => {
    return(
        
        <Container>
            <div className="cont-main">
                <div className="detail-card">
                    <div className="title-card">
                        <span>Carros x Carros Alugados</span>
                    </div>
                    <div className="img-card">
                        Img
                    </div>
                </div>
                <div className="author-date">
                    <div className="author-detail">
                        <span>Autor: </span>
                            Samuel
                    </div>
                    <div className="date-detail">
                        <span>Data: </span>
                            25/03/2021
                    </div>
                    <div className="button-detail">
                        <ButtonCard />
                    </div>
                </div>
            </div>
            <div className="desc-card">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
            </div>
        </Container>
    );
}
export default CardMobile;