import React from "react";
import { Link , NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    React User
                </Link>
                <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedConatnt"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                    </div>
                </div> 
        </nav>
    );

}
export default Navbar;