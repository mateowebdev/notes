import { useState } from "react";

function Nota({ handleNueva }) {
  const [nota, setNota] = useState({});
  const [valido, setValido] = useState(true);

  const handleChange = (e) => {
    let texto = e.target.value;
    let nota = { tipo: "", descripcion: texto.slice(1).trim() };

    let simbolo = texto.charAt(0);

    const simbolos = ["*", "-", "!", ".", "?", "+"];
    if (simbolos.indexOf(simbolo) !== -1) {
      setValido(true);
    } else {
      setValido(false);
    }

    if (simbolo === "*") {
      nota.tipo = "momento";
    }
    if (simbolo === "!") {
      nota.tipo = "advertencia";
    }
    if (simbolo === "?") {
      nota.tipo = "duda";
    }
    if (simbolo === ".") {
      nota.tipo = "neutro";
    }
    if (simbolo === "+") {
      nota.tipo = "positivo";
    }
    if (simbolo === "-") {
      nota.tipo = "negativo";
    }
    setNota(nota);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nota.tipo !== "" && nota.descripcion !== "") {
      handleNueva(nota);
      e.target.reset();
      setNota({ tipo: "", descripcion: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={!valido ? "invalido" : ""}
        placeholder=". escribe un comentario"
        onChange={(e) => handleChange(e)}
        type="text"
        name="nota"
        id="nota"
      />
      <button type="submit">+</button>
    </form>
  );
}

export default Nota;
