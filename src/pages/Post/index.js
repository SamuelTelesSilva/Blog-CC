import React, {useState, useEffect} from 'react';
import { Grid, Main} from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import api from '../../service/api';
import useWindowDimensions from '../../components/useWindowDimensions/index';

import axios from 'axios';

const Post = () => {
    const { width } = useWindowDimensions();
    const [postContent, setPostContent] = useState();
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [postInput, setPostInput] = useState({
        titulo: '',
        autor: '',
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
        console.log(auxPost);
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

        //variavel response para pegar o link enviado do post do firebase
        let response=null;


        axios.all([
            response = await api.post(`/api/post/img/upload`, {
                fileName: picture.name,
                mimeType: "image/png",
                base64: imgData.substr(22)
            }),
            api.post(`/api/post`, {
                titulo:postInput.titulo,
                autor:postInput.autor,
                conteudo:postContent,
                data: brData,
                descricao: postInput.descricao,
                url_img: response.data.url
            })
          ])
          .then(axios.spread((data1, data2) => {
                //Aqui posso pegar os dados que foi enviado do post como resposta
                //console.log('data1', data1, 'data2', data2)
        }));
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
                        <SunEditor 
                            //ref={editorRef}
                            name="conteudo"
                            onChange={handleChange}
                            width = "100%" 
                            height = "600"
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
                    <div className="cont-button">
                        <input
                            className="button-input"
                            type="submit"
                            value="Cadastrar"
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