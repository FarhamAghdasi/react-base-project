import React, { useState } from 'react';
import Crud from '../components/api/Crud';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const { signUp } = Crud({ url: 'http://localhost/api' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
      <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
      <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
