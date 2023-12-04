import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productList = await fetchProducts(); // Chame a função que obtém os produtos
        setProducts(productList);
      } catch (error) {
        setError('Erro ao carregar a lista de produtos.');
      }
    };

    getProducts();
  }, []);

  return (
    <div className="ProductList">
      <h2>Lista de Produtos</h2>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>ID: {product.id}</p>
            <p>Nome: {product.name}</p>
            <p>Código: {product.code}</p>
            <p>Quantidade: {product.quantity}</p>
            <p>Preço: {product.price}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
