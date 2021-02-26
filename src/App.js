import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './Router';
import NavBar from './components/NavBar';
import {appWrapper} from "./styles";

const App = () => (
    <BrowserRouter>
        <div >
            <div className="App">
                <NavBar />
                <br/>
                <br/>
                <br/>
                <div style={appWrapper}>
                    <Router basename={process.env.PUBLIC_URL} />
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default App;
