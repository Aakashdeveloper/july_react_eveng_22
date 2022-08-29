import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Developer Funnel</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            

                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">
                                    <span className="glyphicon glyphicon-log-in"></span> Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/register">
                                    <span className="glyphicon glyphicon-user"></span> SignUp
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;
