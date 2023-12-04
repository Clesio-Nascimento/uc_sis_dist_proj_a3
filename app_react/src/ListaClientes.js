import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa'; // Importando ícones do React Icons
import './ListaClientes.css'; // Importando o arquivo de estilos CSS

function ListaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Faz a requisição para buscar os clientes quando o componente for montado
    fetch('http://localhost:3001/customers')
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Erro ao buscar clientes:', error));
  }, []); // O segundo argumento vazio faz com que este efeito só execute uma vez

  return (
    <div className="clientes-container">
      <h1 className="clientes-title">Lista de Clientes</h1>
      <ul className="clientes-list">
        {clientes.map(cliente => (
          <li key={cliente.id} className="cliente-item">
            <FaUser className="cliente-icon" />
            <div className="cliente-details">
              <span className="cliente-name">{cliente.name}</span>
              <div className="cliente-email">
                <FaEnvelope className="email-icon" />
                {cliente.email}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaClientes;
