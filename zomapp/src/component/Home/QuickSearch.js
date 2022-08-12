import React,{Component} from 'react';
import './quickSearch.css'

class QuickSearch extends Component {

    render(){
        return(
            <div id="quickSearch">
                <span id="QuickHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By Meal Type
                </span>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/lunch.png" alt="breakfast"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">Breakfast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deals For BreakFast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/nightlife.png" alt="breakfast"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">Breakfast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deals For BreakFast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/dinner.png" alt="breakfast"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">Breakfast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deals For BreakFast
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default QuickSearch;
