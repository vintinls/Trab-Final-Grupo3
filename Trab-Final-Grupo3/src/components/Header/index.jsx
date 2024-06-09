import React from 'react';
import './style.css'; // Arquivo CSS separado para estilos
import logo from '../../assets/logoSite.png';

const Header = () => {
    const rota = () => {
        window.location.href = '/pagina-anuncio'; // Mude para a rota desejada
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <div className="text">Serra Market</div>
            </div>
            <button className="button" onClick={rota}>Criar um anúncio</button>
        </header>
    );
};

export default Header;
