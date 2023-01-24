import "./App.css";

import { useState } from "react";
import Header from "./components/Header";
import Anotador from "./components/Anotador";
import Nota from "./components/Nota";
import BarraProgreso from "./components/BarraProgreso";
import { useEffect } from "react";

function App() {
  const [notas, setNotas] = useState([]);
  const [puntaje, setPuntaje] = useState(0);
  const [estatus, setEstatus] = useState("");

  const handleEstatus = (num) => {
    if (num < 60) {
      setEstatus("No recomendado.");
    } else if (num < 75) {
      setEstatus("Recomendado dudoso.");
    } else {
      setEstatus("¡Recomendado!");
    }
  };

  const handlePuntaje = () => {
    const tipos = ["negativo", "advertencia", "duda", "neutro", "positivo"];
    const valores = [-2, -1, 0, 1, 2];
    const lista = notas.filter((nota) => nota.tipo !== "momento");
    if (lista.length > 0) {
      let total = 0;

      lista.forEach((not) => {
        total += valores[tipos.indexOf(not.tipo)];
      });

      total = total / lista.length;
      // pasarlo a 100
      total = parseInt((total + 2) * 25);

      setPuntaje(total);
      handleEstatus(total);
    }
  };

  const nuevaNota = (nueva) => {
    setNotas((prev) => [...prev, nueva]);
  };
  const eliminarNota = (descripcion) => {
    const newLista = notas.filter((nota) => nota.descripcion !== descripcion);
    setNotas((prev) => [...newLista]);
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
    handlePuntaje();
  }, [notas]);

  return (
    <div>
      <Header />
      <div className="fila">
        <BarraProgreso progreso={puntaje} />
        <div className="resultado">
          <h5>
            ({puntaje}) Estatus: {estatus}
          </h5>
        </div>
      </div>
      <Anotador notas={notas} handleEliminar={eliminarNota} />
      <Nota handleNueva={nuevaNota} />
    </div>
  );
}

export default App;
