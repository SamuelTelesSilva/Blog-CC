import React, { useRef, useEffect } from 'react';
import { Grid, Main} from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';


const Post = () => {
    const editorRef = useRef();
    useEffect(() => {
        // Get underlining core object here
        // Notice that useEffect is been used because you have to make sure the editor is rendered.
        console.log(editorRef.current.editor.core);
    }, []);
    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="Postagem"/>
            <Main>
                <div className="cont-editor-post">
                    <div className="cont-editor-title">
                        <div className="editor-title">
                            <span>Titulo:</span>
                        </div>
                        <input className="input-editor-title" type="text" placeholder="Digite o titulo da postagem"/>
                    </div>
                    <div className="cont-editor-autor">
                        <div className="editor-autor">
                            <span>Autor: </span>
                        </div>
                        <input className="input-editor-autor" type="text" placeholder="Nome do autor"/>
                    </div>
                    <div className="editor-post">
                        <SunEditor 
                            ref={editorRef}
                            width="100%"
                            height="400"
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
            </Main>
            <Footer />
        </Grid>
    );
}
export default Post;