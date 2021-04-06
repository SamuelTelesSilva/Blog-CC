import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Card from './components/Cards/Card';
import NavBar from './components/NavBar/Toolbar';
import SideDrawer from './components/NavBar/SideDrawer'
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Home from './pages/Home/index';
import CardM from './components/Cards/CardMobile/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Post from './pages/Post/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nav" component={ NavBar } />
            <Route path="/men" component={ SideDrawer } />
            <Route path="/footer" component={ Footer } />
            <Route path="/header" component={ Header } />
            <Route path="/card" component={ Card } />
            <Route path="/cardm" component={ CardM } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/post" component={ Post } />
        </Switch>
    </BrowserRouter> 
);
export default Routes;
