import React from 'react';
import PanelLayout from './PanelLayout';

function Reportes() {
  return (
    <PanelLayout title="Panel de Reportes">
      <p>Aquí puedes colocar el contenido que desees bajo el molde estandarizado.</p>
      {/* Puedes meter formularios, tablas o gráficas aquí */}
      <button>Generar Reporte</button>
    </PanelLayout>
  );
}

export default Reportes;