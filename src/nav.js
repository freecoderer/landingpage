import React from 'react';
import logo from './logo.svg';
import './nav.css';
const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" className={"logo"} />
        </nav>
    );
};

export default Navbar;