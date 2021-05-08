import React, { useState, useEffect}  from 'react';
import { Grid, Main} from './styles';
import { getAll } from '../../service/blogService';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Card/index';
import Paginacao from '../../components/Paginacao';


const Home = () => {

    const [post, setPost] = useState([]);
    const [pages, setPages] = useState();
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [total, setTotal] = useState(0);
    const limit = 5;

    useEffect(()=>{
        getAll(limit, paginaAtual)
        .then((response) => {
            setTotal(response.data['totalElements'])
            setPost(response.data.content); 
            setPages(response.data['totalPages']);

        }).catch(e => {
            console.log("Erro ao utilizar o getAll " + e);
        });
    }, [paginaAtual, limit, total]);


    //Paginação
    const handleChange = (event, value) => {
        setPaginaAtual(value-1);
    };

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
                        <Paginacao count={pages} onchange={handleChange}/>
                    </div>
                </div>
                
            </Main>
            <Footer />
        </Grid>
    );
}
export default Home;
