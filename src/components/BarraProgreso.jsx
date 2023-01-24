import React from "react";

function BarraProgreso({ progreso }) {
  return (
    <div className="barra">
      <div className="relleno" style={{ width: `${progreso}%` }}></div>
    </div>
  );
}

export default BarraProgreso;
