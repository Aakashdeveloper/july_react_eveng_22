import React from 'react';

function DisplayComponent(props){

    const renderCity =({myCity}) =>{
        if(myCity){
            return myCity.map((item) => {
                return(
                    <div key={item._id}>
                        {item.state}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>City List</h2>
                {renderCity(props)}
            </center>

        </div>
    )
}

export default DisplayComponent