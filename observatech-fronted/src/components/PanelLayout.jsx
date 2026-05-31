import React from 'react';
import './App.css'; // Asegura que los estilos estén cargados

const PanelLayout = ({ title, children }) => {
  return (
    <div className="glass-panel">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="panel-body">
        {children}
      </div>
    </div>
  );
};

export default PanelLayout;