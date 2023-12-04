import React, { useState } from 'react';

const CreateCustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      setFeedback('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newCustomer = await response.json();
        setFeedback(`Cliente criado com sucesso! ID: ${newCustomer.id}`);
      } else {
        const errorMessage = await response.text();
        setFeedback(`Erro ao criar cliente: ${errorMessage}`);
      }
    } catch (error) {
      setFeedback('Erro ao conectar-se ao servidor.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Criar Cliente</h2>
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
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Senha:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Telefone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <button type="submit" style={styles.button}>Criar Cliente</button>
      </form>
      {feedback && <p style={styles.feedback}>{feedback}</p>}
    </div>
  );
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

export default CreateCustomerForm;
