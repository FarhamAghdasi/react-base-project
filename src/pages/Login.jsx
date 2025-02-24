import React, { useState } from 'react';
import Crud from '../components/api/Crud';
import { useAuth } from '../components/api/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login: loginUser } = Crud({ url: 'http://localhost/api' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      login(response.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
      <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
