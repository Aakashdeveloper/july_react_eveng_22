import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';
import Details from './component/details/restDetails';
import PlaceOrder from './component/booking/placeOrder';
import ViewBooking from './component/booking/viewOrder';
import Login from './component/login/login';
import Register from './component/login/register';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:mealId" component={Listing}/>
            <Route path="/details" component={Details}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewBooking" component={ViewBooking}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing
