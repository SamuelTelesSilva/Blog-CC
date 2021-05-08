import React, {useState, useEffect} from 'react';
import { Grid, Main, PostDetail} from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';

import Button from '../../components/Button/index';
import { Link } from 'react-router-dom';


import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import useWindowDimensions from '../../components/useWindowDimensions/index';


const Detail = (props) => {

    const [post, setPost] = useState([]);
    const { width } = useWindowDimensions();



    useEffect(() => {
        const {id} = props.match.params;
        fetch(`http://localhost:8080/api/post/${id}`)
        .then(post =>
            post.json().then(post => setPost(post))       
        )
        
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
