import React from 'react';
import logo from './logo.svg';
import './nav.css';

const Navbar = ({ onLanguageToggle, language}) => {

    return (

            <div className={"flexy"}>
                <img src={logo} alt="Logo" className={"logo"}/>
                <button className={"button-white"} onClick={onLanguageToggle}>
                    {language === 'en' ? 'Change language to Korean' : 'Change language to English'}
                </button>
            </div>

    );
};

export default Navbar;