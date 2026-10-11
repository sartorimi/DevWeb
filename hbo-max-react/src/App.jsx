import './App.css'
import dados from './dados.json'

import Header from './components/header'
import Planos from './components/planos'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />

      <Planos
        planos={dados.planos}
        textoBotao={dados.textoBotao}
      />

      <Footer />
    </>
  )
}

export default App