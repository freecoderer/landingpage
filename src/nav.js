import React, { useState } from 'react';
import logo from './logo.svg';
import './nav.css';

const Navbar = ({ onLanguageToggle, language}) => {

    return (
        <nav>
            <div className={"flex"}>
                <img src={logo} alt="Logo" className={"logo"}/>
                <button className={"button-white"} onClick={onLanguageToggle}>
                    {language === 'en' ? 'Change language to Korean' : 'Change language to English'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;