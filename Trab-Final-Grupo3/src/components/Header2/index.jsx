import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logoSite.png';

const Header2 = () => {
    return (
        <header className="header header2">
            <div className="logo-container logo-container2">
                <img src={logo} alt="Logo" className="logo logo2" />
                <div className="text text2">Serra Market</div>
            </div>
            <div className="button-container">
                <Link to="/">
                    <button className="announce-button">Voltar Feed</button>
                </Link>
            </div>
        </header>
    );
};

export default Header2;
