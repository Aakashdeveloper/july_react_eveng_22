import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import Product from './productDisplay';

class App extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON
        }
    }

    filterData = () => {

    }

    render(){
        return (
            <>
                <Header userInput={(data) => {console.log('inside home',data)}}/>
                <Product prodData={this.state.productData}/>
                <Footer year="2022" month="July"/>
            </>
        )
    }
}

export default App;