import React, { useState } from 'react';
import axios from 'axios';
import './CreateOrder.css'; // Arquivo CSS para estilos

const CreateOrder = () => {
  const [customerId, setCustomerId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleCreateOrder = async () => {
    try {
      const orderData = {
        customerId,
        items: [
          {
            productId,
            quantity: parseInt(quantity), // Converte para número
          },
        ],
      };

      const response = await axios.post('http://localhost:3002/orders', orderData);

      console.log('Ordem criada:', response.data);
      // Adicione aqui qualquer ação adicional após a criação da ordem
    } catch (error) {
      console.error('Erro ao criar a ordem:', error);
    }
  };

  return (
    <div className="create-order-container">
      <h2>Criar Ordem</h2>
      <div className="input-container">
        <label>Customer ID:</label>
        <input
          type="text"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Product ID:</label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button className="create-order-button" onClick={handleCreateOrder}>Criar Ordem</button>
    </div>
  );
};

export default CreateOrder;
