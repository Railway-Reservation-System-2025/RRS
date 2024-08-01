import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/api.services';

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      localStorage.setItem('user', JSON.stringify(response));
      setMessage('Signup successful!');
      navigate('/');
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button type="submit">Signup</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Signup;
