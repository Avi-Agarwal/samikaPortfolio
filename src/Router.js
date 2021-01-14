import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Egg from './pages/Egg';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Router = () => (
    <Switch>
        <Route
            exact
            path='/'
            component={Portfolio}
        />
        <Route
            path='/portfolio'
            component={Portfolio}
        />
        <Route
            path='/contact'
            component={ContactPage}
        />
        <Route
            path='/blog'
            component={Blog}
        />
        <Route
            path='/about'
            component={AboutPage}
        />
        <Route
            path='/avi'
            component={Egg}
        />

    </Switch>
);

export default Router;
