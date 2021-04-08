import React from 'react';
import { Grid, Main, FormRegister } from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="Cadastre-se"/>
            <Main>
                <FormRegister>
                    <div className="input-area">
                        <div className="input-area-register">
                            <div className="area-span-register">
                                <span>Nome:</span>
                            </div>
                            <input className="input-nome" type="name" placeholder="Digite o seu nome"/>
                        </div>
                    </div>
                    <div className="input-area">
                        <div className="input-area-register">
                            <div className="area-span-register">
                                <span>E-mail:</span>
                            </div>
                            <input className="input-email" type="email" placeholder="Digite o seu e-mail"/>
                        </div>
                    </div>
                    <div className="input-area">
                        <div className="input-area-password">
                            <div className="area-span-password">
                                <span>Password:</span>
                            </div>
                            <input className="input-password" type="password" placeholder="Digite a sua senha"/>
                        </div>
                    </div>

                    <div className="button-area">
                        <div className="button-cad">
                            <Button title="Cadastrar"/>
                        </div>
                        <div className="button-login">
                            <Link to={`/login`} style={{textDecoration: 'none'}}>
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