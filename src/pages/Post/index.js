import React, {useState, useEffect} from 'react';
import { Grid, Main} from './styles';
import {useAuth} from '../../providers/auth';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import SunEditor from 'suneditor-react';
import history from '../../history';
import api from '../../service/api';
import useWindowDimensions from '../../components/useWindowDimensions/index';
import axios from 'axios';
import 'suneditor/dist/css/suneditor.min.css';

const Post = () => {
    const [postContent, setPostContent] = useState();
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const { width } = useWindowDimensions();
    const { autorPost } = useAuth();
    const [postInput, setPostInput] = useState({
        titulo: '',
        autor: autorPost,
        conteudo:'',
        data: '',
        descricao: ''
    });

    const onChangePicture = e => {    
        if (e.target.files[0]) {
          setPicture(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
    };

    const changeValue = (e) => {
        const auxPost = { ...postInput };
        auxPost[e.target.name] = e.target.value;
        setPostInput(auxPost);
    };

    //Pegando todo conteudo do api
    const handleChange = (content) => {
        setPostContent(content);
    }

    const token = localStorage.getItem('token');
    useEffect(() =>{
        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
        }
    }, [token]);

    //Formatando a data do inputa para data BR
    var brData = postInput.data.split('-').reverse().join('/');

    async function handleSubmit(){

        //Passando o token para a api
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
        let response=null;

        if( imgData === null ||
            postInput.titulo === ''||
            postInput.autor === ''||
            postInput.descricao === ''|| 
            postInput.data === ''
        ){
           alert("tem que preencher todos os campos");         
        }else{
            axios.all([
                response = await api.post(`/api/post/img/upload`, {
                    'fileName': picture.name,
                    'mimeType': "image/png",
                    'base64': imgData.substr(22)
                }),
                api.post(`/api/post`, {
                    'titulo':postInput.titulo,
                    'autor':postInput.autor,
                    'conteudo':postContent,
                    'data': brData,
                    'descricao': postInput.descricao,
                    'url_img': response.data.url
                })
            ])
            .then(axios.spread((data1, data2) => {
                alert("Cadastrado com sucesso!!");   
                history.push('/');
            })).catch(e => {
                //localStorage.removeItem('token');
                history.push('/login');
            });
        }
    }

    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="Postagem"/>
            <Main width={width}>
                <div className="cont-editor-post">
                    <div className="cont-editor-title">
                        <div className="editor-title">
                            <span>Titulo:</span>
                        </div>
                        <input 
                            className="input-editor-title" 
                            type="text" 
                            placeholder="Digite o titulo da postagem" 
                            name="titulo"
                            value={postInput.titulo}
                            onChange={changeValue}/>
                    </div>
                    <div className="cont-editor-autor">
                        <div className="editor-autor">
                            <span>Autor: </span>
                        </div>
                        <input 
                            className="input-editor-autor" 
                            type="text" 
                            placeholder="Nome do autor" 
                            name="autor"
                            value={postInput.autor}
                            onChange={changeValue}/>
                    </div>
                    <div className="cont-editor-desc">
                        <div className="editor-desc">
                            <span>Descrição do Post: </span>
                        </div>
                        <textarea  
                            className="input-editor-desc"  
                            placeholder="Descrição do Post" 
                            name="descricao"
                            value={postInput.descricao}
                            onChange={changeValue}/>
                    </div>
                    <div className="cont-editor-data">
                        <div className="editor-data">
                            <span>Data do Post: </span>
                        </div>
                        <input 
                            className="input-editor-data" 
                            type="date" 
                            placeholder="Data do post" 
                            name="data"
                            value={postInput.data}
                            onChange={changeValue}/>
                    </div>
                    <div className="cont-editor-img">
                        <input
                            type="file"
                            className="input-file"
                            name="fileCapa"
                            accept="image/png"
                            onChange={onChangePicture}/>
                    </div>
                    
                    <div className="editor-post">
                        <div className="cont-editor">
                            <SunEditor 
                                //ref={editorRef}
                                name="conteudo"
                                onChange={handleChange}
                                width = "100%" 
                                height = "400"
                                enableToolbar={true}
                                setOptions={{
                                    buttonList: [
                                        // default
                                        ['undo', 'redo'],
                                        ['bold', 'underline', 'italic', 'list', 'align', 'font', 'fontColor', 'fontSize'],
                                        ['table', 'link', 'image'],
                                        ['fullScreen']
                                    ]
                    
                                }}    
                            />
                        </div>
                    </div>
                    <div className="cont-button">
                        <input
                            className="button-input"
                            type="submit"
                            value="Publicar"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </Main>
            <Footer />
        </Grid>
    );
}
export default Post;