import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './Router';
import NavBar from './components/NavBar';
import Box from '@material-ui/core/Box';

const App = () => (
    <BrowserRouter>
        <div className="App">
            <NavBar />
            <br/>
            <br/>
            <br/>
            <Box >
                <Router />
            </Box>
        </div>
    </BrowserRouter>
);

export default App;
