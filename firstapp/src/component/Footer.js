import React from 'react';

const Footer = (props) => {
    console.log("in footer",props)

    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Developer Funnels {props.year} {props.month}</h3>
            </center>
            
        </React.Fragment>
    )
}

export default Footer;
