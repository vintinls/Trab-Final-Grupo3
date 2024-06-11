import React from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link
import './style.css';
import logo from '../../assets/logoSite.png';

const Header2 = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <div className="text">Serra Market</div>
            </div>
            <Link to="/">Voltar ao Feed</Link> {/* Use Link ao invés de window.location.href */}
        </header>
    );
};

export default Header2;
