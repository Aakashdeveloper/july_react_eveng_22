import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Header from '../../Header'

const Home = (props) => {
    console.log("inside home>>>",props)
    return(
        <React.Fragment>
            <Header/>
            <Search/>
            <QuickSearch/>
        </React.Fragment>
    )
}

export default Home;
