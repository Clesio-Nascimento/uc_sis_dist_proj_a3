import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrdersList.css'; // Importe o arquivo de estilos CSS

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('http://localhost:3002/orders'); // Substitua pela sua URL de backend
        setOrders(response.data);
      } catch (error) {
        console.error('Erro ao buscar as ordens:', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="orders-list-container">
      <h1>Lista de Pedidos</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
