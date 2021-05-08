import React, { createContext, useState, useEffect } from 'react';
import history from '../history';
import api from '../service/api.js';
import { getAll } from "../service/blogService";

export const AuthContext = createContext({});
export const AuthProvider = (props) =>{

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    //GETALL: page, size e post do getAll(size, page)
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState();
    const [post, setPost] = useState([]);
    const sizeLimit = 5;


    //login
    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    });

    useEffect(() =>{
        const token = localStorage.getItem('token');
        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
        setLoading(false);
    }, [])

    

    //Getall pegando todos os posts junto com paginação e size
    useEffect(() => {

        getAll(sizeLimit, paginaAtual)
          .then((response) => {
            setTotal(response.data['totalElements']);
            setPost(response.data.content);
            setPages(response.data['totalPages']); 
          })
          .catch((err) => {
            console.log(err);
          });
    }, [paginaAtual, sizeLimit, total]);


    //Paginação da pagina home, esta sendo utilizada pelo componente paginacao
    const handleChange = (event, value) => {
        setPaginaAtual(value-1);
    };

    async function handleLogin(){
        try{
            const data = {
                username:loginInput.username,
                password:loginInput.password
            } 

            const response = await api.post('/api/blog/login', data);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

            //Capturar os dados do usuario
            console.log(response.data);
            //setPerfilLogin(response.data.nome);
            
            setAuthenticated(true);
            history.push('/post');
           
        }catch(error){

            if(error.request.status === 401){
                console.log('Usuario e senha invalida');
            }
            
        }
    }

    return(
        <AuthContext.Provider value={{
                handleLogin, 
                loginInput, 
                setLoginInput, 
                authenticated, 
                loading, 
                pages, 
                setPaginaAtual, 
                post, 
                handleChange
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

//Esse é um custom hook
export const useAuth = () => React.useContext(AuthContext);