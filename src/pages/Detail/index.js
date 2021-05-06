import React from 'react';
import { Grid, Main, PostDetail} from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';

import Button from '../../components/Button/index';

const Detail = () => {
    //const {conteudo} = useAuth();
    let titleContext = 'Titulo do Post'
    let conteudo = ''

    

    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title={titleContext}/>
            <Main>
                <PostDetail>
                    <div className="title-detail">
                        <div className="area-title"><span>qualquer titulo sdsadasd dasasd asdasdasd </span></div>       
                        <div className="area-detalhes">
                            <div><span>Autor:</span>Samuel</div>
                            <div><span>Data:</span>15/03/2020</div>
                        </div>
                    </div>
                    <div className="img-cont-button">
                        <div className="area-img">Img</div>
                        <div className="area-conteudo">
                            dasdadasdasdddddddddddddddddddddasdasdadasdsssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        </div>
                        <div className="area-botao">
                            <Button title="Voltar"/>
                        </div>
                    </div>
                </PostDetail>
            </Main>
            <Footer />
        </Grid>
    );
}
export default Detail;