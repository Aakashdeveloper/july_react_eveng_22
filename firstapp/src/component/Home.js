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
    render(){
        return (
            <>
                <Header/>
                <Product prodData={this.state.productData}/>
                <Footer year="2022" month="July"/>
            </>
        )
    }
}

export default App;