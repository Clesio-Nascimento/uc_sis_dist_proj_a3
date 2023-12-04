import React, { useState } from 'react';

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
    
    // Converte os valores para números se os campos forem quantity ou price
    const newValue = (name === 'quantity' || name === 'price') ? parseFloat(value) : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.code || !formData.quantity || !formData.price) {
      setFeedback('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3003/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newProduct = await response.json();
        setFeedback(`Produto criado com sucesso! ID: ${newProduct.id}`);
      } else {
        const errorMessage = await response.text();
        setFeedback(`Erro ao criar produto: ${errorMessage}`);
      }
    } catch (error) {
      setFeedback('Erro ao conectar-se ao servidor.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    heading: {
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      width: '300px',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#555',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    input: {
      padding: '8px',
      width: '100%',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '8px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    feedback: {
      marginTop: '20px',
      color: 'green',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Criar Produto</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Código:
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Quantidade:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Preço:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <button type="submit" style={styles.button}>Criar Produto</button>
      </form>
      {feedback && <p style={styles.feedback}>{feedback}</p>}
    </div>
  );
};

export default CreateProductForm;
