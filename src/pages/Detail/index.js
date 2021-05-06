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
                    
                </PostDetail>       
            </Main>
            <Footer />
        </Grid>
    );
}
export default Detail;