import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/App.css"; // Debería coincidir con la ubicación actual del archivo
// Importación de componentes desde la carpeta components
import Reportes from './components/Reportes';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Usuarios from "./components/Usuarios";
import Narrativas from "./components/Narrativas";
import Evaluaciones from "./components/Evaluaciones";

// 💡 CORRECCIÓN: Apuntamos a la carpeta components donde está tu App.css
import "./components/App.css"; 

function App() {
  return (
    <Router>
      {/* El Navbar se mantiene fijo arriba en todas las pantallas */}
      <Navbar /> 

      {/* Contenedor principal para renderizar las vistas */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/narrativas" element={<Narrativas />} />
          <Route path="/evaluaciones" element={<Evaluaciones />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
