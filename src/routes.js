import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Card from './components/Card';
import NavBar from './components/NavBar';
import MenuMobile from './components/MenuMobile'

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
