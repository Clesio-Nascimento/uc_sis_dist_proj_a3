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
          <Link to="/cadastraorder" className="custom-button">Cadastrar Pedido</Link>
          <Link to="/listaorder" className="custom-button">Lista de Pedidos</Link>
          <Link to="/status" className="custom-button">Altera status</Link>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Minha Empresa</p>
      </footer>
    </div>
  );
};

export default Produto;
