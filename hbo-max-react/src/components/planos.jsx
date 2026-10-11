import Plano from './plano'

function Planos({ planos, textoBotao }) {
  return (
    <section id="planos">
      <h2>ESCOLHA O MELHOR PLANO PARA VOCE</h2>

      {planos.map((plano) => (
        <Plano
          key={plano.nome}
          plano={plano}
          textoBotao={textoBotao}
        />
      ))}
    </section>
  )
}

export default Planos