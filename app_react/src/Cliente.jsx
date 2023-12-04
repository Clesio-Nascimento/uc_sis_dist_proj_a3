import React from 'react';
import { Link } from 'react-router-dom';
import './micro.css'; // Arquivo de estilos CSS

const Cliente = () => {
  return (
    <div className="container">
      <header>
        <h1>Cayle Store</h1>
        <nav>
          <ul>
            <li><Link to="/cadastrar-produtos">Cadastrar Cliente</Link></li>
            <li><Link to="/produtos-cadastrados">Clientes Cadastrados</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="buttons-section">
          <Link to="/cadastrocliente" className="custom-button">Cadastrar Cliente</Link>
          <Link to="/listaclientes" className="custom-button">Ver Clientes Cadastrados</Link>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Minha Empresa</p>
      </footer>
    </div>
  );
};

export default Cliente;
