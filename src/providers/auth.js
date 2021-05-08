import React, { createContext, useState, useEffect } from 'react';
import history from '../history';
import api from '../service/api.js';
import { getAll, createUser } from "../service/blogService";

export const AuthContext = createContext({});

export const AuthProvider = (props) =>{

    const initialContatoState = {
        nomeUsuario: '',
        emailUsuario: '',
        senhaUsuario: ''
    };

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [registerInput, setRegisterInput] = useState(initialContatoState);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState();
    const [post, setPost] = useState([]);
    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    });
    const sizeLimit = 5;



    //Register
    const handleInputChange = event => {
        const { name, value } = event.target;
        setRegisterInput({ ...registerInput, [name]: value });
    };

    //Pegando o token
    useEffect(() =>{
        const token = localStorage.getItem('token');
        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
        setLoading(false);
    }, [])

    
    //---------------------------------------------Home----------------------------------------------------//
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


    //Paginação utilizada pelo componente paginacao
    const handleChange = (event, value) => {
        setPaginaAtual(value-1);
    };

    //---------------------------------------------Efetuar o login----------------------------------------------------//
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

    //---------------------------------------------Add User----------------------------------------------------//
    //gerando uma hash para a senha do usuario
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(registerInput.senhaUsuario, salt);

    //Adicionar usuarios no blog
    const handleSubmit = () => {

        const data = {
            'nome':registerInput.nomeUsuario,
            'email':registerInput.emailUsuario,   
            'senha':hash
        }

        if(registerInput.emailUsuario !== '' && registerInput.nomeUsuario  !== '' && registerInput.senhaUsuario.length > 2){  
            createUser(data)
            .then(response => {
                if(response.status === 201){
                    alert("Cadastro efetuado com sucesso");
                    history.push('/login');      
                }
            })
            .catch(e => {
                console.log(e);
            });
        }else{     
            alert("Não pode ter campos vazios");
        }
    };

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
                handleChange,
                setRegisterInput,
                registerInput,
                handleSubmit,
                handleInputChange
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

//Esse é um custom hook
export const useAuth = () => React.useContext(AuthContext);