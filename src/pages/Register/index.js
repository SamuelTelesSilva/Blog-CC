import React, {useState} from 'react';
import { Grid, Main, FormRegister } from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import { Link } from 'react-router-dom';

import history from '../../history.js';
import api from '../../service/api';


const Register = () => {

    const [loginInput, setLoginInput] = useState({
        nomeUsuario: '',
        emailUsuario: '',
        senhaUsuario: ''
    });

    //gerando uma hash para a senha do usuario
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(loginInput.senhaUsuario, salt);
    
    const changeValue = e => {
        const auxRegister = { ...loginInput };
        auxRegister[e.target.name] = e.target.value;
        setLoginInput(auxRegister);
    };
    
    async function handleSubmit(){

        const data = {
            nome:loginInput.nomeUsuario,
            email:loginInput.emailUsuario,   
            senha:hash
        }

        if(loginInput.email !== '' && loginInput.nomeUsuario  !== '' && loginInput.senhaUsuario.length > 2){
            const response = await api.post('/api/blog/usuarios', data);

            if(response.status === 201){
                alert("Cadastro efetuado com sucesso");
                history.push('/login');      
            }

        }else{
            alert("err")
        }
    }

    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="Cadastre-se"/>
            <Main>
                <FormRegister>
                    <div className="area-input">
                        <div className="area-title-input">
                            <div className="title-input">
                                Nome
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Digite o seu nome"
                            name="nomeUsuario"
                            value={loginInput.nomeUsuario}
                            onChange={changeValue}                            
                        />
                        <div className="area-title-input">
                            <div className="title-input">
                                E-mail
                            </div>
                        </div>
                        <input
                            type="email"
                            placeholder="Digite o seu e-mail"
                            name="emailUsuario"
                            value={loginInput.emailUsuario}
                            onChange={changeValue}                          
                        />
                        <div className="area-title-input">
                            <div className="title-input">
                                Senha
                            </div>
                        </div>
                        <input
                            type="password" 
                            placeholder="Digite a sua senha"
                            name="senhaUsuario"
                            value={loginInput.senhaUsuario}
                            onChange={changeValue}
                        />
                    </div>
                    <div className="area-button">
                        <div className="button-login">
                            <input className="button-input"
                                type="submit"
                                value="Cadastrar"
                                onClick={handleSubmit}
                            />
                        </div>
                        <div className="button-register">
                            <Link
                                to={`/login`}
                                style={{textDecoration: 'none'}}>
                                    <Button title="Login"/>
                            </Link>
                        </div>
                    </div>
                </FormRegister>
            </Main>
            <Footer />
        </Grid>
    );
}
export default Register;