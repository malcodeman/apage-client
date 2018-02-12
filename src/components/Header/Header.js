import React from 'react';
import './header.css';
import logo from './assets/logo.svg';

const Header = () => {
    return(
        <header className="header">
            <nav className="nav">
                <a className="link" href="/">
                    <img className="logo" src={logo} alt="logo"/>
                    <span className="bold">Fitness</span>Body
                </a>
            </nav>
        </header>
    )
}

export default Header;