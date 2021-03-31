import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Card from './components/Card';
import NavBar from './components/navBarResponsive/NavBar';
import MenuMobile from './components/navBarResponsive/MenuMobile'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/card" component={Card} />
            <Route path="/nav" component={ NavBar } />
            <Route path="/men" component={ MenuMobile } />
        </Switch>
    </BrowserRouter> 
);
export default Routes;
