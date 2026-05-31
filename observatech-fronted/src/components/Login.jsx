import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 1. Importamos el hook de navegación
import { LogIn, User, Lock, Terminal } from 'lucide-react';
import { loginUser } from '../services/api';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // 👈 2. Inicializamos el enrutador

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      
      // Muestra la alerta de éxito
      alert(response.data.message || "¡Acceso concedido!"); 
      
      // 👈 3. ¡AQUÍ ESTÁ LA MAGIA! Redirecciona al usuario al panel interno
      navigate('/usuarios'); 
      
    } catch (error) {
      alert("Error: Credenciales inválidas");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="brand-header">
          <Terminal size={32} color="#38bdf8" />
          <h1>OBSERVA<span>TECH</span></h1>
        </div>
        
        <p className="subtitle">SISTEMA DE GESTIÓN EDUCATIVA v1.0</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <User className="input-icon" size={18} />
            <input 
              type="email" 
              placeholder="Email del Administrador" 
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              required 
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" size={18} />
            <input 
              type="password" 
              placeholder="Contraseña de Acceso" 
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required 
            />
          </div>

          <button type="submit" className="login-button">
            <LogIn size={18} style={{ marginRight: '8px' }} />
            ACCEDER AL PANEL
          </button>
        </form>
        
        <div className="footer-info">
          <p>Auth: admin@observatech.edu.co</p>
        </div>
      </div>
    </div>
  );
};

export default Login;