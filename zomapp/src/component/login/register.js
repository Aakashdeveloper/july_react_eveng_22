import React,{Component} from 'react';
import Header from '../../Header'

const url = "https://developerjwt.herokuapp.com/api/auth/register";

class Regitser extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'Nikita',
            email:'Nikki@gmail.com',
            password:'12345678',
            phone:87867678
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleCheckout = () => {
        fetch(url,{
            method:'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        // .then(console.log('hiii'))
        .then(this.props.history.push(`/`))
    }


    render(){
        return(
            <>
            <Header/>
            <div className="container">
               <div className="panel panel-primary">
                   <div className="panel-heading">
                    <h3>Register</h3>
                   </div>
                   <div className="panel-body">
                           <div className="row">
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
                                    <label>Password</label>
                                    <input className="form-control" name="password"
                                    value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Phone</label>
                                    <input className="form-control" name="phone"
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                               
                           </div>
                           <button className="btn btn-success" onClick={this.handleCheckout} >Register</button>
                   </div>
               </div>
            </div>
            </>
        )
    }
}

export default Regitser;