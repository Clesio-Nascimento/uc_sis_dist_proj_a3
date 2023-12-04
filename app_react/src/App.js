import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Importe seus estilos ou arquivos CSS aqui

import HomePage from './HomePage';
import CreateCustomerForm from './CreateCustomerForm';
import ListaClientes from './ListaClientes';
import ListaProdutos from './ListaProdutos';
import Produto from './Produto';
import CreateProductForm from './CreateProductForm';
import Cliente from './Cliente';
import Pedido from './Pedido';


const App = () => {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastrocliente" element={<CreateCustomerForm />} />
          <Route path="/produtos" element={<Produto />} />
          <Route path="/listaclientes" element={<ListaClientes />} />
          <Route path="/listaprodutos" element={<ListaProdutos />} />
          <Route path="/cadastrarprodutos" element={<CreateProductForm />} />
          <Route path="/clientes" element={<Cliente />} />
          <Route path="/pedidos" element={<Pedido />} />          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
