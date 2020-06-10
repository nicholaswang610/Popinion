import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Books from './categories/Books.js';
import Gaming from './categories/Gaming.js';
import Movies from './categories/Movies.js';
import Music from './categories/Music.js';
import GamingPosts from './categories/posts/GamingPosts.js';
import AddGame from './categories/add/AddGame.js';
import AddReview from './categories/add/AddReview.js';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/gaming' component={Gaming}/>
                    <Route path='/gaming/add-game' component={AddGame}/>
                    <Route path='/gaming/add-review' component={AddReview}/>
                    <Route path='/gaming/:title' component={GamingPosts}/>
                    <Route exact path='/movies' component={Movies}/>
                    <Route exact path='/music' component={Music}/>
                    <Route exact path='/books' component={Books}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;