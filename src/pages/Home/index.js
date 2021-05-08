import React from 'react';
import { Grid, Main} from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Card/index';
import Paginacao from '../../components/Paginacao';
import { useAuth } from '../../providers/auth';

const Home = () => {

    const { post } = useAuth();
    
    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="Pesquisas"/>
            <Main>
                <div className="container-main">
                    {post.map((post) => (
                        <div className="aux-card" key={post.id}>
                            <Card
                                postId={post.id} 
                                titulo={post.titulo}
                                conteudo={post.conteudo}
                                autor={post.autor}
                                data={post.data}   
                                descricao={post.descricao}
                                imgPost={post.url_img}                            
                            />
                        </div>
                    ))}
                    <div className="cont-paginacao">
                        <Paginacao/>
                    </div>
                </div>
            </Main>
            <Footer />
        </Grid>
    );
}
export default Home;
