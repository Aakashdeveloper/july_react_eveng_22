import React,{Component} from 'react';
import './placeOrder.css';

const url = "http://zomatoajulypi.herokuapp.com/menuItem";
const placeOrder = ""

class PlaceOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Nikita',
            email:'Nikki@gmail.com',
            cost:0,
            phone:87867678,
            address:"YRT 45/13",
            menuItem:''
        }

    }

    render(){
        return(
           <div className="container">
               <div className="panel panel-primary">
                   <div className="panel-heading">
                    <h3>Your Order Form Restaurant {this.state.hotel_name}</h3>
                   </div>
                   <div className="panel-body">
                       <form>
                           <div className="form-group col-md-6">
                               <label>Name</label>
                               <input className="form-control" name="name"
                               value={this.state.name}/>
                           </div>
                           <div className="form-group col-md-6">
                               <label>Email</label>
                               <input className="form-control" name="email"
                               value={this.state.email}/>
                           </div>
                           <div className="form-group col-md-6">
                               <label>Phone</label>
                               <input className="form-control" name="phone"
                               value={this.state.phone}/>
                           </div>
                           <div className="form-group col-md-6">
                               <label>Address</label>
                               <input className="form-control" name="address"
                               value={this.state.address}/>
                           </div>
                           
                       </form>
                   </div>
               </div>
            </div>
        )
    }
}

export default PlaceOrder;