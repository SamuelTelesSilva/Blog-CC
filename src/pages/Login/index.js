import React from 'react';
import { Grid, Main, FormLogin } from './styles';
import NavBar from '../../components/NavBar/Toolbar';
import Header from '../../components/Header/index';
import MainToolbar from '../../components/MainToolbar/index';
import Footer from '../../components/Footer/index';
import Button from '../../components/Button/index';
import { Link } from 'react-router-dom';
import {useAuth} from '../../providers/auth';


const Login = () => {

    const { handleLogin, loginInput, setLoginInput} = useAuth();

    const changeValue = e => {
        const auxLogin = { ...loginInput };
        auxLogin[e.target.name] = e.target.value;
        setLoginInput(auxLogin);
    };

    return(
        <Grid>
            <NavBar />
            <Header />
            <MainToolbar title="##"/>
            <Main>
                <FormLogin>
                    <div className="area-input">
                        <div className="area-title-input">
                            <div className="title-input">
                                Login
                            </div>
                        </div>
                        <input
                            type="email"
                            placeholder="Digite o seu e-mail"
                            name="username"
                            onChange={changeValue}
                            value={loginInput.username}
                        />
                        <div className="area-title-input">
                            <div className="title-input">
                                Senha
                            </div>
                        </div>
                        <input
                            type="password" 
                            placeholder="Digite a sua senha"
                            name="password"
                            onChange={changeValue}
                            value={loginInput.password}     
                        />
                    </div>
                    <div className="area-button">
                        <div className="button-login">
                            <input className="button-input"
                                type="submit"
                                value="Entrar"
                                onClick={handleLogin}    
                            />
                        </div>
                        <div className="button-register">
                            <Link
                                to={`/register`}
                                style={{textDecoration: 'none'}}>
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