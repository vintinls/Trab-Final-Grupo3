import React from 'react';
import './style.css'; // Arquivo CSS separado para estilos
import logo from '../../assets/logoSite.png';

const Header2 = () => {
    const rota2 = () => {
        window.location.href = '/pagina-anuncio'; // Mude para a rota desejada
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <div className="text">Serra Market</div>
            </div>
            <button className="button" onClick={rota2}>Voltar ao Feed</button>
        </header>
    );
};

export default Header2;
