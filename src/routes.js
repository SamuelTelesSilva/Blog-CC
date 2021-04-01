import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Card from './components/Cards/Card';
import NavBar from './components/NavBar/Toolbar';
import SideDrawer from './components/NavBar/SideDrawer'
import Footer from './components/Footer/index';
import Header from './components/Header/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/card" component={Card} />
            <Route path="/nav" component={ NavBar } />
            <Route path="/men" component={ SideDrawer } />
            <Route path="/footer" component={ Footer } />
            <Route path="/header" component={ Header } />
        </Switch>
    </BrowserRouter> 
);
export default Routes;
