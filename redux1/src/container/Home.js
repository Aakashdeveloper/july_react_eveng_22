import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionFile';
import DisplayComponent from '../component/DisplayComponent';

class Home extends Component {

    //call Action
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.myData}/>
            </div>
        )
    }
}


// here we will receive the updated state
function mapStateToProps(state){
    return {
        myData:state.films
    }
}

export default connect(mapStateToProps)(Home)