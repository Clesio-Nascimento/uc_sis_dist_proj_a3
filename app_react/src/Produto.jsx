import React from 'react';
import { Link } from 'react-router-dom';
import './micro.css'; // Arquivo de estilos CSS

const Produto = () => {
  return (
    <div className="container">
      <header>
      <Link to="/"><h1>Cayle Store</h1></Link>
      </header>
      <main>
        <section className="buttons-section">
          <Link to="/cadastrarprodutos" className="custom-button">Cadastrar Produtos</Link>
          <Link to="/listaprodutos" className="custom-button">Ver Produtos Cadastrados</Link>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Minha Empresa</p>
      </footer>
    </div>
  );
};

export default Produto;
