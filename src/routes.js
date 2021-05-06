import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Card from './components/Card/index';
import NavBar from './components/NavBar/Toolbar';
import SideDrawer from './components/NavBar/SideDrawer'
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Post from './pages/Post/index';
import Detail from './pages/Detail';

import {useAuth} from './providers/auth';


function CustomRoute({ isPrivate, ...rest}){

    const { loading, authenticated } = useAuth();

    if(loading){
        return <h1>Loading...</h1>;
    }

    if(isPrivate && !authenticated){
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}

const Routes = () => (
    
    <Switch>
        <CustomRoute exact path="/" component={Home} />
        <CustomRoute path="/nav" component={ NavBar } />
        <CustomRoute path="/men" component={ SideDrawer } />
        <CustomRoute path="/footer" component={ Footer } />
        <CustomRoute path="/header" component={ Header } />
        <CustomRoute path="/card" component={ Card } />
        <CustomRoute path="/login" component={ Login } />
        <CustomRoute path="/register" component={ Register } />        
        <CustomRoute path="/post/1" component={ Detail } />
        <CustomRoute isPrivate path="/post" component={ Post } />
    </Switch>
    
);
export default Routes;
