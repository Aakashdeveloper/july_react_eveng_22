import React,{Component} from 'react';
import axios from 'axios';
import UserDisplay from './userDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

class ViewUser extends Component{
    constructor(props){
        super(props)

        this.state={
            users:''
        }
    }

    render(){
        return(
            <>
                <UserDisplay userData={this.state.users}/>
            </>
        )
    }

    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({users:res.data})})
    }
}

export default ViewUser;