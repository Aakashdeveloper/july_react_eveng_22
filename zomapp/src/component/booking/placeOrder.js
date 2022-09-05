import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../Header'

const url = "http://zomatoajulypi.herokuapp.com/menuItem";
const placeOrder = "http://localhost:9870/orders"

class PlaceOrder extends Component{

    constructor(props){
        super(props)
        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]
        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:sessionData?sessionData[0]:'',
            email:sessionData?sessionData[1]:'',
            cost:0,
            phone:sessionData?sessionData[2]:'',
            address:"YRT 45/13",
            menuItem:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleCheckout = () => {
        let obj = this.state;
        
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(placeOrder,{
            method:'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        //.then(this.props.history.push(`/viewBooking`))
        .then(console.log('Order Added'))
    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </>
            )

        }
        return(
            <>
            <Header/>
            <div className="container">
               <div className="panel panel-primary">
                   <div className="panel-heading">
                    <h3>Your Order Form Restaurant {this.state.hotel_name}</h3>
                   </div>
                   <div className="panel-body">
                       <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                           <div className="row">
                               <input type="hidden" name="cost" value={this.state.cost}/>
                               <input type="hidden" name="id" value={this.state.id}/>
                               <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
                                <div className="form-group col-md-6">
                                    <label>Name</label>
                                    <input className="form-control" name="name"
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input className="form-control" name="email"
                                    value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Phone</label>
                                    <input className="form-control" name="phone"
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Address</label>
                                    <input className="form-control" name="address"
                                    value={this.state.address} onChange={this.handleChange}/>
                                </div>
                           </div>
                           {this.renderItem(this.state.menuItem)}
                           <div className="row">
                               <div className="col-md-12">
                                   <h2>Total Price is Rs. {this.state.cost}</h2>
                               </div>
                           </div>
                           <button className="btn btn-success" onClick={this.handleCheckout} 
                           type="submit">Checkout</button>
                       </form>
                   </div>
               </div>
            </div>
            </>
        )
    }

    //calling api 
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + Number(item.menu_price);
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice});
        })
    }
}

export default PlaceOrder;