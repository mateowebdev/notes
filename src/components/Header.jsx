function Header() {
  return (
    <header>
      <h1>Mis apuntes</h1>
      <p>
        Implementá el símbolo delante de la anotación para crear un{" "}
        <strong>apunte</strong> o un <strong>título</strong> según lo requieras.
      </p>
      <p>
        <small>⚠ El símbolo delante es excluyente.</small>
      </p>
      <div className="machetes">
        <small>
          <strong>*</strong> TÍTULO
        </small>
        <small>
          <strong>-</strong> punto negativo
        </small>
        <small>
          <strong>!</strong> advertencia
        </small>
        <small>
          <strong>?</strong> oportunidad
        </small>
        <small>
          <strong>.</strong> comentario
        </small>
        <small>
          <strong>+</strong> punto positivo
        </small>
      </div>
    </header>
  );
}

export default Header;
