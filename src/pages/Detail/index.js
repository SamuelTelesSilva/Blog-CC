import React, {useState, useEffect} from 'react';
import { Grid, Main, PostDetail} from './styles';
import { getById } from '../../service/blogService';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import SunEditor from 'suneditor-react';
import useWindowDimensions from '../../components/useWindowDimensions/index';
import 'suneditor/dist/css/suneditor.min.css';


const Detail = (props) => {
    const { width } = useWindowDimensions();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const { id } = props.match.params;
        getById(id)
          .then((response) => {
            setPost(response.data);
          })
          .catch((err) => {
            console.log("erro ao pegar o id, getById " + err);
          });
    }, [props.match.params]);

    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="##"/>
            <Main>
                <PostDetail width={width}>
                    <div className="title-detail">
                        <div className="area-title"><span>{post.titulo}</span></div>       
                        <div className="area-detalhes">
                            <div><span>Autor:</span>{post.autor}</div>
                            <div><span>Data:</span>{post.data}</div>
                        </div>
                    </div>
                    <div className="img-cont-button">
                        <div className="area-img">
                            <img src={post.url_img} alt={post.url_img}/>
                        </div>
                        <div className="area-descricao">
                            <div>{post.descricao}</div>
                        </div>
                        <div className="editor-post">
                            <SunEditor 
                                setContents={post.conteudo} 
                                disable = {true} 
                                enableToolbar = {false} 
                                showToolbar = {false} 
                                width = "100%" 
                                height = "100%" 
                                
                                setOptions = {{resizingBar: false, showPathLabel: false }}
                            />
                        </div>
                        <div className="area-botao">
                            <Link to={`/#`} style={{ textDecoration: 'none'}}>
                                <Button title="Voltar"/>
                            </Link>
                        </div>
                    </div>
                </PostDetail>
            </Main>
            <Footer />
        </Grid>
    );
}
export default Detail;
