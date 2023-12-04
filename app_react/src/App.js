import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Importe seus estilos ou arquivos CSS aqui

import HomePage from './HomePage';
import CreateCustomerForm from './CreateCustomerForm';
import CreateProductForm from './CreateProductForm';
import ListaClientes from './ListaClientes';


const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/clientes">clientes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CreateCustomerForm />} />
          <Route path="/produtos" element={<CreateProductForm />} />
          <Route path="/clientes" element={<ListaClientes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
