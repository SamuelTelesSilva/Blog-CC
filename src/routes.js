import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Card from './components/Card';
import Toolbar from './components/NavBar/Toolbar';
import SideDrawer from './components/NavBar/SideDrawer'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/card" component={Card} />
            <Route path="/nav" component={ Toolbar } />
            <Route path="/men" component={ SideDrawer } />
        </Switch>
    </BrowserRouter> 
);
export default Routes;
