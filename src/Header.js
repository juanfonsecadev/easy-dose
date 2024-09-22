import React from 'react';
import { Link } from 'react-router-dom'; // Importando o componente Link
import './Header.css';

function Header() {
  return (
    <header className="header">
        <div id="logo">
            <p>SIEMENS</p>
        </div>
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li> {/* Usando o componente Link */}
          <li><Link to="/add" className="nav-link">Adicionar Medicamento</Link></li> {/* Usando o componente Link */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;