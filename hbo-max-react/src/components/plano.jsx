function Plano({ plano, textoBotao }) {
  return (
    <section className="sessao">
      <h3>{plano.nome}</h3>

      {plano.recursos.map((recurso) => (
        <p key={recurso}>- {recurso}</p>
      ))}

      <h2>R$ {plano.preco}/mes</h2>

      <button>{textoBotao}</button>
    </section>
  )
}

export default Plano