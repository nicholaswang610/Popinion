import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar.js';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        )
    }
}

export default App;