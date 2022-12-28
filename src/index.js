import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//TODO - Import app components here
import { Home, About, Projects } from './components/index.js';

const App = () => {
    //TODO - Add state hooks here

    return <div className='app'>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
        </Switch>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);