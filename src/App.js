import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './Router';
import NavBar from './components/NavBar';
import Box from '@material-ui/core/Box';
import {boxPadding, boxPaddingMobile} from "./styles";
import { isMobile } from 'react-device-detect';

const App = () => (
    <BrowserRouter>
        <div className="App">
            <NavBar />
            <br/>
            <br/>
            <br/>
            <Box style={isMobile ? boxPaddingMobile : boxPadding}>
                <Router basename={process.env.PUBLIC_URL} />
            </Box>
        </div>
    </BrowserRouter>
);

export default App;
