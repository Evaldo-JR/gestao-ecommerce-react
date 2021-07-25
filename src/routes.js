import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Customers from './pages/Customers';
import Store from './pages/Store';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/customers" component={Customers} />
                <Route path="/store" component={Store} />
            </Switch>
        </BrowserRouter>
    );
}
