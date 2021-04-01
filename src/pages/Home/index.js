import React from 'react';
import { Grid, Main} from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Cards/CardMobile/index';

const Home = () => {
    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="Pesquisas"/>
            <Main>
                Conteudo
            </Main>
            <Footer />
        </Grid>
    );
}
export default Home;
