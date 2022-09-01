import React,{Component} from 'react';
import axios from 'axios';
import Display from './displayOrder';
import Header from '../../Header'


const placeOrder = "http://localhost:9870/orders"
class ViewOrder extends Component{

    constructor(props){
        super(props)
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        this.state={
            orders:'',
            email:email
        }
    }

    render(){
        return(
            <>
                <Header/>
                <Display orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){
        console.log(">>>>",this.state.email)
        axios.get(`${placeOrder}?email=${this.state.email}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;