import React from 'react';
import './footer.css'

const Footer = (props) => {
    return(
        <footer>
            <hr/>
            <h3>&copy; Developer Funnel</h3>
            <div className="footDiv">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="footDiv">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="footDiv noborder">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <hr/>
           <center>
                <a href="www.facebook.com">
                    <img src="https://i.ibb.co/GRZx3D5/facebook.png" alt="fb"
                        className="socialImg"/>
                </a>
                <a href="www.facebook.com">
                    <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb"
                        className="socialImg"/>
                </a>
                <a href="www.facebook.com">
                    <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb"
                        className="socialImg"/>
                </a>
           </center>

        </footer>
    )
}

export default Footer;
