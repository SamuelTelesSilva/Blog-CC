import React from 'react';
import { Grid, Main, FormLogin } from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="Login"/>
            <Main>
                <FormLogin>
                    <div className="input-area">
                        <div className="input-area-login">
                            <div className="area-span-login">
                                <span>Login:</span>
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
                        <div className="button-login">
                            <Button title="Logar"/>
                        </div>
                        <div className="button-cad">
                            <Link to={`/register`} style={{textDecoration: 'none'}}>
                                <Button title="Cadastre-se"/>
                            </Link>
                        </div>
                    </div>
                </FormLogin>
            </Main>
            <Footer />
        </Grid>
    );
}
export default Login;