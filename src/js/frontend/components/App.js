import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Books from './categories/Books.js'
import Gaming from './categories/Gaming.js'
import Movies from './categories/Movies.js'
import Music from './categories/Music.js'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/gaming' component={Gaming}/>
                    <Route path='/movies' component={Movies}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/books' component={Books}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;