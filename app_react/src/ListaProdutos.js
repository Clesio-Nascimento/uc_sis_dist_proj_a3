import React, { useState, useEffect } from 'react';
import './ListaProdutos.css'; // Arquivo de estilos CSS

const ListaProdutos = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3003/products');
        if (response.ok) {
          const productsData = await response.json();
          setProducts(productsData);
        } else {
          setError('Erro ao buscar os produtos.');
        }
      } catch (error) {
        setError('Erro ao conectar-se ao servidor.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      <h2>Lista de Produtos</h2>
      {error && <p className="error-message">{error}</p>}
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <p><strong>Nome:</strong> {product.name}</p>
            <p><strong>Código:</strong> {product.code}</p>
            <p><strong>Quantidade:</strong> {product.quantity}</p>
            <p><strong>Preço:</strong> {product.price}</p>
            <hr className="divider" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProdutos;
