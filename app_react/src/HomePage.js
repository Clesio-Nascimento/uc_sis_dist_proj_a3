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
            <li><a href="/cadastro">Cadastro</a></li>
            <li><a href="/pedidos">Pedidos</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/clientes">clientes</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Bem-vindo à cayle store!</h2>
          <p>Esta é uma página inicial simples criada em ReactJS.</p>
          <button onClick={incrementCount}>Clique Aqui!</button>
          <p>Você clicou {count} vezes.</p>
        </section>
        <section className="image-section">
          <img src="https://via.placeholder.com/400" alt="Imagem de exemplo" />
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Minha Empresa</p>
      </footer>
    </div>
  );
};

export default HomePage;
