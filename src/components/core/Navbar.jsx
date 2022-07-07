import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {    
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home
                                    <i className="fa fa-home"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Generated quizes
                                    <i className="fa fa-picture-o"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About
                                        <i className="fa fa-picture-o"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <h1 className="navbar-brand mx-auto">QUIZ GENERATOR</h1>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2"></div>
                </nav>
            </>
        )
    }
}

export default Navbar;