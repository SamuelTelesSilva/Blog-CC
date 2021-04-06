import React from 'react';
import { Grid, Main, FormLogin } from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';

const Login = () => {
    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="Login"/>
            <Main>
                <FormLogin>
                    <div className="input-area">
                        <label>
                            <span>Login:</span>
                            <input className="input-email" type="email" placeholder="Digite o seu e-mail"/>
                        </label>
                    </div>
                    <div className="input-area">
                        <label>
                            <span>Password:</span>
                            <input type="password" placeholder="Digite a sua senha"/>
                        </label>
                    </div>
                    <div className="button-area">
                        <div className="button-login"><Button title="Logar"/></div>
                        <div className="button-cad"><Button title="Cadastro"/></div>
                    </div>
                </FormLogin>
            </Main>
            <Footer />
        </Grid>
    );
}
export default Login;