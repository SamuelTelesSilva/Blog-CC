import React from 'react';
import { Container, CardMain, CardDetail} from './styles';
import ButtonCard from '../ButtonCard/index';
import useWindowDimensions from '../../useWindowDimensions/index';
import CardMobile from '../CardMobile/index';

const Card = () => {

    let displayResult = 'flex';
    
    const { width } = useWindowDimensions();

    if( width <= 768 ){
        displayResult = 'none';
        return <CardMobile />;
    }

    return(
        <Container style={{display: displayResult}}>
            <CardMain>
                <div className="card-title">Carros x Carros Alugados</div>
                <div className="card-img-detail">img</div>
            </CardMain>
            <div className="card-text-detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
            </div>
            <CardDetail>
                <div className="cont-author-date">
                    <div className="author-info">
                        <span className="author">Autor: </span>
                        <span>Samuel</span>
                    </div>
                    <div className="date-info">
                        <span className="date">Data: </span>
                        <span>29/03/2021</span>
                    </div>
                </div>
                <ButtonCard />
            </CardDetail>
        </Container>
    );
}
export default Card;