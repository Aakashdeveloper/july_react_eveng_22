import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import Product from './productDisplay';

class App extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    filterData = (keyword) => {
        
        let output = this.state.productData.filter((data) => {
            return (data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })
        console.log("in filtet",output)

        this.setState({filteredData:output})
    }

    render(){
        return (
            <>
                <Header userInput={(data) => {this.filterData(data)}}/>
                <Product prodData={this.state.filteredData}/>
                <Footer year="2022" month="July"/>
            </>
        )
    }
}

export default App;