import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render(){
        return (
            <>
                <Header/>
                <h1>Hiii From React</h1>
                <h2>Developer Funnel</h2>
                <Footer/>
            </>
        )
    }
}

export default App;