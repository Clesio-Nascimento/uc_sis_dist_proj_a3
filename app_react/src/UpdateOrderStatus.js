import React, { useState } from 'react';
import axios from 'axios';
import './UpdateOrderStatus.css'; // Importe seus estilos CSS aqui

const UpdateOrderStatus = () => {
  const [orderId, setOrderId] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleUpdateStatus = async () => {
    try {
      await axios.patch('http://localhost:3002/orders', { id: orderId, status: newStatus });
      setStatusMessage('Status atualizado com sucesso!');
    } catch (error) {
      setStatusMessage('Erro ao atualizar o status.');
      console.error('Erro ao atualizar o status:', error);
    }
  };

  return (
    <div className="update-order-status-container">
      <h2>Atualizar Status do Pedido</h2>
      <div className="input-container">
        <label>Order ID:</label>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-container">
        <label>Novo Status:</label>
        <input
          type="text"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleUpdateStatus} className="update-button">Atualizar Status</button>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default UpdateOrderStatus;
