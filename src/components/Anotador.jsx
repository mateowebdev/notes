function Anotador({ notas, handleEliminar }) {
  return (
    <section className="notas">
      {notas.map((nota, i) => (
        <p className={nota.tipo} key={i}>
          <span>{nota.descripcion}</span>
          <button
            className="delete"
            onClick={() => handleEliminar(nota.descripcion)}
          >
            x
          </button>
        </p>
      ))}
    </section>
  );
}

export default Anotador;
