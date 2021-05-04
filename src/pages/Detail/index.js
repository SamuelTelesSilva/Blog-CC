import React from 'react';
import { Grid, Main, PostDetail} from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';


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
                    <div className="cont-author-date">
                        <div className="author">
                            <span>Autor:</span>
                            Samuel
                        </div>
                        <div className="date">
                            <span>Data:</span>
                            15/03/2021
                        </div>
                    </div>

                    <div className="conteudo">
                        {conteudo}
                    </div>
                </PostDetail>       
            </Main>
            <Footer />
        </Grid>
    );
}
export default Detail;