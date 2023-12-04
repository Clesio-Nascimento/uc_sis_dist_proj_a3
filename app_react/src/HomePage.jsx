

import React, { useState } from 'react';
import './HomePage.css'; // Arquivo de estilos CSS

const HomePage = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <header>
        <h1>Cayle Store</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/clientes">Clientes</a></li>
            <li><a href="/pedidos">Pedidos</a></li>
            <li><a href="/produtos">Produtos</a></li>           
            
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Bem-vindo à Cayle Store!</h2>
          
        </section>
        <section className="image-section">
          <img src="https://marketplace.canva.com/EAFb9QOJg5g/1/0/1600w/canva-banner-para-loja-online-frete-gr%C3%A1tis-mercado-shops-m%C3%A9dio-paTGOKamJ9A.jpg" alt="Imagem de exemplo" />
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Minha Empresa</p>
      </footer>
    </div>
  );
};

export default HomePage;
