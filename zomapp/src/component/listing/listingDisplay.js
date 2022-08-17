import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item) => {
                    return(
                        <h1>Data</h1>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data As Per Filter</h2>
                    </div>
                )
            }

        }else{
            return(
                <div>
                    <h2>Loading...</h2>
                    <img src="/images/loader.gif" alt="loader"/>
                </div>
            )
        }

    }

    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay