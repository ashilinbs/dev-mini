import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      alert('All fields are required!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(u => u.email === email);

    if (userExists) {
      alert('User already exists!');
      return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully!');
    navigate('/login');
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
