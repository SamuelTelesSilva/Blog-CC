import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Card from './components/Card';
import CardMobile from './components/CardMobile/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/card" component={Card} />
            <Route path="/cardm" component={ CardMobile } />
        </Switch>
    </BrowserRouter> 
);
export default Routes;
