import React,{Component} from 'react';

const url = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component{

    constructor(props){
        super(props)

        this.state={
            email:'Nikki@gmail.com',
            password:12345678
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
        .then(this.props.history.push(`/profile`))
    }


    render(){
        return(
           <div className="container">
               <div className="panel panel-success">
                   <div className="panel-heading">
                    <h3>Login</h3>
                   </div>
                   <div className="panel-body">
                       <form>
                           <div className="row">
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

                           </div>
                           <button className="btn btn-success" onClick={this.handleCheckout} >Login</button>
                       </form>
                   </div>
               </div>
            </div>
        )
    }
}

export default Login;