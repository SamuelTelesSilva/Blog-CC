import React, {useState} from 'react';
import { Grid, Main, FormRegister } from './styles';
import { Link } from 'react-router-dom';
import { createUser } from "../../service/blogService";
import {useAuth} from '../../providers/auth';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import history from '../../history.js';
import ModalMsg from '../../components/ModalMsg';

const Register = () => {

    const {setMsg} = useAuth();
    

    const [registerInput, setRegisterInput] = useState({
        nomeUsuario: '',
        emailUsuario: '',
        senhaUsuario: ''
    });

    //gerando uma hash para a senha do usuario
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(registerInput.senhaUsuario, salt);
        
    const changeValue = event => {
        const { name, value } = event.target;
        setRegisterInput({ ...registerInput, [name]: value });
    };

    async function handleSubmit(){

        const data = {
            'nome':registerInput.nomeUsuario,
            'email':registerInput.emailUsuario,   
            'senha':hash
        }

        if(registerInput.emailUsuario !== '' && registerInput.nomeUsuario  !== '')
        {  
            await createUser(data)
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
            setMsg("Não pode ter campos vazios");
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
                            value={registerInput.nomeUsuario}
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
                            value={registerInput.emailUsuario}
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
                            value={registerInput.senhaUsuario}
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
                    <div className="area-msg">
                        <ModalMsg />
                    </div>
                </FormRegister>
            </Main>
            <Footer />
        </Grid>
    );
}
export default Register;