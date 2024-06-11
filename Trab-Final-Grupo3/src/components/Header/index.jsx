import React from 'react';
import './style.css';
import logo from '../../assets/logoSite.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <div className="text">Serra Market</div>
            </div>
            <div className="button">
                <Link to={'/produtos'}>
                    <button>Anunciar Produto</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
