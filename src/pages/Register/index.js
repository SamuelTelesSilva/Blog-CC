import React from 'react';
import { Grid, Main, FormRegister } from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/auth';

const Register = () => {

    const { registerInput, handleInputChange, handleSubmit } = useAuth();
    
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
                            onChange={handleInputChange}                            
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
                            onChange={handleInputChange}                          
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
                            onChange={handleInputChange}
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