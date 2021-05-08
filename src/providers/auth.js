import React, { createContext, useState, useEffect } from 'react';
import history from '../history';
import api from '../service/api.js';


export const AuthContext = createContext({});
export const AuthProvider = (props) =>{

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [autorPost, setAutorPost] = useState("");
    

    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    });

    //token
    useEffect(() =>{
        const token = localStorage.getItem('token');
    
        if(token){
            api.defaults.headers.Autorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);

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
            setAutorPost(response.data.nome);
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
            autorPost
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

//Esse é um custom hook
export const useAuth = () => React.useContext(AuthContext);