import React from 'react';
import {FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom'; 
// <Link to="/create-point"><Link>
// SPA = Link permite ter o projeto em Simple Page Aplication 
// Trocar de telas (Rotas) sem recarregar
// toda a aplicação

import './styles.css';

import logo from '../../assets/logo.svg';
const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>

                <main>
                    <h1>
                        Seu marketplace de coleta  de resíduos.
                    </h1>
                    <p> Ajudamos pessoas a encontrarem pontos de colega de forma eficiente.</p>




                    <Link to="/create-point">
                    <span>
                       <FiLogIn />
                    </span>
                    <strong> Cadastre um ponto de coleta</strong>
                </Link>
                </main>

            

            </div>
        </div>
    )
}

export default Home;