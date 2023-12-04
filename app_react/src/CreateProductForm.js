import React, { useState } from 'react';
import './CreateProductForm.css'; // Certifique-se de ter o arquivo CSS

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    quantity: '',
    price: '',
  });
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica para enviar os dados do produto para o backend
    try {
      // Implemente o código de envio dos dados para o backend
      setFeedback('Produto criado com sucesso!');
      setFormData({
        name: '',
        code: '',
        quantity: '',
        price: '',
      });
    } catch (error) {
      setFeedback('Erro ao conectar-se ao servidor.');
    }
  };

  return (
    <div className="form-container">
      <h2>Criar Produto</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome do produto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Código:</label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Código do produto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantidade disponível"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Preço do produto"
          />
        </div>
        <button type="submit">Criar Produto</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default CreateProductForm;
