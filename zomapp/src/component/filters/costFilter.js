import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/filter";

class CostFilter extends Component {

    CostFilter = (event) => {
        let mealId = this.props.mealId;
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
            .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
            <>
                <center><h3>Cost Filter</h3></center>
                <div style={{marginLeft:'15%'}} onChange={this.CostFilter}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="100-300"/>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="301-600"/>301-600
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="601-1000"/>601-1000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1001-5000"/>1001-5000
                    </label>
                </div>
            </>
        )
    }
    
}

export default CostFilter;