import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import PostDetails from './PostDetails';
import Profile from './Profile';
import Maps from './map'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Route exact path="/" component={Home}/>
                <Route exact path="/post" component={Post}/>
                <Route path="/post/:topic" component={PostDetails}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/maps" component={Maps}/>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing
