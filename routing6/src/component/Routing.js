import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import PostDetails from './PostDetails';
import Profile from './Profile';
import Main from './main';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="post" element={<Post/>}/>
                        <Route path="post/:topic" element={<PostDetails/>}/>
                        <Route path="profile" element={<Profile/>}/>
                    <Route/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing
