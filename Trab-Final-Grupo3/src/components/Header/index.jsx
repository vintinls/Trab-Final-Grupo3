import React from 'react';
import './style.css';
import logo from '../../assets/logoSite.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <div className="text">Serra Market</div>
            </div>
            <div className="button-container">
                <Link to="/produtos">
                    <button className="announce-button">Anunciar Produto</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
